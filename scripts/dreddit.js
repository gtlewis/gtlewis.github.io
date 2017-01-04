$(function(){
	var userAddress;
	if (typeof web3 != 'undefined' && typeof web3.eth != 'undefined') {
		userAddress = web3.eth.accounts[0];
	}
	if (userAddress != undefined) {
		$("#user").text(userAddress);
		//TODO: set karma
	}
	if (current_page == "front") {
		if (userAddress != undefined) {
			document.title = 'Dreddit - ' + userAddress;
		}
	} else if (current_page == "subdreddits") {
		var showAllSubreddits = false;
		if (!showAllSubreddits && userAddress != undefined) {
			document.title = 'Dreddit - ' + userAddress;
			// TODO: show user's subscribed subreddits
		} else {
			// TODO: show all subreddits
		}
	} else if (current_page == "posts") {
		// TODO: use the user we are showing (from URL), not current user
		if (userAddress != undefined) {
			document.title = 'Dreddit - ' + userAddress;
			$("#posts_by_user").text(userAddress + '(TODO:karma)');
		}
	}
});