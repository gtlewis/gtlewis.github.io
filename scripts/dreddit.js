var contractAbi = [{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getKarmaForUser","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"subscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"createSubdreddit","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"post","type":"string"}],"name":"addPostToSubdreddit","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"unsubscribeUser","outputs":[],"payable":false,"type":"function"}];
var contractAddress = '0x42aB2430F3FB4b693a099463d85AAe2f36a22B49';
var contract;
var userAddress;

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
		showSubdredditsPage(false);
	} else if (current_page == 'posts') {
		showPostsPage();
	}
});

function showFrontPage() {
	if (userAddress != undefined) {
		document.title = 'Dreddit - ' + userAddress;
	}
}

function showSubdredditsPage(showAllSubreddits) {
	if (!showAllSubreddits && userAddress != undefined) {
		document.title = 'Dreddit - ' + userAddress;
		// TODO: show user's subscribed subreddits
	} else {
		// TODO: show all subreddits
	}
	if (userAddress != undefined) {
		$('#create_subdreddit_text').disable(false);
		$('#create_subdreddit_button').disable(false);
	}
}

function showPostsPage() {
	var userParameter = getUrlParameter('user');
	if (userParameter != undefined && userAddress != undefined) {
		document.title = 'Dreddit - ' + userParameter;
		$('#posts_by_user').text('Posts by User:' + userParameter + ' (' + contract.getKarmaForUser(userParameter) + ')');
	}
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