$(function(){

	if (web3 != undefined && web3.eth != undefined) {
		var userAddress = web3.eth.accounts[0];
	}

	if (userAddress != undefined) {
		$("#user_div").text(userAddress);
	}

	var showAllSubreddits = false;

	if (!showAllSubreddits && userAddress != undefined) {
		document.title = 'Dreddit - ' + userAddress;
	}

	// TODO: show user's subscribed subreddits, or if ALL requested or user undefined then show all subreddits
});
