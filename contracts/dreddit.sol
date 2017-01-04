pragma solidity ^0.4.6;

// Dreddit
contract Dreddit {
    
    // The list of subdreddits
    mapping(uint => Subdreddit) public subdreddits;
    uint public subdredditCount;
    
    // The list of users
    mapping(address => User) public users;

    // User
    struct User {
        
        // The user's list of subscriptions
        mapping(uint => bool) subscriptions;
        
        // The user's list of posts (reference)
        UserPost[] posts;
        
        // The user's list of comments (reference)
        UserComment[] comments;
        
        // The user's karma
        uint karma;
    }
    
    // User.Post
    struct UserPost {
        uint subdredditId;
        uint postId;
    }
    
    // User.Comment
    struct UserComment {
        uint subdredditId;
        uint postId;
        uint commentId;
    }
    
    // User.subscribe()
    function subscribeUser(uint subdredditId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        User user = users[msg.sender];
        bool subscription = user.subscriptions[subdredditId];
        
        if (subscription) {
            // Throw if already subscribed - saves gas
            throw;
        }
        
        user.subscriptions[subdredditId] = true;
    }
    
    // User.unsubscribe()
    function unsubscribeUser(uint subdredditId) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        User user = users[msg.sender];
        bool subscription = user.subscriptions[subdredditId];
        
        if (!subscription) {
            // Throw if not  subscribed - saves gas
            throw;
        }
        
        user.subscriptions[subdredditId] = false;
    }
    
    // Subdreddit
    struct Subdreddit {
        
        // The subdreddit's name
        string name;
        
        // The subdreddit's list of posts
        // TODO: just string for now...
        mapping(uint => string) posts;
        uint postCount;
    }
    
    // Subdreddit.create()
    function createSubdreddit(string name) {
        
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
    
    // Subdreddit.addPost()
    function addPostToSubdreddit(uint subdredditId, string post) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        subdreddit.posts[subdreddit.postCount] = post;
        subdreddit.postCount++;
    }
}
