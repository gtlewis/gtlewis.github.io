$(function(){
	// TODO: this all needs to be in web3 callback??
	var contractAbi = [{"constant":false,"inputs":[{"name":"userAddress","type":"address"}],"name":"getKarmaForUser","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint32"}],"name":"subdreddits","outputs":[{"name":"name","type":"string"},{"name":"postCount","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"subscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"createSubdreddit","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"subdredditCount","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"karma","type":"int32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"},{"name":"post","type":"string"}],"name":"addPostToSubdreddit","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"subdredditId","type":"uint32"}],"name":"unsubscribeUser","outputs":[],"payable":false,"type":"function"}];
	var contractAddress = '0x714b1756ae2F4507935add33C097c9AB4516c266';
	var contract;
	var userAddress;
	if (typeof web3 != 'undefined' && typeof web3.eth != 'undefined') {
		contract = web3.eth.contract(contractAbi).at(contractAddress);
		userAddress = web3.eth.accounts[0];
	}
	if (userAddress != undefined) {
		$('#user').html('<a class="link" id="user" href="/posts.html?user=' + userAddress + '">' + userAddress + '</a>');
		$('#karma').text(contract.getKarmaForUser(userAddress));
	}
	if (current_page == 'front') {
		if (userAddress != undefined) {
			document.title = 'Dreddit - ' + userAddress;
		}
	} else if (current_page == 'subdreddits') {
		var showAllSubreddits = false;
		if (!showAllSubreddits && userAddress != undefined) {
			document.title = 'Dreddit - ' + userAddress;
			// TODO: show user's subscribed subreddits
		} else {
			// TODO: show all subreddits
		}
	} else if (current_page == 'posts') {
		var userParameter = getUrlParameter('user');
		if (userParameter != undefined && userAddress != undefined) {
			document.title = 'Dreddit - ' + userParameter;
			$('#posts_by_user').text('Posts by User:' + userParameter + ' (' + contract.getKarmaForUser(userParameter) + ')');
		}
	}
});

var getUrlParameter = function getUrlParameter(sParam) {
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