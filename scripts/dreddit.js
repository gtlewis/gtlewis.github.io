var contractAbi = [{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getKarmaForUser","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getSubdredditCount","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"getNameOfSubdreddit","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"subscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"createSubdreddit","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"getPostCountOfSubdreddit","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getPostFromSubdreddit","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"subdredditId","type":"uint32"}],"name":"isSubscribedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"post","type":"string"}],"name":"addPostToSubdreddit","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"unsubscribeUser","outputs":[],"payable":false,"type":"function"}];
var contractAddress = '0x0B7e1784215d489f45262052294885AAc89D98D2';
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
			var postsFound = false;
			var postCount = contract.getPostCountofSubdreddit();
			for(var i=0; i<postCount; i++) {
				$('#posts_table').append('<tr><td class="cell">contract.getPostFromSubdreddit(i)</td></tr>');
				postsFound = true;
			}
			if (!postsFound) {
				$('#posts_table').append('<tr><td class="cell">No posts found</td></tr>');
			}
			$('#add_posts_text').prop('disabled', false);
			$('#add_posts_button').prop('disabled', false);
			$('#subscribe_button').prop('disabled', false);
		}
	}
}

function showPostsPage() {
	var userParameter = getUrlParameter('user');
	if (userParameter != undefined && userParameter.length > 0 && userAddress != undefined) {
		document.title = 'Dreddit - ' + userParameter;
		$('#posts_by_user').text('Posts by User:' + userParameter + ' (' + contract.getKarmaForUser(userParameter) + ')');
		// TODO: follow same pattern as above...
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