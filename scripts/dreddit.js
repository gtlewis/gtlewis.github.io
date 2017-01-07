var contractAbi = [{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getKarmaForUser","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getSubdredditCount","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getTitleOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getPostsLengthForUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getBodyOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"postBody","type":"string"}],"name":"editPost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"getNameOfSubdreddit","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getOwnerOfPost","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"subscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postTitle","type":"string"},{"name":"postBody","type":"string"}],"name":"createPost","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"createSubdreddit","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"getPostCountOfSubdreddit","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"subdredditId","type":"uint32"}],"name":"isSubscribedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"deletePost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getPostByUser","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"unsubscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isDeletedPost","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}];
var contractAddress = '0xaCa80cd0239f4021Afbb0A508e8eFC4CDa4b7a21';
var contract;
var currentUser;
var showAllSubdreddits = false;

$(function(){
	// TODO: this all needs to be in web3 callback?? plus strange metamask error...
	if (typeof web3 != 'undefined' && typeof web3.eth != 'undefined') {
		contract = web3.eth.contract(contractAbi).at(contractAddress);
		currentUser = web3.eth.accounts[0];
		web3.eth.defaultAccount = currentUser;
	}
	if (currentUser != undefined) {
		$('#user').html(displayUser(currentUser));
		$('#karma').text(contract.getKarmaForUser(currentUser));
	}
	if (current_page === 'front') {
		showFrontPage();
	} else if (current_page === 'subdreddits') {
		showSubdredditsPage();
	} else if (current_page === 'subdreddit') {
		showSubdredditPage();
	} else if (current_page === 'posts') {
		showPostsPage();
	} else if (current_page === 'post') {
		showPostPage();
	} else if (current_page === 'editpost') {
		showEditPostPage();
	}
});

function showFrontPage() {
	if (currentUser != undefined) {
		document.title = 'Dreddit - ' + currentUser;
	}
}

function showSubdredditsPage() {
	if (currentUser != undefined) {
		var subdredditCount = contract.getSubdredditCount();
		var subdredditsFound = false;
		$('#subdreddits_table').empty();
		if (!showAllSubdreddits) {
			document.title = 'Dreddit - ' + currentUser;
			for(var i=0; i<subdredditCount; i++) {
				if (contract.isSubscribedByUser(currentUser, i)) {
					$('#subdreddits_table').append('<tr><td class="cell">' + displaySubdreddit(i) + '</td></tr>');
					subdredditsFound = true;
				}
			}
			$('#show_subdreddits_button').html('Show all subdreddits');
		} else {
			document.title = 'Dreddit';
			for(var i=0; i<subdredditCount; i++) {
				$('#subdreddits_table').append('<tr><td class="cell">' + displaySubdreddit(i) + '</td></tr>');
				subdredditsFound = true;
			}
			$('#show_subdreddits_button').html('Show my subscribed subdreddits');
		}
		if (!subdredditsFound) {
			$('#subdreddits_table').append('<tr><td class="cell">No subdreddits found</td></tr>');
		}
		$('#show_subdreddits_button').prop('disabled', false);
		$('#create_subdreddit_input').prop('disabled', false);
		$('#create_subdreddit_button').prop('disabled', false);
	}
}

function showSubdredditPage() {
	var subdredditIdParameter = getUrlParameter('subdreddit_id');
	if (subdredditIdParameter != undefined && subdredditIdParameter.length > 0 && currentUser != undefined) {
		var name = contract.getNameOfSubdreddit(subdredditIdParameter);
		if (name != undefined && name.length > 0) {
			document.title = 'Dreddit - ' + name;
			$('#subdreddit_name').html(displaySubdreddit(subdredditIdParameter));
			if (contract.isSubscribedByUser(currentUser, subdredditIdParameter)) {
				$('#subscribe_button').html('Unsubscribe');
			} else {
				$('#subscribe_button').html('Subscribe');
			}
			var postsFound = false;
			var postCount = contract.getPostCountOfSubdreddit(subdredditIdParameter);
			for(var i=0; i<postCount; i++) {
				$('#posts_table').append(displayPost(subdredditIdParameter, i, false));
				postsFound = true;
			}
			if (!postsFound) {
				$('#posts_table').append('<tr><td class="cell">No posts found</td></tr>');
			}
			$('#create_post_input').prop('disabled', false);
			$('#create_post_button').prop('disabled', false);
			$('#subscribe_button').prop('disabled', false);
		}
	}
}

function showPostsPage() {
	var userParameter = getUrlParameter('user');
	if (userParameter != undefined && userParameter.length > 0 && currentUser != undefined) {
		document.title = 'Dreddit - ' + userParameter;
		$('#posts_by_user').html('Posts by User: <a class="link" href="https://etherscan.io/address/' + userParameter + '">' + userParameter + '</a> (' + contract.getKarmaForUser(userParameter) + ')');
		var postsFound = false;
		var postCount = contract.getPostsLengthForUser(userParameter);
		for(var i=0; i<postCount; i++) {
			var userPost = contract.getPostByUser(userParameter, i);
			$('#posts_table').append(displayPost(userPost[0], userPost[1], true));
			postsFound = true;
		}
		if (!postsFound) {
			$('#posts_table').append('<tr><td class="cell">No posts found</td></tr>');
		}
	}
}

function showPostPage() {
	var subdredditIdParameter = getUrlParameter('subdreddit_id');
	var postIdParameter = getUrlParameter('post_id');
	if (subdredditIdParameter != undefined && subdredditIdParameter.length > 0 && postIdParameter != undefined && postIdParameter.length > 0 && currentUser != undefined) {
		var postTitle = contract.getTitleOfPost(subdredditIdParameter, postIdParameter);
		if (postTitle != undefined && postTitle.length > 0) {
			$('#subdreddit_name').html(displaySubdreddit(subdredditIdParameter));
			if (!contract.isDeletedPost(subdredditIdParameter, postIdParameter)) {
				document.title = 'Dreddit - ' + postTitle;
				var postOwner = contract.getOwnerOfPost(subdredditIdParameter, postIdParameter);
				$('#post_title').html(postTitle + ' (' + displayUser(postOwner) + ')');
				$('#post_body').html(contract.getBodyOfPost(subdredditIdParameter, postIdParameter));
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

function showEditPostPage() {
	var subdredditIdParameter = getUrlParameter('subdreddit_id');
	var postIdParameter = getUrlParameter('post_id');
	if (subdredditIdParameter != undefined && subdredditIdParameter.length > 0 && postIdParameter != undefined && postIdParameter.length > 0 && currentUser != undefined) {
		var postTitle = contract.getTitleOfPost(subdredditIdParameter, postIdParameter);
		if (postTitle != undefined && postTitle.length > 0) {
			$('#subdreddit_name').html(displaySubdreddit(subdredditIdParameter));
			if (!contract.isDeletedPost(subdredditIdParameter, postIdParameter)) {
				document.title = 'Dreddit - ' + postTitle;
				$('#post_title').html(postTitle);
				$('#post_body_input').val(contract.getBodyOfPost(subdredditIdParameter, postIdParameter));
				if (contract.getOwnerOfPost(subdredditIdParameter, postIdParameter) === currentUser) {
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

function showSubdreddits() {
	showAllSubdreddits = !showAllSubdreddits;
	showSubdredditsPage();
}

function createSubdreddit() {
	var name = $('#create_subdreddit_input').val();
	if  (name.length > 0 && name.length <= 32) {
		contract.createSubdreddit(name);
		$('#create_subdreddit_input').val('');
	}
}

function subscribe(subdredditId) {
	if (contract.isSubscribedByUser(currentUser, subdredditId)) {
		contract.unsubscribeUser(subdredditId);
		$('#subscribe_button').html('Subscribe');
	} else {
		contract.subscribeUser(subdredditId);
		$('#subscribe_button').html('Unsubscribe');
	}
}

function createPost(subdredditId) {
	var postTitle = $('#create_post_input').val();
	if  (postTitle.length > 0 && postTitle.length < 256) {
		contract.createPost(subdredditId, postTitle, "TODO: body");
	}
}

function editPost(subdredditId, postId) {
	var postBody = $('#post_body_input').val();
	if  (postBody.length > 0 && postBody.length < 65536) {
		contract.editPost(subdredditId, postId, postBody);
		$('#create_post_input').val('');
	}
}

function deletePost(subdredditId, postId) {
	contract.deletePost(subdredditId, postId);
	$('#edit_post_button').prop('disabled', true);
	$('#delete_post_button').prop('disabled', true);
}

function displayUser(user) {
	return '<a class="link" href="/posts.html?user=' + user + '">' + user + '</a>';
}

function displaySubdreddit(subdredditId) {
	return '<a class="link" href="/subdreddit.html?subdreddit_id=' + subdredditId + '">' + contract.getNameOfSubdreddit(subdredditId) + '</a>';
}

function displayPost(subdredditId, postId, isUserView) {
	var isDeletedPost = contract.isDeletedPost(subdredditId, postId);
	if (!isDeletedPost) {
		var postTitle = contract.getTitleOfPost(subdredditId, postId);
	} else {
		var postTitle = '[DELETED]';
	}
	var postOwner = contract.getOwnerOfPost(subdredditId, postId);
	if (!isUserView) {
		var origin = '(' + displayUser(postOwner) + ') ';
	} else {
		var origin = '(' + displaySubdreddit(subdredditId) + ') ';
	}
	var edit = '';
	if (!isDeletedPost && postOwner === currentUser) {
		edit = '<a class="link" href="/editpost.html?subdreddit_id=' + subdredditId + '&post_id=' + postId + '">Edit</a> ';
	}
	return '<tr><td class="cell"><a class="link" href="/post.html?subdreddit_id=' + subdredditId + '&post_id=' + postId + '">' + postTitle + '</a> ' + origin + edit + '</td></tr>';
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