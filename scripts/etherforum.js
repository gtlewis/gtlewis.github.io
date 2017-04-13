var contractAbi = [{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getTitleOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"getOwnerOfComment","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"deleteComment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"removeUpvoteFromPost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getPostsLengthForUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getBodyOfPost","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getNameOfForum","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isPostDownvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"postBody","type":"string"}],"name":"editPost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"from","type":"uint32"},{"name":"to","type":"uint32"}],"name":"getPostScoresForForum","outputs":[{"name":"","type":"uint32[]"},{"name":"","type":"uint32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"from","type":"uint32"},{"name":"to","type":"uint32"}],"name":"getCommentScoresForPost","outputs":[{"name":"","type":"uint32[]"},{"name":"","type":"uint32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"isCommentDownvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getScoreForUser","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getDownvoteCountOfPost","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"isSubscribedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"},{"name":"commentBody","type":"string"}],"name":"editComment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getOwnerOfPost","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentBody","type":"string"}],"name":"createComment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"getBodyOfComment","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"}],"name":"subscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postTitle","type":"string"},{"name":"postBody","type":"string"}],"name":"createPost","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"removeDownvoteFromComment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getCommentsLengthForUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getForumCount","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getUpvoteCountOfPost","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getBlockNumberOfPost","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getPostCountOfForum","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"getUpvoteCountOfComment","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"createForum","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"deletePost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"}],"name":"getScoreForForum","outputs":[{"name":"","type":"int32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"removeUpvoteFromComment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getPostByUser","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"getCommentCountOfPost","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"isCommentUpvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"downvoteComment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"upvoteComment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"}],"name":"unsubscribeUser","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isDeletedPost","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"removeDownvoteFromPost","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"upvotePost","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"isPostUpvotedByUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getCommentByUser","outputs":[{"name":"","type":"uint32"},{"name":"","type":"uint32"},{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"getDownvoteCountOfComment","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"},{"name":"commentId","type":"uint32"}],"name":"isDeletedComment","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint32"},{"name":"to","type":"uint32"}],"name":"getForumScores","outputs":[{"name":"","type":"int32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"forumId","type":"uint32"},{"name":"postId","type":"uint32"}],"name":"downvotePost","outputs":[],"payable":false,"type":"function"}];
var contractAddress = '0x1CdcB764Ab41b3CeA545d6aE9C0A394f94be5363';
var contract;
var currentUser;
var showAllForums = false;
var sortedListofIndexes = [];
var latestListItemDisplayed = 0;
var LIST_PAGE_SIZE = 2;
var POST_AGE_WEIGHT = 256;

window.addEventListener('load', function() {
	if (typeof web3 !== 'undefined' && typeof web3.eth !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
		contract = web3.eth.contract(contractAbi).at(contractAddress);
		currentUser = web3.eth.accounts[0];
		web3.eth.defaultAccount = currentUser;
	}

	if (currentUser != undefined) {
		$('#header-user-text').text('');
		$('#header-user-text').append(displayUser(currentUser));
		contract.getScoreForUser(currentUser, function(error, score) {
			if (!error) {
				$('#header-score-text').replaceWith(displayScore(score));
				if (current_page === 'forums') {
					showForumsPage();
					var sidebarPost = 0;
				} else if (current_page === 'forum') {
					showForumPage();
					var sidebarPost = 1;
				} else if (current_page === 'posts') {
					showPostsPage();
					var sidebarPost = 2;
				} else if (current_page === 'post') {
					showPostPage();
					var sidebarPost = 3;
				} else if (current_page === 'createpost') {
					showCreatePostPage();
					var sidebarPost = 4;
				} else if (current_page === 'editpost') {
					showEditPostPage();
					var sidebarPost = 5;
				}
				contract.isPostUpvotedByUser(0, sidebarPost, function (error, isUpvoted) {
					if (!error) {
						contract.isPostDownvotedByUser(0, sidebarPost, function (error, isDownvoted) {
							if (!error) {
								contract.getUpvoteCountOfPost(0, sidebarPost, function (error, upvoteCount) {
									if (!error) {
										contract.getDownvoteCountOfPost(0, sidebarPost, function (error, downvoteCount) {
											if (!error) {
												contract.isDeletedPost(0, sidebarPost, function (error, isDeletedPost) {
													if (!error) {
														contract.getTitleOfPost(0, sidebarPost, function (error, postTitle) {
															if (!error) {
																contract.getOwnerOfPost(0, sidebarPost, function (error, postOwner) {
																	if (!error) {
																		$('#content-sidebar-title').html(displayPost(0, sidebarPost, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, null, postOwner, false, false, true));
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
				contract.getBodyOfPost(0, sidebarPost, function (error, postBody) {
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
		contract.getForumCount(function(error, forumCount) {
			if (!error) {
				$('#content-main-titles').empty();
				$('#view_more_forums_button').prop('style', 'visibility:hidden');
				if (forumCount == 0) {
					$('#content-main-titles').append('<h1 id="loading-forums">No forums found</h1>');
				} else {
					if (!showAllForums) {
						$('#content-main-titles').append('<h1 id="loading-forums">Not subscribed to any forums</h1>');
					} else {
						$('#content-main-titles').append('<h1 id="loading-forums">Loading forums...</h1>');
					}
				}
				contract.getForumScores(0, forumCount, function(error, forumScores) {
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
				if (!showAllForums) {
					document.title = '<Ether>Forum - ' + currentUser;
					$('#show_forums_button').text('Show All Forums');
				} else {
					document.title = '<Ether>Forum';
					$('#show_forums_button').text('Show Subscribed');
				}
				$('#show_forums_button').parent().prop('style', 'margin-left:15px');
				$('#show_forums_button').prop('style', 'display:block');
				$('#content-main-text').prop('style', 'visibility:visible');
				$('#create_forum_button').prop('style', 'visibility:visible');
			} else {
				console.error(error);
			}
		});
	}
}

function displayPageOfForums() {
	if (!showAllForums) {
		for(var i=0; i<sortedListofIndexes.length; i++) {
			(function(forumId) {
				contract.isSubscribedByUser(sortedListofIndexes[forumId], function(error, isSubscribed) {
					if (!error) {
						if (isSubscribed) {
							contract.getNameOfForum(sortedListofIndexes[forumId], function(error, forumName) {
								if (!error) {
									$('#loading-forums').remove();
									var forum = $('<h1/>');
									forum.append(displayForum(sortedListofIndexes[forumId], forumName));
									$('#content-main-titles').append(forum);
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
				contract.getNameOfForum(sortedListofIndexes[forumId], function(error, forumName) {
					if (!error) {
						$('#loading-forums').remove();
						var forum = $('<h1/>');
						forum.append(displayForum(sortedListofIndexes[forumId], forumName));
						$('#content-main-titles').append(forum);
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
		contract.getNameOfForum(forumIdParameter, function (error, forumName) {
			if (!error) {
				if (forumName != undefined && forumName.length > 0) {
					document.title = '<Ether>Forum - ' + forumName;
					$('#header-main-text').html(displayForum(forumIdParameter, forumName));
					contract.getPostCountOfForum(forumIdParameter, function (error, postCount) {
						if (!error) {
							$('#content-main-titles').empty();
							if (postCount == 0) {
								$('#content-main-titles').append('<h1 id="loading-posts">No posts found</h1>');
							} else {
								$('#content-main-titles').append('<h1 id="loading-posts">Loading posts...</h1>');
							}
							contract.getPostScoresForForum(forumIdParameter, 0, postCount, function(error, postScores) {
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
							contract.isSubscribedByUser(forumIdParameter, function (error, isSubscribed) {
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
			contract.isPostUpvotedByUser(forumId, sortedListofIndexes[postId], function (error, isUpvoted) {
				if (!error) {
					contract.isPostDownvotedByUser(forumId, sortedListofIndexes[postId], function (error, isDownvoted) {
						if (!error) {
							contract.getUpvoteCountOfPost(forumId, sortedListofIndexes[postId], function (error, upvoteCount) {
								if (!error) {
									contract.getDownvoteCountOfPost(forumId, sortedListofIndexes[postId], function (error, downvoteCount) {
										if (!error) {
											contract.isDeletedPost(forumId, sortedListofIndexes[postId], function (error, isDeletedPost) {
												if (!error) {
													contract.getTitleOfPost(forumId, sortedListofIndexes[postId], function (error, postTitle) {
														if (!error) {
															contract.getOwnerOfPost(forumId, sortedListofIndexes[postId], function (error, postOwner) {
																if (!error) {
																	$('#loading-posts').remove();
																	$('#content-main-titles').append(displayPost(forumId, sortedListofIndexes[postId], isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, null, postOwner, false, true, true));
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

function showPostsPage() {
	var userParameter = getUrlParameter('user');
	if (userParameter != undefined && userParameter.length > 0 && currentUser != undefined) {
		document.title = '<Ether>Forum - ' + userParameter;
		contract.getScoreForUser(userParameter, function (error, score) {
			if (!error) {
				$('#header-main-text').html('Posts by User');
				var user = displayUser(userParameter);
				user.prop('href', 'https://etherchain.org/account/' + userParameter);
				$('#header-main-text').append(user);
				var score = displayScore(score);
				score.prop('style', 'margin-top:5px; border-color:#888888');
				$('#header-main-text').append(score);
				contract.getPostsLengthForUser(userParameter, function (error, postCount) {
					if (!error) {
						$('#content-main-titles').empty();
						if (postCount == 0) {
							$('#content-main-titles').append('<h1 id="loading-posts">No posts found</h1>');
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
				console.error(error);
			}
		});
	}
}

function displayPageOfUserPosts(user) {
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
			contract.getPostByUser(user, sortedListofIndexes[postId], function (error, userPost) {
				if (!error) {
					contract.isPostUpvotedByUser(userPost[0], userPost[1], function (error, isUpvoted) {
						if (!error) {
							contract.isPostDownvotedByUser(userPost[0], userPost[1], function (error, isDownvoted) {
								if (!error) {
									contract.getUpvoteCountOfPost(userPost[0], userPost[1], function (error, upvoteCount) {
										if (!error) {
											contract.getDownvoteCountOfPost(userPost[0], userPost[1], function (error, downvoteCount) {
												if (!error) {
													contract.isDeletedPost(userPost[0], userPost[1], function (error, isDeletedPost) {
														if (!error) {
															contract.getTitleOfPost(userPost[0], userPost[1], function (error, postTitle) {
																if (!error) {
																	contract.getNameOfForum(userPost[0], function (error, forumName) {
																		if (!error) {
																			$('#loading-posts').remove();
																			$('#content-main-titles').append(displayPost(userPost[0], userPost[1], isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, forumName, user, true, false, true));
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
		contract.getTitleOfPost(forumIdParameter, postIdParameter, function (error, postTitle) {
			if (!error) {
				if (postTitle != undefined && postTitle.length > 0) {
					contract.isPostUpvotedByUser(forumIdParameter, postIdParameter, function (error, isUpvoted) {
						if (!error) {
							contract.isPostDownvotedByUser(forumIdParameter, postIdParameter, function (error, isDownvoted) {
								if (!error) {
									contract.getUpvoteCountOfPost(forumIdParameter, postIdParameter, function (error, upvoteCount) {
										if (!error) {
											contract.getDownvoteCountOfPost(forumIdParameter, postIdParameter, function (error, downvoteCount) {
												if (!error) {
													contract.isDeletedPost(forumIdParameter, postIdParameter, function (error, isDeletedPost) {
														if (!error) {
															contract.getNameOfForum(forumIdParameter, function (error, forumName) {
																if (!error) {
																	contract.getOwnerOfPost(forumIdParameter, postIdParameter, function (error, postOwner) {
																		if (!error) {
																			$('#header-main-text').html(displayForum(forumIdParameter, forumName));
																			$('#content-main-titles').html(displayPost(forumIdParameter, postIdParameter, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, forumName, postOwner, false, true, false));
																			if (!isDeletedPost) {
																				document.title = '<Ether>Forum - ' + postTitle;
																				contract.getBodyOfPost(forumIdParameter, postIdParameter, function (error, postBody) {
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
																			contract.getCommentCountOfPost(forumIdParameter, postIdParameter, function (error, commentCount) {
																				if (!error) {
																					$('#comments').empty();
																					if (commentCount == 0) {
																						$('#comments').append('<div class="comment-status" id="loading-comments">No comments yet</div>');
																					} else {
																						$('#comments').append('<div class="comment-status" id="loading-comments">Loading comments...</div>');
																					}
																					contract.getCommentScoresForPost(forumIdParameter, postIdParameter, 0, commentCount, function (error, commentScores) {
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
			contract.isCommentUpvotedByUser(forumId, postId, sortedListofIndexes[commentId], function (error, isUpvoted) {
				if (!error) {
					contract.isCommentDownvotedByUser(forumId, postId, sortedListofIndexes[commentId], function (error, isDownvoted) {
						if (!error) {
							contract.getUpvoteCountOfComment(forumId, postId, sortedListofIndexes[commentId], function (error, upvoteCount) {
								if (!error) {
									contract.getDownvoteCountOfComment(forumId, postId, sortedListofIndexes[commentId], function (error, downvoteCount) {
										if (!error) {
											contract.isDeletedComment(forumId, postId, sortedListofIndexes[commentId], function (error, isDeletedComment) {
												if (!error) {
													contract.getBodyOfComment(forumId, postId, sortedListofIndexes[commentId], function (error, commentBody) {
														if (!error) {
															contract.getOwnerOfComment(forumId, postId, sortedListofIndexes[commentId], function (error, commentOwner) {
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
		contract.getNameOfForum(forumIdParameter, function (error, forumName) {
			if (!error) {
				if (forumName != undefined && forumName.length > 0) {
					document.title = '<Ether>Forum - ' + forumName;
					$('#header-main-text').html(displayForum(forumIdParameter, forumName));
					$('#post_title_input').prop('style', 'visibility:visible');
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
		contract.getTitleOfPost(forumIdParameter, postIdParameter, function (error, postTitle) {
			if (!error) {
				if (postTitle != undefined && postTitle.length > 0) {
					contract.isPostUpvotedByUser(forumIdParameter, postIdParameter, function (error, isUpvoted) {
						if (!error) {
							contract.isPostDownvotedByUser(forumIdParameter, postIdParameter, function (error, isDownvoted) {
								if (!error) {
									contract.getUpvoteCountOfPost(forumIdParameter, postIdParameter, function (error, upvoteCount) {
										if (!error) {
											contract.getDownvoteCountOfPost(forumIdParameter, postIdParameter, function (error, downvoteCount) {
												if (!error) {
													contract.isDeletedPost(forumIdParameter, postIdParameter, function (error, isDeletedPost) {
														if (!error) {
															contract.getNameOfForum(forumIdParameter, function (error, forumName) {
																if (!error) {
																	contract.getOwnerOfPost(forumIdParameter, postIdParameter, function (error, postOwner) {
																		if (!error) {
																			$('#header-main-text').html(displayForum(forumIdParameter, forumName));
																			$('#content-main-titles').html(displayPost(forumIdParameter, postIdParameter, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, forumName, postOwner, false, false, false));
																			if (!isDeletedPost) {
																				document.title = '<Ether>Forum - ' + postTitle;
																				contract.getBodyOfPost(forumIdParameter, postIdParameter, function (error, postBody) {
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
	showAllForums = !showAllForums;
	sortedListofIndexes = [];
	latestListItemDisplayed = 0;
	showForumsPage();
}

function createForum() {
	$('#content-error').prop('style', 'visibility:hidden');
	var name = $('#content-main-text').val();
	if  (name.length > 0 && name.length <= 32) {
		contract.createForum(name, function (error, result) {
			if (!error) {
				$('#content-main-text').val('');
			} else {
				console.error(error);
			}
		});
	} else {
		if (name.length > 32) {
			var errorText = 'Forum name too long';
		} else {
			var errorText = 'Forum name is empty';
		}
		$('#content-error').text(errorText);
		$('#content-error').prop('style', 'visibility:visible');
	}
}

function subscribe(forumId) {
	contract.subscribeUser(forumId, void_callback);
}

function unsubscribe(forumId) {
	contract.unsubscribeUser(forumId, void_callback);
}

function createPost(forumId) {
	$('#content-error').prop('style', 'visibility:hidden');
	var postTitle = $('#post_title_input').val();
	var postBody = $('#content-main-text').val();
	if  (postTitle.length > 0 && postTitle.length <= 256 && postBody.length <= 65536) {
		contract.createPost(forumId, postTitle, postBody, function (error, result) {
			if (!error) {
				$('#post_title_input').val('');
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

function editPost(forumId, postId) {
	$('#content-error').prop('style', 'visibility:hidden');
	var postBody = $('#content-main-text').val();
	if  (postBody.length <= 65536) {
		contract.editPost(forumId, postId, postBody, void_callback);
	} else {
		var errorText = 'Post too long';
		$('#content-error').text(errorText);
		$('#content-error').prop('style', 'visibility:visible');
	}
}

function submitComment(forumId, postId) {
	$('#create-comment-error').prop('style', 'visibility:hidden');
	var commentBody = $('#create-comment-text').val();
	if  (commentBody.length <= 65536) {
		contract.createComment(forumId, postId, commentBody, function (error, result) {
			if (!error) {
				$('#create-comment').prop('style', 'display:none');
				$('#create-comment-text').val('');
			} else {
				console.error(error);
			}
		});
	} else {
		var errorText = 'Comment too long';
		$('#create-comment-error').text(errorText);
		$('#create-comment-error').prop('style', 'visibility:visible');
	}
}

function deletePost(forumId, postId) {
	contract.deletePost(forumId, postId, void_callback);
}

function displayUser(user) {
	var blockie = blockies.create({seed:user, size:8, scale:3});
	blockie.setAttribute('class', 'user');
	var link = $('<a href="/posts.html?user=' + user + '" title="' + user + '"/>');
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
		return $('<a href="#" onclick="contract.upvotePost(' + forumId + ', ' + postId + ', void_callback);return false;"><img src="/images/upvote.png"/></a>');
	} else {
		return $('<a href="#" onclick="contract.removeUpvoteFromPost(' + forumId + ', ' + postId + ', void_callback);return false;"><img src="/images/upvoted.png"/></a>');
	}
}

function displayPostDownvote(forumId, postId, isDownvoted) {
	if (!isDownvoted) {
		return $('<a href="#" onclick="contract.downvotePost(' + forumId + ', ' + postId + ', void_callback);return false;"><img src="/images/downvote.png"/></a>');
	} else {
		return $('<a href="#" onclick="contract.removeDownvoteFromPost(' + forumId + ', ' + postId + ', void_callback);return false;"><img src="/images/downvoted.png"/></a>');
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

function displayPost(forumId, postId, isUpvoted, isDownvoted, upvoteCount, downvoteCount, isDeletedPost, postTitle, forumName, postOwner, isDisplayForum, isDisplayUser, isDisplayEditDelete) {
	if (isDeletedPost) {
		postTitle = '[DELETED]';
	}
	var h1 = $('<h1/>');
	var div1 = $('<div class="post-vote"/>');
	div1.append(displayPostUpvote(forumId, postId, isUpvoted));
	div1.append(displayPostScore(upvoteCount, downvoteCount));
	div1.append(displayPostDownvote(forumId, postId, isDownvoted));
	h1.append(div1);
	h1.append($('<a href="/post.html?forum_id=' + forumId + '&post_id=' + postId + '">' + postTitle + '</a>'));
	var div2 = $('<div class="post-info"/>');
	if (isDisplayForum) {
		div2.append(displayForum(forumId, forumName));
	}
	if (isDisplayUser) {
		div2.append(displayUser(postOwner));
	}
	if (isDisplayEditDelete && !isDeletedPost && postOwner === currentUser) {
		div2.append($('<a href="/editpost.html?forum_id=' + forumId + '&post_id=' + postId + '">Edit</a>'));
		div2.append($('<a href="#" onclick="contract.deletePost(' + forumId + ', ' + postId + ', void_callback);return false;">Delete</a>'));
	}
	h1.append(div2);
	return h1;
}

function displayCommentUpvote(forumId, postId, commentId, isUpvoted) {
	if (!isUpvoted) {
		return $('<a href="#" onclick="contract.upvoteComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;"><img src="/images/upvote.png"/></a>');
	} else {
		return $('<a href="#" onclick="contract.removeUpvoteFromComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;"><img src="/images/upvoted.png"/></a>');
	}
}

function displayCommentDownvote(forumId, postId, commentId, isDownvoted) {
	if (!isDownvoted) {
		return $('<a href="#" onclick="contract.downvoteComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;"><img src="/images/downvote.png"/></a>');
	} else {
		return $('<a href="#" onclick="contract.removeDownvoteFromComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;"><img src="/images/downvoted.png"/></a>');
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
	var div1 = $('<div class="comment-body"/>');
	var div2 = $('<div class="comment-vote"/>');
	div2.append(displayCommentUpvote(forumId, postId, commentId, isUpvoted));
	div2.append(displayCommentScore(upvoteCount, downvoteCount));
	div2.append(displayCommentDownvote(forumId, postId, commentId, isDownvoted));
	div1.append(div2);
	div1.append($(new showdown.Converter().makeHtml(commentBody)));
	var div3 = $('<div class="comment-info"/>');
	div3.append(displayUser(commentOwner));
	if (!isDeletedComment && commentOwner === currentUser) {
		// TODO: edit???
		div3.append($('<a href="#" onClick="createComment_(' + forumId + ', ' + postId + ');return false;">Edit</a>'));
		div3.append($('<a href="#" onClick="contract.deleteComment(' + forumId + ', ' + postId + ', ' + commentId + ', void_callback);return false;">Delete</a>'));
	}
	div1.append(div3);
	return div1;
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