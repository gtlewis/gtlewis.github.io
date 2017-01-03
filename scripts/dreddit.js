$(function(){

	var userAddress = web3.eth.defaultAccount;

	if (userAddress != undefined) {
		$("#user_div").text(userAddress);
	}

	var showAllSubreddits = false;

	if (!showAllSubreddits && userAddress != undefined) {
		document.title = 'Dreddit - ' + userAddress;
	}

	// TODO: show user's subscribed subreddits, or if ALL requested or user undefined then show all subreddits
});
