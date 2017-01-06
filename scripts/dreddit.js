var contractAbi = [{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getKarmaForUser","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getSubdredditCount","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getTitleOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getPostsLengthForUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getBodyOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"getNameOfSubdreddit","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getOwnerOfPost","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"subscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postTitle","type":"string"},{"name":"postBody","type":"string"}],"name":"createPost","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"createSubdreddit","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"getPostCountOfSubdreddit","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"subdredditId","type":"uint32"}],"name":"isSubscribedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getPostByUser","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"unsubscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isDeletedPost","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}];
var contractAddress = '0x2822BE63E5fC83AB4000f56897d7DD8bDED44C6F';
var contract;
var userAddress;
var showAllSubdreddits = false;

$(function(){
	// TODO: this all needs to be in web3 callback?? plus strange metamask error...
	if (typeof web3 != 'undefined' && typeof web3.eth != 'undefined') {
		contract = web3.eth.contract(contractAbi).at(contractAddress);
		userAddress = web3.eth.accounts[0];
		web3.eth.defaultAccount = userAddress;
	}
	if (userAddress != undefined) {
		$('#user').html('<a class="link" id="user" href="/posts.html?user=' + userAddress + '">' + userAddress + '</a>');
		$('#karma').text(contract.getKarmaForUser(userAddress));
	}
	if (current_page == 'front') {
		showFrontPage();
	} else if (current_page == 'subdreddits') {
		showSubdredditsPage();
	} else if (current_page == 'subdreddit') {
		showSubdredditPage();
	} else if (current_page == 'posts') {
		showPostsPage();
	}
});

function showFrontPage() {
	if (userAddress != undefined) {
		document.title = 'Dreddit - ' + userAddress;
	}
}

function showSubdredditsPage() {
	if (userAddress != undefined) {
		var subdredditCount = contract.getSubdredditCount();
		var subdredditsFound = false;
		$('#subdreddits_table').empty();
		if (!showAllSubdreddits) {
			document.title = 'Dreddit - ' + userAddress;
			for(var i=0; i<subdredditCount; i++) {
				if (contract.isSubscribedByUser(userAddress, i)) {
					$('#subdreddits_table').append('<tr><td class="cell"><a class="link" href="/subdreddit.html?subdreddit_id=' + i + '">' + contract.getNameOfSubdreddit(i) + '</a></td></tr>');
					subdredditsFound = true;
				}
			}
			$('#show_subdreddits_button').html('Show all subdreddits');
		} else {
			document.title = 'Dreddit';
			for(var i=0; i<subdredditCount; i++) {
				$('#subdreddits_table').append('<tr><td class="cell"><a class="link" href="/subdreddit.html?subdreddit_id=' + i + '">' + contract.getNameOfSubdreddit(i) + '</a></td></tr>');
				subdredditsFound = true;
			}
			$('#show_subdreddits_button').html('Show my subscribed subdreddits');
		}
		if (!subdredditsFound) {
			$('#subdreddits_table').append('<tr><td class="cell">No subdreddits found</td></tr>');
		}
		$('#show_subdreddits_button').prop('disabled', false);
		$('#create_subdreddit_text').prop('disabled', false);
		$('#create_subdreddit_button').prop('disabled', false);
	}
}

function showSubdredditPage() {
	var subdredditIdParameter = getUrlParameter('subdreddit_id');
	if (subdredditIdParameter != undefined && subdredditIdParameter.length > 0 && userAddress != undefined) {
		var name = contract.getNameOfSubdreddit(subdredditIdParameter);
		if (name != undefined && name.length > 0) {
			document.title = 'Dreddit - ' + name;
			$('#subdreddit_name').text(name);
			if (contract.isSubscribedByUser(userAddress, subdredditIdParameter)) {
				$('#subscribe_button').html('Unsubscribe');
			} else {
				$('#subscribe_button').html('Subscribe');
			}
			var postsFound = false;
			var postCount = contract.getPostCountOfSubdreddit(subdredditIdParameter);
			for(var i=0; i<postCount; i++) {
				var postOwner = contract.getOwnerOfPost(subdredditIdParameter, i);
				$('#posts_table').append('<tr><td class="cell">' + contract.getTitleOfPost(subdredditIdParameter, i) + ' (<a class="link" href="/posts.html?user=' + postOwner + '">' + postOwner + '</a>)</td></tr>');
				postsFound = true;
			}
			if (!postsFound) {
				$('#posts_table').append('<tr><td class="cell">No posts found</td></tr>');
			}
			$('#create_post_text').prop('disabled', false);
			$('#create_post_button').prop('disabled', false);
			$('#subscribe_button').prop('disabled', false);
		}
	}
}

function showPostsPage() {
	var userParameter = getUrlParameter('user');
	if (userParameter != undefined && userParameter.length > 0 && userAddress != undefined) {
		document.title = 'Dreddit - ' + userParameter;
		$('#posts_by_user').html('Posts by User: <a class="link" href="https://etherscan.io/address/' + userParameter + '">' + userParameter + '</a> (' + contract.getKarmaForUser(userParameter) + ')');
		var postsFound = false;
		var postCount = contract.getPostsLengthForUser(userParameter);
		for(var i=0; i<postCount; i++) {
			var userPost = contract.getPostByUser(userParameter, i);
			$('#posts_table').append('<tr><td class="cell">' + contract.getTitleOfPost(userPost[0], userPost[1]) + ' (<a class="link" href="/subdreddit.html?subdreddit_id=' + userPost[0] + '">' + contract.getNameOfSubdreddit(userPost[0]) + '</a>)</td></tr>');
			postsFound = true;
		}
		if (!postsFound) {
			$('#posts_table').append('<tr><td class="cell">No posts found</td></tr>');
		}
	}
}

function showSubdreddits() {
	showAllSubdreddits = !showAllSubdreddits;
	showSubdredditsPage();
}

function createSubdreddit() {
	var name = $('#create_subdreddit_text').val();
	if  (name.length > 0 && name.length <= 32) {
		contract.createSubdreddit(name);
		$('#create_subdreddit_text').val('');
	}
}

function createPost(subdredditIdParameter) {
	var postTitle = $('#create_post_text').val();
	if  (postTitle.length > 0 && postTitle.length < 256) {
		contract.createPost(subdredditIdParameter, postTitle, "TODO: body");
		$('#create_post_text').val('');
	}
}

function subscribe(subdredditIdParameter) {
	if (contract.isSubscribedByUser(userAddress, subdredditIdParameter)) {
		contract.unsubscribeUser(subdredditIdParameter);
		$('#subscribe_button').html('Subscribe');
	} else {
		contract.subscribeUser(subdredditIdParameter);
		$('#subscribe_button').html('Unsubscribe');
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