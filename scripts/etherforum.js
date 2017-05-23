var blottitContractAbi = [{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getTitleOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"getOwnerOfComment","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"deleteComment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"removeUpvoteFromPost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getPostsLengthForUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getBodyOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getNameOfForum","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isPostDownvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"postBody","type":"string"}],"name":"editPost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"from","type":"uint32"},{"name":"to","type":"uint32"}],"name":"getPostScoresForForum","outputs":[{"name":"","type":"uint32[]"},{"name":"","type":"uint32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"from","type":"uint32"},{"name":"to","type":"uint32"}],"name":"getCommentScoresForPost","outputs":[{"name":"","type":"uint32[]"},{"name":"","type":"uint32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"isCommentDownvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getScoreForUser","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getDownvoteCountOfPost","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"isSubscribedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"},{"name":"commentBody","type":"string"}],"name":"editComment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getOwnerOfPost","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentBody","type":"string"}],"name":"createComment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"getBodyOfComment","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"}],"name":"subscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postTitle","type":"string"},{"name":"postBody","type":"string"}],"name":"createPost","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"removeDownvoteFromComment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getCommentsLengthForUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getForumCount","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getUpvoteCountOfPost","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getBlockNumberOfPost","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getPostCountOfForum","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"getUpvoteCountOfComment","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"deletePost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getScoreForForum","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"removeUpvoteFromComment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getPostByUser","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getCommentCountOfPost","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"isCommentUpvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"downvoteComment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"upvoteComment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"}],"name":"unsubscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getActiveSubscriptionCountForUser","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isDeletedPost","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"removeDownvoteFromPost","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"upvotePost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isPostUpvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getCommentByUser","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint32"},{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"getDownvoteCountOfComment","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"description","type":"string"}],"name":"createForum","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"isDeletedComment","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint32"},{"name":"to","type":"uint32"}],"name":"getForumScores","outputs":[{"name":"","type":"int32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"downvotePost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getDescriptionOfForum","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"}];
var blottitContractAddress = '0xa87fC9Db7dB25415e6E04B9581aDB3DD39f9Ca29';
var blottitContract;

var ensContractAbi = [{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"label","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"name":"","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"}];
var ensContractAddress = '0x112234455c3a32fd11230c42e7bccd4a84e02010';
var ensContract;

var ensResolverContractAbi = [{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"addr","outputs":[{"name":"ret","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"name","outputs":[{"name":"ret","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"kind","type":"bytes32"}],"name":"has","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"addr","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"content","outputs":[{"name":"ret","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"hash","type":"bytes32"}],"name":"setContent","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"ensAddr","type":"address"}],"type":"constructor"},{"payable":false,"type":"fallback"}];

var currentUser;

var showAllForums = false;
var showUserComments = false;
var preventToggle = true;
var sortedListofIndexes = [];
var latestListItemDisplayed = 0;

var LIST_PAGE_SIZE = 10;
var POST_AGE_WEIGHT = 256;
var DOWNVOTE_MINIMUM = 10;
var DOWNVOTE_THRESHOLD = 0.7;

window.addEventListener('load', function() {
	if (typeof web3 !== 'undefined' && typeof web3.eth !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
		blottitContract = web3.eth.contract(blottitContractAbi).at(blottitContractAddress);
		ensContract = web3.eth.contract(ensContractAbi).at(ensContractAddress);
		currentUser = web3.eth.accounts[0];
		web3.eth.defaultAccount = currentUser;
	}

	if (currentUser != undefined) {
		displayENSName($('#header-user-ensname'), currentUser, false);
		$('#header-user-text').text('');
		$('#header-user-text').append(displayUser(currentUser, false, false));
		blottitContract.getScoreForUser(currentUser, function(error, score) {
			if (!error) {
				$('#header-score-text').replaceWith(displayScore(score));
				web3.eth.getBalance(currentUser, function(error, balance) {
					if (!error) {
						$('#header-user-balance').text(Math.round(web3.fromWei(balance)*100)/100 + ' ETH');
					} else {
						console.error(error);
					}
				});
				if (current_page === 'forums') {
					showForumsPage();
					var sidebarPost = 0;
				} else if (current_page === 'forum') {
					showForumPage();
					var sidebarPost = 1;
				} else if (current_page === 'createforum') {
					showCreateForumPage();
					var sidebarPost = 2;
				} else if (current_page === 'user') {
					showUserPage();
					var sidebarPost = 3;
				} else if (current_page === 'post') {
					showPostPage();
					var sidebarPost = 4;
				} else if (current_page === 'createpost') {
					showCreatePostPage();
					var sidebarPost = 5;
				} else if (current_page === 'editpost') {
					showEditPostPage();
					var sidebarPost = 6;
				}
				blottitContract.isPostUpvotedByUser(0, sidebarPost, function (error, isUpvoted) {
					if (!error) {
						blottitContract.isPostDownvotedByUser(0, sidebarPost, function (error, isDownvoted) {
							if (!error) {
								blottitContract.getUpvoteCountOfPost(0, sidebarPost, function (error, upvoteCount) {
									if (!error) {
										blottitContract.getDownvoteCountOfPost(0, sidebarPost, function (error, downvoteCount) {
											if (!error) {
												blottitContract.isDeletedPost(0, sidebarPost, function (error, isDeletedPost) {
													if (!error) {
														blottitContract.getTitleOfPost(0, sidebarPost, function (error, postTitle) {
															if (!error) {
																blottitContract.getOwnerOfPost(0, sidebarPost, function (error, postOwner) {
																	if (!error) {
																		$('#content-sidebar-title').html(displayPost(0, sidebarPost, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, null, postOwner, true, false, true, true, false));
																	} else {
																		console.error(error);
																	}
																});
															} else {
																console.error(error);
															}
														});
													} else {
														console.error(error);
													}
												});
											} else {
												console.error(error);
											}
										});
									} else {
										console.error(error);
									}
								});
							} else {
								console.error(error);
							}
						});
					} else {
						console.error(error);
					}
				});
				blottitContract.getBodyOfPost(0, sidebarPost, function (error, postBody) {
					if (!error) {
						$('#content-sidebar-text').html(new showdown.Converter().makeHtml(postBody));
					} else {
						console.error(error);
					}
				});
			} else {
				console.error(error);
			}
		});
	} else {
		$('#header-user-text').text('Not Connected');
		$('#header-score-text').text('?');
		$('#content-sidebar-title').prop('style', 'color:red');
		$('#content-sidebar-title').html('<h1>Not Connected<h1>');
		$('#content-sidebar-text').html('TODO: Not connected text, use <a href="todo">Metamask</a> or <a href="todo">Mist</a> (or <a href="todo">Parity</a>?)');
	}
});

function showForumsPage() {
	if (currentUser != undefined) {
		blottitContract.getForumCount(function(error, forumCount) {
			if (!error) {
				blottitContract.getActiveSubscriptionCountForUser(function(error, activeSubscriptionCount) {
					if (!error) {
						$('#content-main-titles').empty();
						$('#view_more_forums_button').prop('style', 'visibility:hidden');
						var forumsToDisplay = true;
						if (forumCount == 0) {
							$('#content-main-titles').append('<h1 id="loading-forums">No forums found</h1>');
							forumsToDisplay = false;
							preventToggle = false;
						} else {
							if (!showAllForums) {
								if (activeSubscriptionCount == 0) {
									$('#content-main-titles').append('<h1 id="loading-forums">Not subscribed to any forums - <a href="#" onclick="showForums();return false;" style="color:#20b2aa">Show All Forums</a></h1>');
									forumsToDisplay = false;
									preventToggle = false;
								} else {
									$('#content-main-titles').append('<h1 id="loading-forums">Loading forums...</h1>');
								}
							} else {
								$('#content-main-titles').append('<h1 id="loading-forums">Loading forums...</h1>');
							}
						}
						if (forumsToDisplay) {
							blottitContract.getForumScores(0, forumCount, function(error, forumScores) {
								if (!error) {
									for(var i=0; i<forumCount; i++) {
										sortedListofIndexes[i] = i;
									}
									sortedListofIndexes.sort(function(a, b) {
										return forumScores[b] - forumScores[a];
									});
									displayPageOfForums();
								} else {
									console.error(error);
								}
							});
						}
						if (!showAllForums) {
							document.title = '<Ether>Forum - ' + currentUser;
							$('#show_forums_button').text('Show All Forums');
						} else {
							document.title = '<Ether>Forum';
							$('#show_forums_button').text('Show Subscribed');
						}
						$('#show_forums_button').parent().prop('style', 'margin-left:15px');
						$('#show_forums_button').prop('style', 'display:block');
						$('#create_forum_button').parent().prop('style', 'margin-left:15px');
						$('#create_forum_button').prop('style', 'visibility:visible');
						$('#content-main-text').prop('style', 'visibility:visible');
					} else {
						console.error(error);
					}
				});
			} else {
				console.error(error);
			}
		});
	}
}

function displayPageOfForums() {
	if (sortedListofIndexes.length > 0) {
		preventToggle = true;
	} else {
		preventToggle = false;
	}
	if (!showAllForums) {
		for(var i=0; i<sortedListofIndexes.length; i++) {
			(function(forumId) {
				blottitContract.isSubscribedByUser(sortedListofIndexes[forumId], function(error, isSubscribed) {
					if (!error) {
						if (isSubscribed) {
							blottitContract.getNameOfForum(sortedListofIndexes[forumId], function(error, forumName) {
								if (!error) {
									blottitContract.getDescriptionOfForum(sortedListofIndexes[forumId], function(error, forumDescription) {
										if (!error) {
											$('#loading-forums').remove();
											var forum = $('<h1/>');
											forum.append(displayForum(sortedListofIndexes[forumId], forumName));
											$('#content-main-titles').append(forum);
											var description = $('<div class="content-main-description">' + forumDescription + '</div>');
											$('#content-main-titles').append(description);
											preventToggle = false;
										} else {
											console.error(error);
										}
									});
								} else {
									console.error(error);
								}
							});
						}
					} else {
						console.error(error);
					}
				});
			})(i);
		}
	} else {
		var from = latestListItemDisplayed;
		var to = latestListItemDisplayed + LIST_PAGE_SIZE;
		if (to >= sortedListofIndexes.length) {
			to = sortedListofIndexes.length;
			$('#view_more_forums_button').prop('style', 'visibility:hidden');
		} else {
			$('#view_more_forums_button').prop('style', 'visibility:visible');
		}
		for(var i=from; i<to; i++) {
			latestListItemDisplayed++;
			(function(forumId) {
				blottitContract.getNameOfForum(sortedListofIndexes[forumId], function(error, forumName) {
					if (!error) {
						blottitContract.getDescriptionOfForum(sortedListofIndexes[forumId], function(error, forumDescription) {
							if (!error) {
								$('#loading-forums').remove();
								var forum = $('<h1/>');
								forum.append(displayForum(sortedListofIndexes[forumId], forumName));
								$('#content-main-titles').append(forum);
								var description = $('<div class="content-main-description">' + forumDescription + '</div>');
								$('#content-main-titles').append(description);
								preventToggle = false;
							} else {
								console.error(error);
							}
						});
					} else {
						console.error(error);
					}
				});
			})(i);
		}
	}
}

function showForumPage() {
	var forumIdParameter = getUrlParameter('forum_id');
	if (forumIdParameter != undefined && forumIdParameter.length > 0 && currentUser != undefined) {
		blottitContract.getNameOfForum(forumIdParameter, function (error, forumName) {
			if (!error) {
				if (forumName != undefined && forumName.length > 0) {
					document.title = '<Ether>Forum - ' + forumName;
					$('#header-main-text').html(displayForum(forumIdParameter, forumName));
					blottitContract.getPostCountOfForum(forumIdParameter, function (error, postCount) {
						if (!error) {
							$('#content-main-titles').empty();
							if (postCount == 0) {
								$('#content-main-titles').append('<h1 id="loading-posts">No posts found</h1>');
							} else {
								$('#content-main-titles').append('<h1 id="loading-posts">Loading posts...</h1>');
							}
							blottitContract.getPostScoresForForum(forumIdParameter, 0, postCount, function(error, postScores) {
								if (!error) {
									web3.eth.getBlockNumber(function(error, currentBlockNumber) {
										if (!error) {
											var upvotes = postScores[0];
											var downvotes = postScores[1];
											var blockNumbers = postScores[2];
											for(var i=0; i<postCount; i++) {
												sortedListofIndexes[i] = i;
											}
											sortedListofIndexes.sort(function(a, b) {
												var score_a = (POST_AGE_WEIGHT * (upvotes[a] - downvotes[a])) - (currentBlockNumber - blockNumbers[a]);
												var score_b = (POST_AGE_WEIGHT * (upvotes[b] - downvotes[b])) - (currentBlockNumber - blockNumbers[b]);
												return score_b - score_a;
											});
											displayPageOfForumPosts(forumIdParameter);
										} else {
											console.error(error);
										}
									});
								} else {
									console.error(error);
								}
							});
							blottitContract.isSubscribedByUser(forumIdParameter, function (error, isSubscribed) {
								if (!error) {
									if (!isSubscribed) {
										$('#subscribe_button').parent().prop('style', 'margin-left:15px');
										$('#subscribe_button').prop('style', 'display:block');
									} else {
										$('#unsubscribe_button').parent().prop('style', 'margin-left:15px');
										$('#unsubscribe_button').prop('style', 'display:block');
									}
								} else {
									console.error(error);
								}
							});
							$('#create_post_button').parent().prop('style', 'margin-left:15px');
							$('#create_post_button').prop('style', 'display:block');
						} else {
							console.error(error);
						}
					});
				} else {
					$('#header-main-text').html('Forum not found');
					$('#content-main-titles').empty();
					$('#content-main-titles').append('<h1 id="loading-posts">No posts found</h1>');
				}
			} else {
				console.error(error);
			}
		});
	}
}

function displayPageOfForumPosts(forumId) {
	var from = latestListItemDisplayed;
	var to = latestListItemDisplayed + LIST_PAGE_SIZE;
	if (to >= sortedListofIndexes.length) {
		to = sortedListofIndexes.length;
		$('#view_more_posts_button').prop('style', 'visibility:hidden');
	} else {
		$('#view_more_posts_button').prop('style', 'visibility:visible');
	}
	for(var i=from; i<to; i++) {
		latestListItemDisplayed++;
		(function(postId) {
			blottitContract.isPostUpvotedByUser(forumId, sortedListofIndexes[postId], function (error, isUpvoted) {
				if (!error) {
					blottitContract.isPostDownvotedByUser(forumId, sortedListofIndexes[postId], function (error, isDownvoted) {
						if (!error) {
							blottitContract.getUpvoteCountOfPost(forumId, sortedListofIndexes[postId], function (error, upvoteCount) {
								if (!error) {
									blottitContract.getDownvoteCountOfPost(forumId, sortedListofIndexes[postId], function (error, downvoteCount) {
										if (!error) {
											blottitContract.isDeletedPost(forumId, sortedListofIndexes[postId], function (error, isDeletedPost) {
												if (!error) {
													blottitContract.getTitleOfPost(forumId, sortedListofIndexes[postId], function (error, postTitle) {
														if (!error) {
															blottitContract.getOwnerOfPost(forumId, sortedListofIndexes[postId], function (error, postOwner) {
																if (!error) {
																	$('#loading-posts').remove();
																	$('#content-main-titles').append(displayPost(forumId, sortedListofIndexes[postId], isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, null, postOwner, true, false, true, true, true));
																} else {
																	console.error(error);
																}
															});
														} else {
															console.error(error);
														}
													});
												} else {
													console.error(error);
												}
											});
										} else {
											console.error(error);
										}
									});
								} else {
									console.error(error);
								}
							});
						} else {
							console.error(error);
						}
					});
				} else {
					console.error(error);
				}
			});
		})(i);
	}
}

function showCreateForumPage() {
	if (currentUser != undefined) {
		$('#title_input').prop('style', 'visibility:visible');
		$('#content-main-text').prop('style', 'visibility:visible');
		$('#submit_post_button').prop('style', 'visibility:visible');
		$('#cancel_button').prop('style', 'visibility:visible');
	}
}

function showUserPage() {
	var userParameter = getUrlParameter('user');
	if (userParameter != undefined && userParameter.length > 0 && currentUser != undefined) {
		document.title = '<Ether>Forum - ' + userParameter;
		blottitContract.getScoreForUser(userParameter, function (error, userScore) {
			if (!error) {
				web3.eth.getBalance(userParameter, function(error, userBalance) {
					if (!error) {
						if (!showUserComments) {
							$('#header-main-text').html('Posts by User ');
							$('#show_posts_or_comments_button').text('Show Comments');
						} else {
							$('#header-main-text').html('Comments by User');
							$('#show_posts_or_comments_button').text('Show Posts');
						}
						var balance = $('<div id="header-main-balance">' + Math.round(web3.fromWei(userBalance)*100)/100 + ' ETH</div>');
						$('#header-main-text').append(balance);
						var score = displayScore(userScore);
						score.prop('style', 'margin-top:5px; border-color:#88ffff');
						$('#header-main-text').append(score);
						var user = displayUser(userParameter, true, false);
						user.prop('style', 'float:right');
						$('#header-main-text').append(user);
						var ensName = $('<div id="header-main-ensname"/>');
						$('#header-main-text').append(ensName);
						displayENSName(ensName, userParameter, true);
						if (!showUserComments) {
							blottitContract.getPostsLengthForUser(userParameter, function (error, postCount) {
								if (!error) {
									$('#content-main-titles').empty();
									$('#view_more_posts_or_comments_button').prop('style', 'visibility:hidden');
									$('#view_more_posts_or_comments_button').text('View more posts');
									if (postCount == 0) {
										$('#content-main-titles').append('<h1 id="loading-posts">No posts found - <a href="#" onclick="showUserPostsOrComments();return false;" style="color:#20b2aa">Show Comments</a></h1>');
									} else {
										$('#content-main-titles').append('<h1 id="loading-posts">Loading posts...</h1>');
									}
									var index = 0;
									for(var i=postCount-1; i>=0; i--) {
										sortedListofIndexes[index++] = i;
									}
									displayPageOfUserPosts(userParameter);
								} else {
									console.error(error);
								}
							});
						} else {
							blottitContract.getCommentsLengthForUser(userParameter, function (error, commentCount) {
								if (!error) {
									$('#content-main-titles').empty();
									$('#view_more_posts_or_comments_button').prop('style', 'visibility:hidden');
									$('#view_more_posts_or_comments_button').text('View more comments');
									if (commentCount == 0) {
										$('#content-main-titles').append('<h1 id="loading-posts">No comments found - <a href="#" onclick="showUserPostsOrComments();return false;" style="color:#20b2aa">Show Posts</a></h1>');
									} else {
										$('#content-main-titles').append('<h1 id="loading-posts">Loading comments...</h1>');
									}
									var index = 0;
									for(var i=commentCount-1; i>=0; i--) {
										sortedListofIndexes[index++] = i;
									}
									displayPageOfUserComments(userParameter);
								} else {
									console.error(error);
								}
							});
						}
						$('#show_posts_or_comments_button').parent().prop('style', 'margin-left:15px');
						$('#show_posts_or_comments_button').prop('style', 'display:block');
						$('#donate_button').parent().prop('style', 'margin-left:15px');
						$('#donate_button').prop('style', 'display:block');
					} else {
						console.error(error);
					}
				});
			} else {
				console.error(error);
			}
		});
	}
}

function displayPageOfUserPosts(user) {
	if (sortedListofIndexes.length > 0) {
		preventToggle = true;
	} else {
		preventToggle = false;
	}
	var from = latestListItemDisplayed;
	var to = latestListItemDisplayed + LIST_PAGE_SIZE;
	if (to >= sortedListofIndexes.length) {
		to = sortedListofIndexes.length;
		$('#view_more_posts_or_comments_button').prop('style', 'visibility:hidden');
	} else {
		$('#view_more_posts_or_comments_button').prop('style', 'visibility:visible');
	}
	for(var i=from; i<to; i++) {
		latestListItemDisplayed++;
		(function(index) {
			blottitContract.getPostByUser(user, sortedListofIndexes[index], function (error, userPost) {
				if (!error) {
					blottitContract.isPostUpvotedByUser(userPost[0], userPost[1], function (error, isUpvoted) {
						if (!error) {
							blottitContract.isPostDownvotedByUser(userPost[0], userPost[1], function (error, isDownvoted) {
								if (!error) {
									blottitContract.getUpvoteCountOfPost(userPost[0], userPost[1], function (error, upvoteCount) {
										if (!error) {
											blottitContract.getDownvoteCountOfPost(userPost[0], userPost[1], function (error, downvoteCount) {
												if (!error) {
													blottitContract.isDeletedPost(userPost[0], userPost[1], function (error, isDeletedPost) {
														if (!error) {
															blottitContract.getTitleOfPost(userPost[0], userPost[1], function (error, postTitle) {
																if (!error) {
																	blottitContract.getNameOfForum(userPost[0], function (error, forumName) {
																		if (!error) {
																			$('#loading-posts').remove();
																			$('#content-main-titles').append(displayPost(userPost[0], userPost[1], isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, forumName, user, true, true, true, true, true));
																			preventToggle = false;
																		} else {
																			console.error(error);
																		}
																	});
																} else {
																	console.error(error);
																}
															});
														} else {
															console.error(error);
														}
													});
												} else {
													console.error(error);
												}
											});
										} else {
											console.error(error);
										}
									});
								} else {
									console.error(error);
								}
							});
						} else {
							console.error(error);
						}
					});
				} else {
					console.error(error);
				}
			});
		})(i);
	}
}

function displayPageOfUserComments(user) {
	if (sortedListofIndexes.length > 0) {
		preventToggle = true;
	} else {
		preventToggle = false;
	}
	var from = latestListItemDisplayed;
	var to = latestListItemDisplayed + LIST_PAGE_SIZE;
	if (to >= sortedListofIndexes.length) {
		to = sortedListofIndexes.length;
		$('#view_more_posts_or_comments_button').prop('style', 'visibility:hidden');
	} else {
		$('#view_more_posts_or_comments_button').prop('style', 'visibility:visible');
	}
	for(var i=from; i<to; i++) {
		latestListItemDisplayed++;
		(function(index) {
			blottitContract.getCommentByUser(user, sortedListofIndexes[index], function (error, userComment) {
				if (!error) {
					blottitContract.getUpvoteCountOfPost(userComment[0], userComment[1], function (error, upvoteCountOfPost) {
						if (!error) {
							blottitContract.getDownvoteCountOfPost(userComment[0], userComment[1], function (error, downvoteCountOfPost) {
								if (!error) {
									blottitContract.isDeletedPost(userComment[0], userComment[1], function (error, isDeletedPost) {
										if (!error) {
											blottitContract.getTitleOfPost(userComment[0], userComment[1], function (error, postTitle) {
												if (!error) {
													blottitContract.getOwnerOfPost(userComment[0], userComment[1], function (error, postOwner) {
														if (!error) {
															blottitContract.getNameOfForum(userComment[0], function (error, forumName) {
																if (!error) {
																	blottitContract.isCommentUpvotedByUser(userComment[0], userComment[1], userComment[2], function (error, isCommentUpvoted) {
																		if (!error) {
																			blottitContract.isCommentDownvotedByUser(userComment[0], userComment[1], userComment[2], function (error, isCommentDownvoted) {
																				if (!error) {
																					blottitContract.getUpvoteCountOfComment(userComment[0], userComment[1], userComment[2], function (error, upvoteCountOfComment) {
																						if (!error) {
																							blottitContract.getDownvoteCountOfComment(userComment[0], userComment[1], userComment[2], function (error, downvoteCountOfComment) {
																								if (!error) {
																									blottitContract.isDeletedComment(userComment[0], userComment[1], userComment[2], function (error, isDeletedComment) {
																										if (!error) {
																											blottitContract.getBodyOfComment(userComment[0], userComment[1], userComment[2], function (error, commentBody) {
																												if (!error) {
																													$('#loading-posts').remove();
																													$('#content-main-titles').append(displayPost(userComment[0], userComment[1], true, true, upvoteCountOfPost, downvoteCountOfPost, isDeletedPost, postTitle, forumName, postOwner, false, true, true, false, true));
																													$('#content-main-titles').append(displayComment(userComment[0], userComment[1], userComment[2], isCommentUpvoted, isCommentDownvoted, upvoteCountOfComment, downvoteCountOfComment, isDeletedComment, commentBody, user));
																													preventToggle = false;
																												} else {
																													console.error(error);
																												}
																											});
																										} else {
																											console.error(error);
																										}
																									});
																								} else {
																									console.error(error);
																								}
																							});
																						} else {
																							console.error(error);
																						}
																					});
																				} else {
																					console.error(error);
																				}
																			});
																		} else {
																			console.error(error);
																		}
																	});
																} else {
																	console.error(error);
																}
															});
														} else {
															console.error(error);
														}
													});
												} else {
													console.error(error);
												}
											});
										} else {
											console.error(error);
										}
									});
								} else {
									console.error(error);
								}
							});
						} else {
							console.error(error);
						}
					});
				} else {
					console.error(error);
				}
			});
		})(i);
	}
}

function showPostPage() {
	var forumIdParameter = getUrlParameter('forum_id');
	var postIdParameter = getUrlParameter('post_id');
	if (forumIdParameter != undefined && forumIdParameter.length > 0 && postIdParameter != undefined && postIdParameter.length > 0 && currentUser != undefined) {
		blottitContract.getTitleOfPost(forumIdParameter, postIdParameter, function (error, postTitle) {
			if (!error) {
				if (postTitle != undefined && postTitle.length > 0) {
					blottitContract.isPostUpvotedByUser(forumIdParameter, postIdParameter, function (error, isUpvoted) {
						if (!error) {
							blottitContract.isPostDownvotedByUser(forumIdParameter, postIdParameter, function (error, isDownvoted) {
								if (!error) {
									blottitContract.getUpvoteCountOfPost(forumIdParameter, postIdParameter, function (error, upvoteCount) {
										if (!error) {
											blottitContract.getDownvoteCountOfPost(forumIdParameter, postIdParameter, function (error, downvoteCount) {
												if (!error) {
													blottitContract.isDeletedPost(forumIdParameter, postIdParameter, function (error, isDeletedPost) {
														if (!error) {
															blottitContract.getNameOfForum(forumIdParameter, function (error, forumName) {
																if (!error) {
																	blottitContract.getOwnerOfPost(forumIdParameter, postIdParameter, function (error, postOwner) {
																		if (!error) {
																			$('#header-main-text').html(displayForum(forumIdParameter, forumName));
																			$('#content-main-titles').html(displayPost(forumIdParameter, postIdParameter, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, forumName, postOwner, true, false, true, false, false));
																			if (!isDeletedPost) {
																				document.title = '<Ether>Forum - ' + postTitle;
																				blottitContract.getBodyOfPost(forumIdParameter, postIdParameter, function (error, postBody) {
																					if (!error) {
																						$('#content-main-text').html(new showdown.Converter().makeHtml(postBody));
																						$('#create_comment_button').prop('style', 'visibility:visible');
																						if (postOwner === currentUser) {
																							$('#edit_post_button').prop('style', 'visibility:visible');
																							$('#delete_post_button').prop('style', 'visibility:visible');
																						}
																					} else {
																						console.error(error);
																					}
																				});
																			} else {
																				$('#content-main-text').html('[DELETED BY OWNER]');
																			}
																			blottitContract.getCommentCountOfPost(forumIdParameter, postIdParameter, function (error, commentCount) {
																				if (!error) {
																					$('#comments').empty();
																					if (commentCount == 0) {
																						$('#comments').append('<div class="comment-status" id="loading-comments">No comments yet</div>');
																					} else {
																						$('#comments').append('<div class="comment-status" id="loading-comments">Loading comments...</div>');
																					}
																					blottitContract.getCommentScoresForPost(forumIdParameter, postIdParameter, 0, commentCount, function (error, commentScores) {
																						if (!error) {
																							var upvotes = commentScores[0];
																							var downvotes = commentScores[1];
																							for(var i=0; i<commentCount; i++) {
																								sortedListofIndexes[i] = i;
																							}
																							sortedListofIndexes.sort(function(a, b) {
																								return (upvotes[b] - downvotes[b]) - (upvotes[a] - downvotes[a]);
																							});
																							displayPageOfPostComments(forumIdParameter, postIdParameter);
																						} else {
																							console.error(error);
																						}
																					});
																				} else {
																					console.error(error);
																				}
																			});
																		} else {
																			console.error(error);
																		}
																	});
																} else {
																	console.error(error);
																}
															});
														} else {
															console.error(error);
														}
													});
												} else {
													console.error(error);
												}
											});
										} else {
											console.error(error);
										}
									});
								} else {
									console.error(error);
								}
							});
						} else {
							console.error(error);
						}
					});
				} else {
					$('#header-main-text').html('Forum not found');
					$('#content-main-titles').html('<h1>Post not found</h1>');
					$('#content-main-text').html('Post not found');
					$('#comments').html('<div class="comment-status">No comments found</div>');
				}
			} else {
				console.error(error);
			}
		});
	}
}

function displayPageOfPostComments(forumId, postId) {
	var from = latestListItemDisplayed;
	var to = latestListItemDisplayed + LIST_PAGE_SIZE;
	if (to >= sortedListofIndexes.length) {
		to = sortedListofIndexes.length;
		$('#view_more_comments_button').prop('style', 'visibility:hidden');
	} else {
		$('#view_more_comments_button').prop('style', 'visibility:visible');
	}
	for(var i=from; i<to; i++) {
		latestListItemDisplayed++;
		(function(commentId) {
			blottitContract.isCommentUpvotedByUser(forumId, postId, sortedListofIndexes[commentId], function (error, isUpvoted) {
				if (!error) {
					blottitContract.isCommentDownvotedByUser(forumId, postId, sortedListofIndexes[commentId], function (error, isDownvoted) {
						if (!error) {
							blottitContract.getUpvoteCountOfComment(forumId, postId, sortedListofIndexes[commentId], function (error, upvoteCount) {
								if (!error) {
									blottitContract.getDownvoteCountOfComment(forumId, postId, sortedListofIndexes[commentId], function (error, downvoteCount) {
										if (!error) {
											blottitContract.isDeletedComment(forumId, postId, sortedListofIndexes[commentId], function (error, isDeletedComment) {
												if (!error) {
													blottitContract.getBodyOfComment(forumId, postId, sortedListofIndexes[commentId], function (error, commentBody) {
														if (!error) {
															blottitContract.getOwnerOfComment(forumId, postId, sortedListofIndexes[commentId], function (error, commentOwner) {
																if (!error) {
																	$('#loading-comments').remove();
																	$('#comments').append(displayComment(forumId, postId, sortedListofIndexes[commentId], isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedComment, commentBody, commentOwner));
																} else {
																	console.error(error);
																}
															});
														} else {
															console.error(error);
														}
													});
												} else {
													console.error(error);
												}
											});
										} else {
											console.error(error);
										}
									});
								} else {
									console.error(error);
								}
							});
						} else {
							console.error(error);
						}
					});
				} else {
					console.error(error);
				}
			});
		})(i);
	}
}

function showCreatePostPage() {
	var forumIdParameter = getUrlParameter('forum_id');
	if (forumIdParameter != undefined && forumIdParameter.length > 0 && currentUser != undefined) {
		blottitContract.getNameOfForum(forumIdParameter, function (error, forumName) {
			if (!error) {
				if (forumName != undefined && forumName.length > 0) {
					document.title = '<Ether>Forum - ' + forumName;
					$('#header-main-text').html(displayForum(forumIdParameter, forumName));
					$('#title_input').prop('style', 'visibility:visible');
					$('#content-main-text').prop('style', 'visibility:visible');
					$('#submit_post_button').prop('style', 'visibility:visible');
					$('#cancel_button').prop('style', 'visibility:visible');
				} else {
					$('#header-main-text').html('Forum not found');
				}
			} else {
				console.error(error);
			}
		});
	}
}

function showEditPostPage() {
	var forumIdParameter = getUrlParameter('forum_id');
	var postIdParameter = getUrlParameter('post_id');
	if (forumIdParameter != undefined && forumIdParameter.length > 0 && postIdParameter != undefined && postIdParameter.length > 0 && currentUser != undefined) {
		blottitContract.getTitleOfPost(forumIdParameter, postIdParameter, function (error, postTitle) {
			if (!error) {
				if (postTitle != undefined && postTitle.length > 0) {
					blottitContract.isPostUpvotedByUser(forumIdParameter, postIdParameter, function (error, isUpvoted) {
						if (!error) {
							blottitContract.isPostDownvotedByUser(forumIdParameter, postIdParameter, function (error, isDownvoted) {
								if (!error) {
									blottitContract.getUpvoteCountOfPost(forumIdParameter, postIdParameter, function (error, upvoteCount) {
										if (!error) {
											blottitContract.getDownvoteCountOfPost(forumIdParameter, postIdParameter, function (error, downvoteCount) {
												if (!error) {
													blottitContract.isDeletedPost(forumIdParameter, postIdParameter, function (error, isDeletedPost) {
														if (!error) {
															blottitContract.getNameOfForum(forumIdParameter, function (error, forumName) {
																if (!error) {
																	blottitContract.getOwnerOfPost(forumIdParameter, postIdParameter, function (error, postOwner) {
																		if (!error) {
																			$('#header-main-text').html(displayForum(forumIdParameter, forumName));
																			$('#content-main-titles').html(displayPost(forumIdParameter, postIdParameter, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, forumName, postOwner, true, false, false, false, false));
																			if (!isDeletedPost) {
																				document.title = '<Ether>Forum - ' + postTitle;
																				blottitContract.getBodyOfPost(forumIdParameter, postIdParameter, function (error, postBody) {
																					if (!error) {
																						$('#content-main-text').val(postBody);
																						if (postOwner === currentUser) {
																							$('#content-main-text').prop('style', 'visibility:visible');
																							$('#submit_post_button').prop('style', 'visibility:visible');
																							$('#cancel_button').prop('style', 'visibility:visible');
																						}
																					} else {
																						console.error(error);
																					}
																				});
																			}
																		} else {
																			console.error(error);
																		}
																	});
																} else {
																	console.error(error);
																}
															});
														} else {
															console.error(error);
														}
													});
												} else {
													console.error(error);
												}
											});
										} else {
											console.error(error);
										}
									});
								} else {
									console.error(error);
								}
							});
						} else {
							console.error(error);
						}
					});
				} else {
					$('#header-main-text').html('Forum not found');
					$('#content-main-titles').html('<h1>Post not found</h1>');
				}
			} else {
				console.error(error);
			}
		});
	}
}

function showForums() {
	if (!preventToggle) {
		preventToggle = true;
		showAllForums = !showAllForums;
		sortedListofIndexes = [];
		latestListItemDisplayed = 0;
		showForumsPage();
	}
}

function createForum() {
	$('#content-error').prop('style', 'visibility:hidden');
	var forumName = $('#title_input').val();
	var forumDescription = $('#content-main-text').val();
	if  (forumName.length > 0 && forumName.length <= 32 && forumDescription.length <= 256) {
		blottitContract.createForum(forumName, forumDescription, function (error, result) {
			if (!error) {
				$('#title_input').val('');
				$('#content-main-text').val('');
			} else {
				console.error(error);
			}
		});
	} else {
		if (forumName.length > 32) {
			var errorText = 'Forum name too long';
		} else if (forumDescription.length > 256) {
			var errorText = 'Forum description too long';
		} else {
			var errorText = 'Forum name is empty';
		}
		$('#content-error').text(errorText);
		$('#content-error').prop('style', 'visibility:visible');
	}
}

function subscribe(forumId) {
	blottitContract.subscribeUser(forumId, void_callback);
}

function unsubscribe(forumId) {
	blottitContract.unsubscribeUser(forumId, void_callback);
}

function showUserPostsOrComments() {
	if (!preventToggle) {
		preventToggle = true;
		showUserComments = !showUserComments;
		sortedListofIndexes = [];
		latestListItemDisplayed = 0;
		showUserPage();
	}
}

function createPost(forumId) {
	$('#content-error').prop('style', 'visibility:hidden');
	var postTitle = $('#title_input').val();
	var postBody = $('#content-main-text').val();
	if  (postTitle.length > 0 && postTitle.length <= 256 && postBody.length <= 65536) {
		blottitContract.createPost(forumId, postTitle, postBody, function (error, result) {
			if (!error) {
				$('#title_input').val('');
				$('#content-main-text').val('');
			} else {
				console.error(error);
			}
		});
	} else {
		if (postTitle.length > 256) {
			var errorText = 'Title too long';
		} else if (postBody.length > 65536) {
			var errorText = 'Post too long';
		} else {
			var errorText = 'Title is empty';
		}
		$('#content-error').text(errorText);
		$('#content-error').prop('style', 'visibility:visible');
	}
}

function donateButton() {
	$('#donate_button').parent().html('<input id="header-button-input" type="text" placeholder="#ETH"/>');
	$('$header-button-input').keypress(function (e) {
		if (e.which == 13) {
			web3.eth.sendTransaction({to:getUrlParameter('user'), value: web3.toWei($('$header-button-input').val(), 'ether')}, void_callback)
			return false;
		}
	});
	$('#header-button-input').focus();
}

function editPost(forumId, postId) {
	$('#content-error').prop('style', 'visibility:hidden');
	var postBody = $('#content-main-text').val();
	if  (postBody.length <= 65536) {
		blottitContract.editPost(forumId, postId, postBody, void_callback);
	} else {
		var errorText = 'Post too long';
		$('#content-error').text(errorText);
		$('#content-error').prop('style', 'visibility:visible');
	}
}

function createComment_(forumId, postId) {
	$('#create-comment-error').prop('style', 'visibility:hidden');
	var commentBody = $('#create-comment-text').val();
	if  (commentBody.length > 0 && commentBody.length <= 65536) {
		blottitContract.createComment(forumId, postId, commentBody, function (error, result) {
			if (!error) {
				$('#create-comment').prop('style', 'display:none');
				$('#create-comment-text').val('');
			} else {
				console.error(error);
			}
		});
	} else {
		if (commentBody.length > 65536) {
			var errorText = 'Comment too long';
		} else {
			var errorText = 'Comment is empty';
		}
		$('#create-comment-error').text(errorText);
		$('#create-comment-error').prop('style', 'visibility:visible');
	}
}

function editComment(forumId, postId, commentId) {
	$('#edit-comment-error-' + forumId + '-' + postId + '-' + commentId).prop('style', 'visibility:hidden');
	var commentBody = $('#edit-comment-text-' + forumId + '-' + postId + '-' + commentId).val();
	if  (commentBody.length > 0 && commentBody.length <= 65536) {
		blottitContract.editComment(forumId, postId, commentId, commentBody, function (error, result) {
			if (!error) {
				$('#edit-comment-body-' + forumId + '-' + postId + '-' + commentId).prop('style', 'display:none');
				$('#comment-' + forumId + '-' + postId + '-' + commentId).prop('style', 'display:block');
			} else {
				console.error(error);
			}
		});
	} else {
		if (commentBody.length > 65536) {
			var errorText = 'Comment too long';
		} else {
			var errorText = 'Comment is empty';
		}
		$('#edit-comment-error-' + forumId + '-' + postId + '-' + commentId).text(errorText);
		$('#edit-comment-error-' + forumId + '-' + postId + '-' + commentId).prop('style', 'visibility:visible');
	}
}

function deletePost(forumId, postId) {
	blottitContract.deletePost(forumId, postId, void_callback);
}

function displayUser(user, etherchain, small) {
	var blockie = blockies.create({seed:user, size:8, scale:3});
	if (!small) {
		blockie.setAttribute('class', 'user');
	} else {
		blockie.setAttribute('class', 'user-small');
	}
	if (!etherchain) {
		var link = $('<a href="/user.html?user=' + user + '" title="' + user + '"/>');
	} else {
		var link = $('<a href="https://etherchain.org/account/' + user + '"/>');
	}
	link.append(blockie);
	return link;
}

function displayScore(score) {
	var value = Math.abs(score);
	if (value >99) {
		value = 99;
	}
	var div = $('<div class="score" title=' + score + '>' + value + '</div>');
	if (score < 0) {
		div.prop('style', 'color:red');
	}
	return div;
}

function displayForum(forumId, forumName) {
	return $('<a href="/forum.html?forum_id=' + forumId + '">' + forumName + '</a>');
}

function displayPostUpvote(forumId, postId, isUpvoted) {
	if (!isUpvoted) {
		return $('<a href="#" onclick="blottitContract.upvotePost(' + forumId + ', ' + postId + ', void_callback);return false;"><img src="/images/upvote.png"/></a>');
	} else {
		return $('<a href="#" onclick="blottitContract.removeUpvoteFromPost(' + forumId + ', ' + postId + ', void_callback);return false;"><img src="/images/upvoted.png"/></a>');
	}
}

function displayPostDownvote(forumId, postId, isDownvoted) {
	if (!isDownvoted) {
		return $('<a href="#" onclick="blottitContract.downvotePost(' + forumId + ', ' + postId + ', void_callback);return false;"><img src="/images/downvote.png"/></a>');
	} else {
		return $('<a href="#" onclick="blottitContract.removeDownvoteFromPost(' + forumId + ', ' + postId + ', void_callback);return false;"><img src="/images/downvoted.png"/></a>');
	}
}

function displayPostScore(upvoteCount, downvoteCount) {
	var score = upvoteCount - downvoteCount;
	var div = $('<div class="post-vote-score">' + score + '</div>');
	if (score > 0) {
		div.prop('style', 'color:green');
	} else if (score < 0) {
		div.prop('style', 'color:red');
	}
	return div;
}

function displayPost(forumId, postId, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, forumName, postOwner, isDisplayVoting, isDisplayForum, isDisplayUser, isDisplayEditDelete, isHideDownvoted) {
	if (isDeletedPost) {
		postTitle = '[DELETED]';
	}
	var h1 = $('<h1/>');
	if (isDisplayVoting) {
		var div1 = $('<div class="post-vote"/>');
		div1.append(displayPostUpvote(forumId, postId, isUpvoted));
		div1.append(displayPostScore(upvoteCount, downvoteCount));
		div1.append(displayPostDownvote(forumId, postId, isDownvoted));
		h1.append(div1);
	}
	var div2 = $('<div style="overflow:hidden"/>');
	if (isHideDownvoted && isAboveDownvoteThreshold(upvoteCount, downvoteCount)) {
		div2.append($('<a id="post-title-' + forumId + '-' + postId + '" href="/post.html?forum_id=' + forumId + '&post_id=' + postId + '" style="display:none">' + postTitle + '</a>'));
		div2.append($('<a id="post-downvoted-' + forumId + '-' + postId + '" href="#" onclick="$(&#39#post-downvoted-' + forumId + '-' + postId + '&#39).prop(&#39style&#39, &#39display:none&#39);$(&#39#post-title-' + forumId + '-' + postId + '&#39).prop(&#39style&#39, &#39display:block&#39);return false;">[DOWNVOTED]</a>'));
	} else {
		div2.append($('<a href="/post.html?forum_id=' + forumId + '&post_id=' + postId + '">' + postTitle + '</a>'));
	}
	h1.append(div2);
	var div3 = $('<div class="post-info"/>');
	if (isDisplayUser) {
		var div4 = $('<div style="float:left"/>');
		displayENSName(div4, postOwner, false);
		div3.append(div4);
		var user = displayUser(postOwner, false, true);
		user.prop('style', 'float:left');
		div3.append(user);
	}
	if (isDisplayForum) {
		var div5 = $('<div style="float:left"/>');
		div5.append(displayForum(forumId, forumName));
		div3.append(div5);
	}
	if (isDisplayEditDelete && !isDeletedPost && postOwner === currentUser) {
		var div6 = $('<div style="float:left"/>');
		div6.append($('<a href="/editpost.html?forum_id=' + forumId + '&post_id=' + postId + '">Edit</a>'));
		div6.append($('<a href="#" onclick="blottitContract.deletePost(' + forumId + ', ' + postId + ', void_callback);return false;">Delete</a>'));
		div3.append(div6);
	}
	h1.append(div3);
	return h1;
}

function displayCommentUpvote(forumId, postId, commentId, isUpvoted) {
	if (!isUpvoted) {
		return $('<a href="#" onclick="blottitContract.upvoteComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;"><img src="/images/upvote.png"/></a>');
	} else {
		return $('<a href="#" onclick="blottitContract.removeUpvoteFromComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;"><img src="/images/upvoted.png"/></a>');
	}
}

function displayCommentDownvote(forumId, postId, commentId, isDownvoted) {
	if (!isDownvoted) {
		return $('<a href="#" onclick="blottitContract.downvoteComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;"><img src="/images/downvote.png"/></a>');
	} else {
		return $('<a href="#" onclick="blottitContract.removeDownvoteFromComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;"><img src="/images/downvoted.png"/></a>');
	}
}

function displayCommentScore(upvoteCount, downvoteCount) {
	var score = upvoteCount - downvoteCount;
	var div = $('<div class="comment-vote-score">' + score + '</div>');
	if (score > 0) {
		div.prop('style', 'color:green');
	} else if (score < 0) {
		div.prop('style', 'color:red');
	}
	return div;
}

function displayComment(forumId, postId, commentId, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedComment, commentBody, commentOwner) {
	if (isDeletedComment) {
		commentBody = '[DELETED]';
	}
	var div1 = $('<div/>');
	var div2 = $('<div id="comment-' + forumId + '-' + postId + '-' + commentId + '" class="comment-body"/>');
	var div3 = $('<div class="comment-vote"/>');
	div3.append(displayCommentUpvote(forumId, postId, commentId, isUpvoted));
	div3.append(displayCommentScore(upvoteCount, downvoteCount));
	div3.append(displayCommentDownvote(forumId, postId, commentId, isDownvoted));
	div2.append(div3);
	var div4 = $('<div style="overflow:hidden"/>');
	var commentBodyHtml = $(new showdown.Converter().makeHtml(commentBody));
	if (isAboveDownvoteThreshold(upvoteCount, downvoteCount)) {
		var div5 = $('<div id="comment-body-' + forumId + '-' + postId + '-' + commentId + '" style="overflow:hidden;display:none"/>');
		div5.append(commentBodyHtml);
		div4.append(div5);
		div4.append($('<a id="comment-downvoted-' + forumId + '-' + postId + '-' + commentId + '" href="#" onclick="$(&#39#comment-downvoted-' + forumId + '-' + postId + '-' + commentId + '&#39).prop(&#39style&#39, &#39display:none&#39);$(&#39#comment-body-' + forumId + '-' + postId + '-' + commentId + '&#39).prop(&#39style&#39, &#39display:block&#39);return false;">[DOWNVOTED]</a>'));
	} else {
		div4.append(commentBodyHtml);
	}
	div2.append(div4);
	var div6 = $('<div class="comment-info"/>');
	var div7 = $('<div style="float:left"/>');
	displayENSName(div7, commentOwner, false);
	div7.append(displayUser(commentOwner, false, true));
	div6.append(div7);
	if (!isDeletedComment && commentOwner === currentUser) {
		var div8 = $('<div style="float:left"/>');
		div8.append($('<a href="#" onClick="$(&#39#comment-' + forumId + '-' + postId + '-' + commentId + '&#39).prop(&#39style&#39, &#39display:none&#39);$(&#39#edit-comment-' + forumId + '-' + postId + '-' + commentId + '&#39).prop(&#39style&#39, &#39display:block&#39);return false;">Edit</a>'));
		div8.append($('<a href="#" onClick="blottitContract.deleteComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;">Delete</a>'));
		div6.append(div8);
		var div9 = $('<div id="edit-comment-' + forumId + '-' + postId + '-' + commentId + '" class="comment-body" style="display:none"/>');
		div9.append($('<textarea id="edit-comment-text-' + forumId + '-' + postId + '-' + commentId + '" class="edit-comment-text" rows="3" placeholder="Edit comment">' + commentBody + '</textarea>'));
		var div10 = $('<div class="edit-comment-info"/>');
		div10.append($('<a href="#" onclick="editComment(' + forumId + ', ' + postId + ', ' + commentId + ');return false;">Submit</a>'));
		div10.append($('<a href="#" onclick="$(&#39#edit-comment-' + forumId + '-' + postId + '-' + commentId + '&#39).prop(&#39style&#39, &#39display:none&#39);$(&#39#edit-comment-error-' + forumId + '-' + postId + '-' + commentId + '&#39).prop(&#39style&#39, &#39visibility:hidden&#39);$(&#39#comment-' + forumId + '-' + postId + '-' + commentId + '&#39).prop(&#39style&#39, &#39display:block&#39);return false;">Cancel</a>'));
		div10.append($('<a href="#" onclick="blottitContract.deleteComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;">Delete</a>'));
		div11 = $('<div id="edit-comment-error-' + forumId + '-' + postId + '-' + commentId + '" class="edit-comment-error">Error</div>');
		div10.append(div11);
		div9.append(div10);
		div1.append(div9);
	}
	div2.append(div6);
	div1.append(div2);
	return div1;
}

function isAboveDownvoteThreshold(upvoteCount, downvoteCount) {
	var total = upvoteCount + downvoteCount;
	if (total > DOWNVOTE_MINIMUM && (downvoteCount / total) > DOWNVOTE_THRESHOLD) {
		return true;
	}
	return false;
}

function displayENSName(div, user, etherchain) {
	var reverseName = user.substring(2) + '.addr.reverse';
	ensContract.resolver(namehash(reverseName), function(error, ensResolverContractAddress) {
		if (!error) {
			var ensResolverContract = web3.eth.contract(ensResolverContractAbi).at(ensResolverContractAddress);
			ensResolverContract.name(namehash(reverseName), function(error, name) {
				if (!error) {
					ensContract.resolver(namehash(name), function(error, ensResolverContractAddress) {
						if (!error) {
							var ensResolverContract = web3.eth.contract(ensResolverContractAbi).at(ensResolverContractAddress);
							ensResolverContract.addr(namehash(name), function(error, addr) {
								if (!error) {
									if (addr === user) {
										if (!etherchain) {
											var link = $('<a href="/user.html?user=' + user + '">' + name + '</a>');
										} else {
											var link = $('<a href="https://etherchain.org/account/' + name + '">' + name + '</a>');
										}
										div.append(link);
									}
								}
							});
						}
					});
				}
			});
		}
	});
}

function namehash(name) {
    var node = '0x0000000000000000000000000000000000000000000000000000000000000000';
    if (name !== '') {
        var labels = name.split(".");
        for(var i = labels.length - 1; i >= 0; i--) {
            node = web3.sha3(node + web3.sha3(labels[i]).slice(2), {encoding: 'hex'});
        }
    }
    return node.toString();
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
}