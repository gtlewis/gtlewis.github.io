pragma solidity ^0.4.6;

// Dreddit
contract Dreddit {
    
    // The list of subdreddits
    mapping(uint32 => Subdreddit) subdreddits;
    uint32 subdredditCount;
    
    // The list of users
    mapping(address => User) users;
    
    // getSubdredditCount()
    function getSubdredditCount() constant returns (uint32) {
        
        return subdredditCount;
    }
    
    // User
    struct User {
        
        // The user's list of subscriptions
        mapping(uint32 => bool) subscriptions;
        
        // The user's list of posts (reference)
        UserPost[] posts;
        
        // The user's list of comments (reference)
        UserComment[] comments;
        
        // The user's karma
        int32 karma;
    }
    
    // User.Post
    struct UserPost {
        uint32 subdredditId;
        uint32 postId;
    }
    
    // User.Comment
    struct UserComment {
        uint32 subdredditId;
        uint32 postId;
        uint32 commentId;
    }
    
    // User.subscribe()
    function subscribeUser(uint32 subdredditId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        User user = users[msg.sender];
        if (user.subscriptions[subdredditId]) {
            // Throw if user already subscribed - saves gas
            throw;
        }
        
        user.subscriptions[subdredditId] = true;
    }
    
    // User.unsubscribe()
    function unsubscribeUser(uint32 subdredditId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        User user = users[msg.sender];
        if (!user.subscriptions[subdredditId]) {
            // Throw if user not subscribed - saves gas
            throw;
        }
        
        user.subscriptions[subdredditId] = false;
    }
    
    // User.isSubscribed()
    function isSubscribedByUser(uint32 subdredditId) constant returns (bool) {
        
        User user = users[msg.sender];
        return user.subscriptions[subdredditId];
    }
    
    // User.getPost()
    function getPostByUser(address userAddress, uint index) constant returns (uint32, uint32) {
        
        User user = users[userAddress];
        return (user.posts[index].subdredditId, user.posts[index].postId);
    }
    
    // User.getPostsLength()
    function getPostsLengthForUser(address userAddress) constant returns (uint) {
        
        User user = users[userAddress];
        return user.posts.length;
    }
    
    // User.getKarma()
    function getKarmaForUser(address userAddress) constant returns (int32) {
        
        User user = users[userAddress];
        return user.karma;
    }
    
    // Subdreddit
    struct Subdreddit {
        
        // The subdreddit's name
        string name;
        
        // The subdreddit's list of posts
        mapping(uint32 => Post) posts;
        uint32 postCount;
    }
    
    // Subdreddit.create()
    function createSubdreddit(string name) {
        
        bytes memory nameBytes = bytes(name);
        if (nameBytes.length < 1 || nameBytes.length > 32) {
            // Throw if subdreddit name too short or too long - not permitted
            throw;
        }
        
        // TODO: uniqueness check
        //if (name not unique) {
            // Throw if subdreddit name not unique - not permitted
            //throw;
        //}
        
        Subdreddit subdreddit = subdreddits[subdredditCount];
        subdreddit.name = name;
        subdredditCount++;
        
        // Subscribe user to subdreddit
        subscribeUser(subdredditCount - 1);
    }
    
    // Subdreddit.getName()
    function getNameOfSubdreddit(uint32 subdredditId) constant returns (string) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        return subdreddit.name;
    }
    
    // Subdreddit.getPostCount()
    function getPostCountOfSubdreddit(uint32 subdredditId) constant returns (uint32) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        return subdreddit.postCount;
    }
    
    // Post
    struct Post {
        
        // The post's owner
        address owner;
        
        // The post's title
        string title;
        
        // The post's body
        string body;
        
        // The post's deleted flag
        bool deleted;
        
        // The post's list of upvotes
        mapping(address => bool) upvotes;
        uint32 upvoteCount;
        
        // The post's list of downvotes
        mapping(address => bool) downvotes;
        uint32 downvoteCount;
        
        // The post's list of comments
        //mapping(uint32 => Comment) comments;
        //uint32 commentCount;
    }
    
    // Post.create()
    function createPost(uint32 subdredditId, string postTitle, string postBody) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        bytes memory postTitleBytes = bytes(postTitle);
        if (postTitleBytes.length < 1 || postTitleBytes.length > 255) {
            // Throw if post title too short or too long - not permitted
            throw;
        }
        
        bytes memory postBodyBytes = bytes(postBody);
        if (postBodyBytes.length > 65535) {
            // Throw if post body too long - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[subdreddit.postCount];
        post.owner = msg.sender;
        post.title = postTitle;
        post.body = postBody;
        subdreddit.postCount++;
        
        // Upvote the post
        upvotePost(subdredditId, subdreddit.postCount-1);
        
        // Add the post to the User's list
        User user = users[msg.sender];
        user.posts.push(UserPost(subdredditId, subdreddit.postCount-1));
    }
    
    // Post.edit()
    function editPost(uint32 subdredditId, uint32 postId, string postBody) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        if (postId >= subdreddit.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = subdreddit.posts[postId];
        if (post.owner != msg.sender) {
            // Throw if sender not post owner - not permitted
            throw;
        }

        if (post.deleted) {
            // Throw if post deleted - not permitted
            throw;
        }
        
        bytes memory postBodyBytes = bytes(postBody);
        if (postBodyBytes.length > 65535) {
            // Throw if post body too long - not permitted
            throw;
        }
        
        post.body = postBody;
    }
    
    // Post.delete()
    function deletePost(uint32 subdredditId, uint32 postId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        if (postId >= subdreddit.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = subdreddit.posts[postId];
        if (post.owner != msg.sender) {
            // Throw if sender not post owner - not permitted
            throw;
        }
        
        if (post.deleted) {
            // Throw if post already deleted - saves gas
            throw;
        }

        post.title = "-";
        post.body = "-";
        post.deleted = true;
    }
    
    // Post.upvote()
    function upvotePost(uint32 subdredditId, uint32 postId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        if (postId >= subdreddit.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = subdreddit.posts[postId];
        if (post.upvotes[msg.sender]) {
            // Throw if post already upvoted by user - saves gas
            throw;
        }
        
        // If post downvoted by user, remove downvote
        if (post.downvotes[msg.sender]) {
            removeDownvoteFromPost(subdredditId, postId);
        }
        
        post.upvotes[msg.sender] = true;
        post.upvoteCount++;
        
        User user = users[post.owner];
        user.karma++;
    }
    
    // Post.removeUpvote()
    function removeUpvoteFromPost(uint32 subdredditId, uint32 postId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        if (postId >= subdreddit.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = subdreddit.posts[postId];
        if (!post.upvotes[msg.sender]) {
            // Throw if post not upvoted by user - saves gas
            throw;
        }
        
        post.upvotes[msg.sender] = false;
        post.upvoteCount--;
        
        User user = users[post.owner];
        user.karma--;
    }
    
    // Post.downvote()
    function downvotePost(uint32 subdredditId, uint32 postId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        if (postId >= subdreddit.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = subdreddit.posts[postId];
        if (post.downvotes[msg.sender]) {
            // Throw if post already downvoted by user - saves gas
            throw;
        }
        
        // If post upvoted by user, remove upvote
        if (post.upvotes[msg.sender]) {
            removeUpvoteFromPost(subdredditId, postId);
        }
        
        post.downvotes[msg.sender] = true;
        post.downvoteCount++;
        
        User user = users[post.owner];
        user.karma--;
    }
    
    // Post.removeDownvote()
    function removeDownvoteFromPost(uint32 subdredditId, uint32 postId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        if (postId >= subdreddit.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = subdreddit.posts[postId];
        if (!post.downvotes[msg.sender]) {
            // Throw if post not downvoted by user - saves gas
            throw;
        }
        
        post.downvotes[msg.sender] = false;
        post.downvoteCount--;
        
        User user = users[post.owner];
        user.karma++;
    }
    
    // Post.getOwner()
    function getOwnerOfPost(uint32 subdredditId, uint32 postId) constant returns (address) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[postId];
        return post.owner;
    }
    
    // Post.getTitle()
    function getTitleOfPost(uint32 subdredditId, uint32 postId) constant returns (string) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[postId];
        return post.title;
    }
    
    // Post.getBody()
    function getBodyOfPost(uint32 subdredditId, uint32 postId) constant returns (string) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[postId];
        return post.body;
    }
    
    // Post.isDeleted()
    function isDeletedPost(uint32 subdredditId, uint32 postId) constant returns (bool) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[postId];
        return post.deleted;
    }
    
    // Post.isUpvotedByUser()
    function isPostUpvotedByUser(uint32 subdredditId, uint32 postId) constant returns (bool) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[postId];
        return post.upvotes[msg.sender];
    }
    
    // Post.getUpvoteCount()
    function getUpvoteCountOfPost(uint32 subdredditId, uint32 postId) constant returns (uint32) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[postId];
        return post.upvoteCount;
    }
    
    // Post.isDownvotedByUser()
    function isPostDownvotedByUser(uint32 subdredditId, uint32 postId) constant returns (bool) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[postId];
        return post.downvotes[msg.sender];
    }
    
    // Post.getDownvoteCount()
    function getDownvoteCountOfPost(uint32 subdredditId, uint32 postId) constant returns (uint32) {
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        Post post = subdreddit.posts[postId];
        return post.downvoteCount;
    }
    
    // TODO: get comments
}
