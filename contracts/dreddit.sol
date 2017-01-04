pragma solidity ^0.4.6;

// Dreddit
contract Dreddit {
    
    // The list of subdreddits
    mapping(uint32 => Subdreddit) subdreddits;
    uint32 subdredditCount;
    
    // The list of users
    mapping(address => User) users;

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
        bool subscription = user.subscriptions[subdredditId];
        
        if (subscription) {
            // Throw if already subscribed - saves gas
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
        bool subscription = user.subscriptions[subdredditId];
        
        if (!subscription) {
            // Throw if not  subscribed - saves gas
            throw;
        }
        
        user.subscriptions[subdredditId] = false;
    }
    
    // User.getKarma()
    function getKarmaForUser(address userAddress) returns (int32 karma) {
        
        User user = users[userAddress];
        karma = user.karma;
    }
    
    // Subdreddit
    struct Subdreddit {
        
        // The subdreddit's name
        string name;
        
        // The subdreddit's list of posts
        // TODO: just string for now...
        mapping(uint32 => string) posts;
        uint32 postCount;
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
    function addPostToSubdreddit(uint32 subdredditId, string post) {
        
        if (subdredditId >= subdredditCount) {
            // Throw if subdreddit not created - not permitted
            throw;
        }
        
        Subdreddit subdreddit = subdreddits[subdredditId];
        subdreddit.posts[subdreddit.postCount] = post;
        subdreddit.postCount++;
    }
}
