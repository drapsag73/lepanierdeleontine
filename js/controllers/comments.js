app.controller('commentsCtrl', function ($scope, Post, $rootScope, $routeParams){
	$rootScope.loading = true;
	var post = Post.getPost($routeParams.nomutilisateur).then(function(post){
		$rootScope.loading = false;
		$scope.comments = post;
	}, function(msg){
		alert(msg);
		$rootScope.loading = false;
	})
});