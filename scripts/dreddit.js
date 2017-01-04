$(function(){
	// TODO: this all needs to be in web3 callback??
	var userAddress;
	if (typeof web3 != 'undefined' && typeof web3.eth != 'undefined') {
		userAddress = web3.eth.accounts[0];
	}
	if (userAddress != undefined) {
		$('#user').html('<a class="link" id="user" href="/posts.html?user=' + userAddress + '">' + userAddress + '</a>');
		//TODO: set karma
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
		if (userParameter != undefined) {
			document.title = 'Dreddit - ' + userParameter;
			$('#posts_by_user').text('Posts by User:' + userParameter + '(TODO:karma)');
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