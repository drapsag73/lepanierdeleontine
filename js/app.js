var app = angular.module('MonApp', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'home.html',
			controller: 'postsCtrl'})
		.when('/comments/:nomutilisateur', {templateUrl: 'comments.html',
			controller: 'commentsCtrl'})
		.otherwise({redirectTo: '/'});
});

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});

