pragma solidity ^0.4.8;

// EtherForum
contract EtherForum {
    
    // The list of forums
    mapping(uint32 => Forum) forums;
    uint32 forumCount;
    
    // The list of users
    mapping(address => User) users;
    
    // getForumCount()
    function getForumCount() constant returns (uint32) {
        
        return forumCount;
    }
    
    // getForumScores()
    function getForumScores(uint32 from, uint32 to) constant returns (int32[]) {
        
        int32[] memory scores = new int32[](to - from);
        for (uint32 i = from; i < to; i++) {
            scores[i] = forums[i].score;
        }
    
        return scores;
    }
    
    // User
    struct User {
        
        // The user's list of subscriptions
        mapping(uint32 => bool) subscriptions;
        
        // The user's list of posts (reference)
        UserPost[] posts;
        
        // The user's list of comments (reference)
        UserComment[] comments;
        
        // The user's score
        int32 score;
    }
    
    // User.Post
    struct UserPost {
        uint32 forumId;
        uint32 postId;
    }
    
    // User.Comment
    struct UserComment {
        uint32 forumId;
        uint32 postId;
        uint32 commentId;
    }
    
    // User.subscribe()
    function subscribeUser(uint32 forumId) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
            throw;
        }
        
        User user = users[msg.sender];
        if (user.subscriptions[forumId]) {
            // Throw if user already subscribed - saves gas
            throw;
        }
        
        user.subscriptions[forumId] = true;
    }
    
    // User.unsubscribe()
    function unsubscribeUser(uint32 forumId) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
            throw;
        }
        
        User user = users[msg.sender];
        if (!user.subscriptions[forumId]) {
            // Throw if user not subscribed - saves gas
            throw;
        }
        
        user.subscriptions[forumId] = false;
    }
    
    // User.isSubscribed()
    function isSubscribedByUser(uint32 forumId) constant returns (bool) {
        
        User user = users[msg.sender];
        return user.subscriptions[forumId];
    }
    
    // User.getPost()
    function getPostByUser(address userAddress, uint index) constant returns (uint32, uint32) {
        
        User user = users[userAddress];
        return (user.posts[index].forumId, user.posts[index].postId);
    }
    
    // User.getPostsLength()
    function getPostsLengthForUser(address userAddress) constant returns (uint) {
        
        User user = users[userAddress];
        return user.posts.length;
    }

    // TODO: User.getComment()

    // User.getCommentsLength()
    function getCommentsLengthForUser(address userAddress) constant returns (uint) {
        
        User user = users[userAddress];
        return user.comments.length;
    }
    
    // User.getScore()
    function getScoreForUser(address userAddress) constant returns (int32) {
        
        User user = users[userAddress];
        return user.score;
    }
    
    // Forum
    struct Forum {
        
        // The forum's name
        string name;
        
        // The forum's list of posts
        mapping(uint32 => Post) posts;
        uint32 postCount;

        // The forum's score
        int32 score;
    }
    
    // Forum.create()
    function createForum(string name) {
        
        bytes memory nameBytes = bytes(name);
        if (nameBytes.length < 1 || nameBytes.length > 32) {
            // Throw if forum name too short or too long - not permitted
            throw;
        }
        
        // TODO: uniqueness check
        //if (name not unique) {
            // Throw if forum name not unique - not permitted
            //throw;
        //}
        
        Forum forum = forums[forumCount];
        forum.name = name;
        forumCount++;
        
        // Subscribe user to forum
        subscribeUser(forumCount - 1);
    }
    
    // Forum.getName()
    function getNameOfForum(uint32 forumId) constant returns (string) {
        
        Forum forum = forums[forumId];
        return forum.name;
    }
    
    // Forum.getPostCount()
    function getPostCountOfForum(uint32 forumId) constant returns (uint32) {
        
        Forum forum = forums[forumId];
        return forum.postCount;
    }
    
    // TODO: Forum.getPostScores(from, to)
    
    // Forum.getScore()
    function getScoreForForum(uint32 forumId) constant returns (int32) {
        
        Forum forum = forums[forumId];
        return forum.score;
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
    function createPost(uint32 forumId, string postTitle, string postBody) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
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
        
        Forum forum = forums[forumId];
        Post post = forum.posts[forum.postCount];
        post.owner = msg.sender;
        post.title = postTitle;
        post.body = postBody;
        forum.postCount++;
        
        // Upvote the post
        upvotePost(forumId, forum.postCount-1);
        
        // Add the post to the User's list
        User user = users[msg.sender];
        user.posts.push(UserPost(forumId, forum.postCount-1));
    }
    
    // Post.edit()
    function editPost(uint32 forumId, uint32 postId, string postBody) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
            throw;
        }
        
        Forum forum = forums[forumId];
        if (postId >= forum.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = forum.posts[postId];
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
    function deletePost(uint32 forumId, uint32 postId) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
            throw;
        }
        
        Forum forum = forums[forumId];
        if (postId >= forum.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = forum.posts[postId];
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
    function upvotePost(uint32 forumId, uint32 postId) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
            throw;
        }
        
        Forum forum = forums[forumId];
        if (postId >= forum.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = forum.posts[postId];
        if (post.upvotes[msg.sender]) {
            // Throw if post already upvoted by user - saves gas
            throw;
        }
        
        // If post downvoted by user, remove downvote
        if (post.downvotes[msg.sender]) {
            removeDownvoteFromPost(forumId, postId);
        }
        
        post.upvotes[msg.sender] = true;
        post.upvoteCount++;
        
        User user = users[post.owner];
        user.score++;
        forum.score++;
    }
    
    // Post.removeUpvote()
    function removeUpvoteFromPost(uint32 forumId, uint32 postId) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
            throw;
        }
        
        Forum forum = forums[forumId];
        if (postId >= forum.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = forum.posts[postId];
        if (!post.upvotes[msg.sender]) {
            // Throw if post not upvoted by user - saves gas
            throw;
        }
        
        post.upvotes[msg.sender] = false;
        post.upvoteCount--;
        
        User user = users[post.owner];
        user.score--;
        forum.score--;
    }
    
    // Post.downvote()
    function downvotePost(uint32 forumId, uint32 postId) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
            throw;
        }
        
        Forum forum = forums[forumId];
        if (postId >= forum.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = forum.posts[postId];
        if (post.downvotes[msg.sender]) {
            // Throw if post already downvoted by user - saves gas
            throw;
        }
        
        // If post upvoted by user, remove upvote
        if (post.upvotes[msg.sender]) {
            removeUpvoteFromPost(forumId, postId);
        }
        
        post.downvotes[msg.sender] = true;
        post.downvoteCount++;
        
        User user = users[post.owner];
        user.score--;
        forum.score--;
    }
    
    // Post.removeDownvote()
    function removeDownvoteFromPost(uint32 forumId, uint32 postId) {
        
        if (forumId >= forumCount) {
            // Throw if forum not created - not permitted
            throw;
        }
        
        Forum forum = forums[forumId];
        if (postId >= forum.postCount) {
            // Throw if post not created - not permitted
            throw;
        }
        
        Post post = forum.posts[postId];
        if (!post.downvotes[msg.sender]) {
            // Throw if post not downvoted by user - saves gas
            throw;
        }
        
        post.downvotes[msg.sender] = false;
        post.downvoteCount--;
        
        User user = users[post.owner];
        user.score++;
        forum.score++;
    }
    
    // Post.getOwner()
    function getOwnerOfPost(uint32 forumId, uint32 postId) constant returns (address) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.owner;
    }
    
    // Post.getTitle()
    function getTitleOfPost(uint32 forumId, uint32 postId) constant returns (string) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.title;
    }
    
    // Post.getBody()
    function getBodyOfPost(uint32 forumId, uint32 postId) constant returns (string) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.body;
    }
    
    // Post.isDeleted()
    function isDeletedPost(uint32 forumId, uint32 postId) constant returns (bool) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.deleted;
    }
    
    // Post.isUpvotedByUser()
    function isPostUpvotedByUser(uint32 forumId, uint32 postId) constant returns (bool) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.upvotes[msg.sender];
    }
    
    // Post.getUpvoteCount()
    function getUpvoteCountOfPost(uint32 forumId, uint32 postId) constant returns (uint32) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.upvoteCount;
    }
    
    // Post.isDownvotedByUser()
    function isPostDownvotedByUser(uint32 forumId, uint32 postId) constant returns (bool) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.downvotes[msg.sender];
    }
    
    // Post.getDownvoteCount()
    function getDownvoteCountOfPost(uint32 forumId, uint32 postId) constant returns (uint32) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.downvoteCount;
    }
    
    // TODO: Post.getCommentCount()
    
    // TODO: Post.getCommentScores(from, to)
}
