/*
MIT License

Copyright (c) 2017 Blottit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

pragma solidity ^0.4.8;

// Blottit
contract Blottit {
    
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
        
        // The user's count of active subscriptions
        uint32 activeSubscriptionCount;
        
        // The user's list of posts (references)
        UserPost[] posts;
        
        // The user's list of comments (references)
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
        
        require(forumId < forumCount);
        
        User user = users[msg.sender];
        require(!user.subscriptions[forumId]);
        
        user.subscriptions[forumId] = true;
        user.activeSubscriptionCount++;
    }
    
    // User.unsubscribe()
    function unsubscribeUser(uint32 forumId) {
        
        require(forumId < forumCount);
        
        User user = users[msg.sender];
        require(user.subscriptions[forumId]);
        
        user.subscriptions[forumId] = false;
        user.activeSubscriptionCount--;
    }
    
    // User.isSubscribed()
    function isSubscribedByUser(uint32 forumId) constant returns (bool) {
        
        User user = users[msg.sender];
        return user.subscriptions[forumId];
    }
    
    // User.getActiveSubscriptionCount()
    function getActiveSubscriptionCountForUser() constant returns (uint32) {
        
        User user = users[msg.sender];
        return user.activeSubscriptionCount;
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

    // User.getComment()
    function getCommentByUser(address userAddress, uint index) constant returns (uint32, uint32, uint32) {
        
        User user = users[userAddress];
        return (user.comments[index].forumId, user.comments[index].postId, user.comments[index].commentId);
    }
    
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

        // The forum's description
        string description;
        
        // The forum's list of posts
        mapping(uint32 => Post) posts;
        uint32 postCount;

        // The forum's score
        int32 score;
    }
    
    // Forum.create()
    function createForum(string name, string description) {
        
        bytes memory nameBytes = bytes(name);
        require(nameBytes.length > 0 && nameBytes.length <= 32);

        bytes memory descriptionBytes = bytes(name);
        require(descriptionBytes.length <= 256);
        
        Forum forum = forums[forumCount];
        forum.name = name;
        forum.description = description;
        forumCount++;
        
        // Subscribe user to forum
        subscribeUser(forumCount - 1);
    }
    
    // Forum.getName()
    function getNameOfForum(uint32 forumId) constant returns (string) {
        
        Forum forum = forums[forumId];
        return forum.name;
    }
    
    // Forum.getDescription()
    function getDescriptionOfForum(uint32 forumId) constant returns (string) {
        
        Forum forum = forums[forumId];
        return forum.description;
    }
    
    // Forum.getPostCount()
    function getPostCountOfForum(uint32 forumId) constant returns (uint32) {
        
        Forum forum = forums[forumId];
        return forum.postCount;
    }
    
    // Forum.getPostScores()
    function getPostScoresForForum(uint32 forumId, uint32 from, uint32 to) constant returns (uint32[], uint32[], uint[]) {
        
        Forum forum = forums[forumId];
        uint32[] memory upvotes = new uint32[](to - from);
        uint32[] memory downvotes = new uint32[](to - from);
        uint[] memory blockNumbers = new uint[](to - from);
        for (uint32 i = from; i < to; i++) {
            upvotes[i] = forum.posts[i].upvoteCount;
            downvotes[i] = forum.posts[i].downvoteCount;
            blockNumbers[i] = forum.posts[i].blockNumber;
        }
        
        return (upvotes, downvotes, blockNumbers);
    }
    
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
        
        // The post's block number
        uint blockNumber;
        
        // The post's edited flag
        bool edited;
        
        // The post's deleted flag
        bool deleted;
        
        // The post's list of upvotes
        mapping(address => bool) upvotes;
        uint32 upvoteCount;
        
        // The post's list of downvotes
        mapping(address => bool) downvotes;
        uint32 downvoteCount;
        
        // The post's list of comments
        mapping(uint32 => Comment) comments;
        uint32 commentCount;
    }
    
    // Post.create()
    function createPost(uint32 forumId, string postTitle, string postBody) {
        
        require(forumId < forumCount);
        
        bytes memory postTitleBytes = bytes(postTitle);
        require(postTitleBytes.length > 0 && postTitleBytes.length <= 256);
        
        bytes memory postBodyBytes = bytes(postBody);
        require(postBodyBytes.length <= 65536);
        
        Forum forum = forums[forumId];
        Post post = forum.posts[forum.postCount];
        post.owner = msg.sender;
        post.title = postTitle;
        post.body = postBody;
        post.blockNumber = block.number;
        forum.postCount++;
        
        // Upvote the post
        upvotePost(forumId, forum.postCount-1);
        
        // Add the post to the User's list
        User user = users[msg.sender];
        user.posts.push(UserPost(forumId, forum.postCount-1));
    }
    
    // Post.edit()
    function editPost(uint32 forumId, uint32 postId, string postBody) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(post.owner == msg.sender);
        require(!post.deleted);
        
        bytes memory postBodyBytes = bytes(postBody);
        require(postBodyBytes.length <= 65536);
        
        post.body = postBody;
        post.edited = true;
    }
    
    // Post.delete()
    function deletePost(uint32 forumId, uint32 postId) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(post.owner == msg.sender);       
        require(!post.deleted);

        post.title = "-";
        post.body = "-";
        post.deleted = true;
    }
    
    // Post.upvote()
    function upvotePost(uint32 forumId, uint32 postId) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(!post.upvotes[msg.sender]);
        
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
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(post.upvotes[msg.sender]);
        
        post.upvotes[msg.sender] = false;
        post.upvoteCount--;
        
        User user = users[post.owner];
        user.score--;
        forum.score--;
    }
    
    // Post.downvote()
    function downvotePost(uint32 forumId, uint32 postId) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(!post.downvotes[msg.sender]);
        
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
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(post.downvotes[msg.sender]);
        
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
    
    // Post.getBlockNumber()
    function getBlockNumberOfPost(uint32 forumId, uint32 postId) constant returns (uint) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.blockNumber;
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
    
    // Post.getCommentCount()
    function getCommentCountOfPost(uint32 forumId, uint32 postId) constant returns (uint32) {
        
        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        return post.commentCount;
    }
    
    // Post.getCommentScores()
    function getCommentScoresForPost(uint32 forumId, uint32 postId, uint32 from, uint32 to) constant returns (uint32[], uint32[]) {

        Forum forum = forums[forumId];
        Post post = forum.posts[postId];
        uint32[] memory upvotes = new uint32[](to - from);
        uint32[] memory downvotes = new uint32[](to - from);
        for (uint32 i = from; i < to; i++) {
            upvotes[i] = post.comments[i].upvoteCount;
            downvotes[i] = post.comments[i].downvoteCount;
        }
        
        return (upvotes, downvotes);
    }

    // Comment
    struct Comment {
        
        // The comment's owner
        address owner;
        
        // The comment's body
        string body;
        
        // The comment's edited flag
        bool edited;
        
        // The comment's deleted flag
        bool deleted;
        
        // The comment's list of upvotes
        mapping(address => bool) upvotes;
        uint32 upvoteCount;
        
        // The comment's list of downvotes
        mapping(address => bool) downvotes;
        uint32 downvoteCount;
    }
    
    // Comment.create()
    function createComment(uint32 forumId, uint32 postId, string commentBody) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        bytes memory commentBodyBytes = bytes(commentBody);
        require(commentBodyBytes.length > 0 && commentBodyBytes.length <= 65536);
        
        Post post = forum.posts[postId];
        Comment comment = post.comments[post.commentCount];
        comment.owner = msg.sender;
        comment.body = commentBody;
        post.commentCount++;
        
        // Upvote the comment
        upvoteComment(forumId, postId, post.commentCount-1);
        
        // Add the comment to the User's list
        User user = users[msg.sender];
        user.comments.push(UserComment(forumId, postId, post.commentCount-1));
    }
    
    // Comment.edit()
    function editComment(uint32 forumId, uint32 postId, uint32 commentId, string commentBody) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(commentId < post.commentCount);
        
        Comment comment = post.comments[commentId];
        require(comment.owner == msg.sender);
        require(!comment.deleted);
        
        bytes memory commentBodyBytes = bytes(commentBody);
        require(commentBodyBytes.length > 0 && commentBodyBytes.length <= 65536);
        
        comment.body = commentBody;
        comment.edited = true;
    }
    
    // Comment.delete()
    function deleteComment(uint32 forumId, uint32 postId, uint32 commentId) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(commentId < post.commentCount);
        
        Comment comment = post.comments[commentId];
        require(comment.owner == msg.sender);
        require(!comment.deleted);

        comment.body = "-";
        comment.deleted = true;
    }
    
    // Comment.upvote()
    function upvoteComment(uint32 forumId, uint32 postId, uint32 commentId) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(commentId < post.commentCount);
        
        Comment comment = post.comments[commentId];
        require(!comment.upvotes[msg.sender]);
        
        // If comment downvoted by user, remove downvote
        if (comment.downvotes[msg.sender]) {
            removeDownvoteFromComment(forumId, postId, commentId);
        }
        
        comment.upvotes[msg.sender] = true;
        comment.upvoteCount++;
        
        User user = users[comment.owner];
        user.score++;
    }
    
    // Comment.removeUpvote()
    function removeUpvoteFromComment(uint32 forumId, uint32 postId, uint32 commentId) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(commentId < post.commentCount);
        
        Comment comment = post.comments[commentId];
        require(comment.upvotes[msg.sender]);
        
        comment.upvotes[msg.sender] = false;
        comment.upvoteCount--;
        
        User user = users[comment.owner];
        user.score--;
    }
    
    // Comment.downvote()
    function downvoteComment(uint32 forumId, uint32 postId, uint32 commentId) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(commentId < post.commentCount);
        
        Comment comment = post.comments[commentId];
        require(!comment.downvotes[msg.sender]);
        
        // If comment upvoted by user, remove upvote
        if (comment.upvotes[msg.sender]) {
            removeUpvoteFromComment(forumId, postId, commentId);
        }
        
        comment.downvotes[msg.sender] = true;
        comment.downvoteCount++;
        
        User user = users[comment.owner];
        user.score--;
    }
    
    // Comment.removeDownvote()
    function removeDownvoteFromComment(uint32 forumId, uint32 postId, uint32 commentId) {
        
        require(forumId < forumCount);
        
        Forum forum = forums[forumId];
        require(postId < forum.postCount);
        
        Post post = forum.posts[postId];
        require(commentId < post.commentCount);
        
        Comment comment = post.comments[commentId];
        require(comment.downvotes[msg.sender]);
        
        comment.downvotes[msg.sender] = false;
        comment.downvoteCount--;
        
        User user = users[comment.owner];
        user.score++;
    }
    
    // Comment.getOwner()
    function getOwnerOfComment(uint32 forumId, uint32 postId, uint32 commentId) constant returns (address) {

        Forum forum = forums[forumId];        
        Post post = forum.posts[postId];
        Comment comment = post.comments[commentId];
        return comment.owner;
    }
        
    // Comment.getBody()
    function getBodyOfComment(uint32 forumId, uint32 postId, uint32 commentId) constant returns (string) {
        
        Forum forum = forums[forumId];        
        Post post = forum.posts[postId];
        Comment comment = post.comments[commentId];
        return comment.body;
    }
    
    // Comment.isDeleted()
    function isDeletedComment(uint32 forumId, uint32 postId, uint32 commentId) constant returns (bool) {
        
        Forum forum = forums[forumId];        
        Post post = forum.posts[postId];
        Comment comment = post.comments[commentId];
        return comment.deleted;
    }
    
    // Comment.isUpvotedByUser()
    function isCommentUpvotedByUser(uint32 forumId, uint32 postId, uint32 commentId) constant returns (bool) {
        
        Forum forum = forums[forumId];        
        Post post = forum.posts[postId];
        Comment comment = post.comments[commentId];
        return comment.upvotes[msg.sender];
    }
    
    // Comment.getUpvoteCount()
    function getUpvoteCountOfComment(uint32 forumId, uint32 postId, uint32 commentId) constant returns (uint32) {
        
        Forum forum = forums[forumId];        
        Post post = forum.posts[postId];
        Comment comment = post.comments[commentId];
        return comment.upvoteCount;
    }
    
    // Comment.isDownvotedByUser()
    function isCommentDownvotedByUser(uint32 forumId, uint32 postId, uint32 commentId) constant returns (bool) {
        
        Forum forum = forums[forumId];        
        Post post = forum.posts[postId];
        Comment comment = post.comments[commentId];
        return comment.downvotes[msg.sender];
    }
    
    // Comment.getDownvoteCount()
    function getDownvoteCountOfComment(uint32 forumId, uint32 postId, uint32 commentId) constant returns (uint32) {
        
        Forum forum = forums[forumId];        
        Post post = forum.posts[postId];
        Comment comment = post.comments[commentId];
        return comment.downvoteCount;
    }
}
