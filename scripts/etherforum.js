var contractAbi = [{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getKarmaForUser","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getTitleOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"removeUpvoteFromPost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getPostsLengthForUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getBodyOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getNameOfForum","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isPostDownvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"postBody","type":"string"}],"name":"editPost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getDownvoteCountOfPost","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"isSubscribedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getOwnerOfPost","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"}],"name":"subscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postTitle","type":"string"},{"name":"postBody","type":"string"}],"name":"createPost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getForumCount","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getUpvoteCountOfPost","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getPostCountOfForum","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"createForum","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"deletePost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getPostByUser","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"}],"name":"unsubscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isDeletedPost","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"removeDownvoteFromPost","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"upvotePost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isPostUpvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"downvotePost","outputs":[],"payable":false,"type":"function"}];
var contractAddress = '0xFE2C8F82D3a05acA1E2d5E332a3a1Af30cdBf1c8';
var contract;
var currentUser;
var showAllForums = false;

window.addEventListener('load', function() {
	if (typeof web3 !== 'undefined' && typeof web3.eth !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
		contract = web3.eth.contract(contractAbi).at(contractAddress);
		currentUser = web3.eth.accounts[0];
		web3.eth.defaultAccount = currentUser;
	}

	if (currentUser != undefined) {
		$('#header-user-text').text('');
		$('#header-user-text').append(displayUser(currentUser));
		contract.getKarmaForUser(currentUser, initialise_getKarmaForUser_callback);
	}
});

function initialise_getKarmaForUser_callback(error, karma) {
	if (!error) {
		$('#karma').text(karma);
		if (current_page === 'forums') {
			showForumsPage();
		} else if (current_page === 'forum') {
			showForumPage();
		} else if (current_page === 'posts') {
			showPostsPage();
		} else if (current_page === 'post') {
			showPostPage();
		} else if (current_page === 'createpost') {
			showCreatePostPage();
		} else if (current_page === 'editpost') {
			showEditPostPage();
		}
	} else {
		console.error(error);
	}
}

function showForumsPage() {
	if (currentUser != undefined) {
		contract.getForumCount(showForumsPage_getForumCount_callback);
	}
}

function showForumsPage_getForumCount_callback(error, forumCount) {
	if (!error) {
		var forumsFound = false;
		$('#forums_table').empty();
		if (!showAllForums) {
			document.title = '<Ether>Forum - ' + currentUser;
			for(var i=0; i<forumCount; i++) {
				//var isSubscribed = contract.isSubscribedByUser(i);
var isSubscribed = true;
				if (isSubscribed) {
//					$('#forums_table').append('<tr><td class="cell">' + displayForum(i) + '</td></tr>');
					forumsFound = true;
				}
			}
			$('#show_forums_button').text('Show all forums');
		} else {
			document.title = '<Ether>Forum';
			for(var i=0; i<forumCount; i++) {
//				$('#forums_table').append('<tr><td class="cell">' + displayForum(i) + '</td></tr>');
				forumsFound = true;
			}
			$('#show_forums_button').text('Show my subscribed forums');
		}
		if (!forumsFound) {
			$('#forums_table').append('<tr><td class="cell">No forums found</td></tr>');
		}
		$('#show_forums_button').prop('style', 'visibility:visible');
// TODO		$('#create_forum_input').prop('disabled', false);
		$('#create_forum_button').prop('style', 'visibility:visible');
	} else {
		console.error(error);
	}
}

function showForumPage() {
	var forumIdParameter = getUrlParameter('forum_id');
	if (forumIdParameter != undefined && forumIdParameter.length > 0 && currentUser != undefined) {
		var name = contract.getNameOfForum(forumIdParameter);
		if (name != undefined && name.length > 0) {
			document.title = '<Ether>Forum - ' + name;
			$('#forum_name').html(displayForum(forumIdParameter));
			var postsFound = false;
			var postCount = contract.getPostCountOfForum(forumIdParameter);
			for(var i=0; i<postCount; i++) {
				$('#posts_table').append('<tr><td class="cell">' + displayPost(forumIdParameter, i, false) + '</tr></td>');
				postsFound = true;
			}
			if (!postsFound) {
				$('#posts_table').append('<tr><td class="cell">No posts found</td></tr>');
			}
			$('#create_post_button').prop('disabled', false);
			var isSubscribed = contract.isSubscribedByUser(forumIdParameter);
			if (!isSubscribed) {
				$('#subscribe_button').prop('disabled', false);
			} else {
				$('#unsubscribe_button').prop('disabled', false);
			}
		}
	}
}

function showPostsPage() {
	var userParameter = getUrlParameter('user');
	if (userParameter != undefined && userParameter.length > 0 && currentUser != undefined) {
		document.title = '<Ether>Forum - ' + userParameter;
		var karma = contract.getKarmaForUser(userParameter);
		$('#posts_by_user').html('Posts by User: <a class="link" href="https://etherscan.io/address/' + userParameter + '">' + userParameter + '</a> (' + karma + ')');
		var postsFound = false;
		var postCount = contract.getPostsLengthForUser(userParameter);
		for(var i=0; i<postCount; i++) {
			var userPost = contract.getPostByUser(userParameter, i);
			$('#posts_table').append('<tr><td class="cell">' + displayPost(userPost[0], userPost[1], true) + '</td></tr>');
			postsFound = true;
		}
		if (!postsFound) {
			$('#posts_table').append('<tr><td class="cell">No posts found</td></tr>');
		}
	}
}

function showPostPage() {
	var forumIdParameter = getUrlParameter('forum_id');
	var postIdParameter = getUrlParameter('post_id');
	if (forumIdParameter != undefined && forumIdParameter.length > 0 && postIdParameter != undefined && postIdParameter.length > 0 && currentUser != undefined) {
		var postTitle = contract.getTitleOfPost(forumIdParameter, postIdParameter);
		if (postTitle != undefined && postTitle.length > 0) {
			$('#forum_name').html(displayForum(forumIdParameter));
			$('#post_score').html(displayPostUpvote(forumIdParameter, postIdParameter) + displayPostDownvote(forumIdParameter, postIdParameter) + ' ' + displayPostScore(forumIdParameter, postIdParameter));
			var isDeletedPost = contract.isDeletedPost(forumIdParameter, postIdParameter);
			if (!isDeletedPost) {
				document.title = '<Ether>Forum - ' + postTitle;
				var postOwner = contract.getOwnerOfPost(forumIdParameter, postIdParameter);
				$('#post_title').html(postTitle + ' (' + displayUser(postOwner) + ')');
				var postBody = contract.getBodyOfPost(forumIdParameter, postIdParameter);
				$('#post_body').html(new showdown.Converter().makeHtml(postBody));
				if (postOwner === currentUser) {
					$('#edit_post_button').prop('disabled', false);
					$('#delete_post_button').prop('disabled', false);
				}
			} else {
				$('#post_title').html('[DELETED]');
				$('#post_body').html('[DELETED BY OWNER]');
			}
		}
	}
}

function showCreatePostPage() {
	var forumIdParameter = getUrlParameter('forum_id');
	if (forumIdParameter != undefined && forumIdParameter.length > 0 && currentUser != undefined) {
		var name = contract.getNameOfForum(forumIdParameter);
		if (name != undefined && name.length > 0) {
			document.title = '<Ether>Forum - ' + name;
			$('#forum_name').html(displayForum(forumIdParameter));
			$('#post_title_input').prop('disabled', false);
			$('#post_body_input').prop('disabled', false);
			$('#submit_post_button').prop('disabled', false);
			$('#cancel_button').prop('disabled', false);
		}
	}
}

function showEditPostPage() {
	var forumIdParameter = getUrlParameter('forum_id');
	var postIdParameter = getUrlParameter('post_id');
	if (forumIdParameter != undefined && forumIdParameter.length > 0 && postIdParameter != undefined && postIdParameter.length > 0 && currentUser != undefined) {
		var postTitle = contract.getTitleOfPost(forumIdParameter, postIdParameter);
		if (postTitle != undefined && postTitle.length > 0) {
			$('#forum_name').html(displayForum(forumIdParameter));
			$('#post_score').html(displayPostUpvote(forumIdParameter, postIdParameter) + displayPostDownvote(forumIdParameter, postIdParameter) + ' ' + displayPostScore(forumIdParameter, postIdParameter));
			var isDeletedPost = contract.isDeletedPost(forumIdParameter, postIdParameter);
			if (!isDeletedPost) {
				document.title = '<Ether>Forum - ' + postTitle;
				$('#post_title').html(postTitle);
				var postBody = contract.getBodyOfPost(forumIdParameter, postIdParameter);
				$('#post_body_input').val(postBody);
				var postOwner = contract.getOwnerOfPost(forumIdParameter, postIdParameter);
				if (postOwner === currentUser) {
					$('#post_body_input').prop('disabled', false);
					$('#submit_post_button').prop('disabled', false);
					$('#cancel_button').prop('disabled', false);
				}
			} else {
				$('#post_title').html('[DELETED]');
				$('#post_body_input').val('[DELETED BY OWNER]');
			}
		}
	}
}

function showForums() {
	showAllForums = !showAllForums;
	showForumsPage();
}

function createForum() {
	var name = $('#create_forum_input').val();
	if  (name.length > 0 && name.length <= 32) {
		contract.createForum(name, createForum_callback);
	}
}

function createForum_callback(error, result) {
	if (!error) {
		$('#create_forum_input').val('');
	} else {
		console.error(error);
	}
}

function subscribe(forumId) {
	contract.subscribeUser(forumId, void_callback);
}

function unsubscribe(forumId) {
	contract.unsubscribeUser(forumId, void_callback);
}

function createPost(forumId) {
	var postTitle = $('#post_title_input').val();
	var postBody = $('#post_body_input').val();
	if  (postTitle.length > 0 && postTitle.length < 256 && postBody.length < 65536) {
		contract.createPost(forumId, postTitle, postBody, createPost_callback);
	}
}

function createPost_callback(error, result) {
	if (!error) {
		$('#post_title_input').val('');
		$('#post_body_input').val('');
	} else {
		console.error(error);
	}
}

function editPost(forumId, postId) {
	var postBody = $('#post_body_input').val();
	if  (postBody.length < 65536) {
		contract.editPost(forumId, postId, postBody, void_callback);
	}
}

function deletePost(forumId, postId) {
	contract.deletePost(forumId, postId, void_callback);
}

function displayUser(user) {
	var blockie = blockies.create({seed:user, size:8, scale:3});
	blockie.setAttribute('class', 'user');
	var link = $('<a href="/posts.html?user=' + user + '" title="' + user + '"/>');
	link.append(blockie);
	return link;
}

function displayForum(forumId) {
	var forumName = contract.getNameOfForum(forumId);
	return '<a class="link" href="/forum.html?forum_id=' + forumId + '">' + forumName + '</a>';
}

function displayPostUpvote(forumId, postId) {
	var isUpvoted = contract.isPostUpvotedByUser(forumId, postId);
	if (!isUpvoted) {
		return '<button class="upvoteButton" onclick="contract.upvotePost(' + forumId + ', ' + postId + ', void_callback)">Upvote</button>';
	} else {
		return '<button class="upvotedButton" onclick="contract.removeUpvoteFromPost(' + forumId + ', ' + postId + ', void_callback)">Upvoted</button>';
	}
}

function displayPostDownvote(forumId, postId) {
	var isDownvoted = contract.isPostDownvotedByUser(forumId, postId);
	if (!isDownvoted) {
		return downvote = '<button class="downvoteButton" onclick="contract.downvotePost(' + forumId + ', ' + postId + ', void_callback)">Downvote</button>';
	} else {
		return downvote = '<button class="downvotedButton" onclick="contract.removeDownvoteFromPost(' + forumId + ', ' + postId + ', void_callback)">Downvoted</button>';
	}
}

function displayPostScore(forumId, postId) {
	var upvoteCount = contract.getUpvoteCountOfPost(forumId, postId);
	var downvoteCount = contract.getDownvoteCountOfPost(forumId, postId);
	return '[' + (upvoteCount - downvoteCount) + ']';
}

function displayPost(forumId, postId, isUserView) {
	var upvote = displayPostUpvote(forumId, postId);
	var downvote = displayPostDownvote(forumId, postId);
	var score = displayPostScore(forumId, postId);
	var isDeletedPost = contract.isDeletedPost(forumId, postId);
	if (!isDeletedPost) {
		var postTitle = contract.getTitleOfPost(forumId, postId);
	} else {
		var postTitle = '[DELETED]';
	}
	var post = '<a class="link" href="/post.html?forum_id=' + forumId + '&post_id=' + postId + '">' + postTitle + '</a>';
	var postOwner = contract.getOwnerOfPost(forumId, postId);
	if (!isUserView) {
		var origin = '(' + displayUser(postOwner) + ')';
	} else {
		var origin = '(' + displayForum(forumId) + ')';
	}
	var edit = '';
	var delete_ = '';
	if (!isDeletedPost && postOwner === currentUser) {
		edit = '<a class="link" href="/editpost.html?forum_id=' + forumId + '&post_id=' + postId + '">Edit</a>';
		delete_ = '<a class="link" href="#" onClick="contract.deletePost(' + forumId + ', ' + postId + ', void_callback);return false;">Delete</a>';
	}
	return upvote + downvote + ' ' + score + ' ' + post + ' ' + origin + ' ' + edit + ' ' + delete_;
}

function void_callback(error, result) {
	if (error) {
		console.error(error);
	}
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};