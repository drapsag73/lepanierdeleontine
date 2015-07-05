var app = angular.module('MonApp', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'accueil.html',
			controller: 'postsCtrl'})
        .when('/beneficiaires', {templateUrl: 'beneficiaires.html', controller: 'postsCtrl'})
        .when('/produits', {templateUrl: 'produits.html', controller: 'produitsCtrl'})
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

