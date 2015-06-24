app.controller('postsCtrl', function($scope, $rootScope, $window, Post){
	   $rootScope.loading = true;
	   $scope.posts = Post.getPosts().then(function(posts){
	   	$rootScope.loading = false;
	   	$scope.posts = posts;
	   }, function(msg){
	   	alert(msg);
	   	$rootScope.loading = false;
	   })
        
        $scope.detail = function(details){
            $window.location.href="#/comments/" + details
        }
        
        $scope.create = function(user){
             console.log($scope);
                Post.postPost(user);
        }

         $scope.delete = function(id){
                Post.postDelete(id);
        }
         
   // $scope.edit = false;
    $scope.nouveau = false;
    $scope.edit = true;
    $scope.sup = false;
    $scope.ann = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.user = {};
    
    $scope.editUser = function(id, action) {
         if (action == 'post') {
            $scope.nouveau = true;
            $scope.edit = false;
            $scope.sup = false;
            $scope.ann = false;
            $scope.gestion = true;
            $scope.validation = "création";
            $scope.incomplete = true;
             
            $scope.user.id = '';
            $scope.user.identifiant = '';
            $scope.user.nom = '';
            $scope.user.prenom = '';
            $scope.user.adresse = '';
            $scope.user.codepostal = '';
            $scope.user.ville = '';
            $scope.user.messagerie = '';
            $scope.user.datenaissance = ''
            $scope.user.telephone = '';
            $scope.user.sexe = '';
       } else if (action == "put"){
            $scope.nouveau = false;
            $scope.edit = true;
            $scope.sup = false;
            $scope.ann = false;
            $scope.gestion = true;
            $scope.validation = "modification";
            $scope.incomplete = false;
            
            $scope.user.id = id._id;
            $scope.user.identifiant = id.nomutilisateur;
            $scope.user.nom = id.nom;
            $scope.user.prenom = id.prenom;
            $scope.user.adresse = id.adresse;
            $scope.user.codepostal = id.codepostal;
            $scope.user.ville = id.ville;
            $scope.user.messagerie = id.messagerie;
            $scope.user.datenaissance = id.datenaissance;
            $scope.user.telephone = id.telephone;
            $scope.user.sexe = id.sexe;
      } else if (action == "delete"){
          alert('OK')
           $scope.nouveau = false;
            $scope.edit = false;
            $scope.sup = true;
            $scope.ann = false;
            $scope.gestion = true;
            $scope.validation = "suppression";
            $scope.incomplete = false;
            
            $scope.user.id = id._id;
            $scope.user.identifiant = id.nomutilisateur;
            $scope.user.nom = id.nom;
            $scope.user.prenom = id.prenom;
            $scope.user.adresse = id.adresse;
            $scope.user.codepostal = id.codepostal;
            $scope.user.ville = id.ville;
            $scope.user.messagerie = id.messagerie;
            $scope.user.datenaissance = id.datenaissance;
            $scope.user.telephone = id.telephone;
            $scope.user.sexe = id.sexe;
        } else {
            $scope.nouveau = false;
            $scope.edit = true;
            $scope.sup = false;
            $scope.ann = true;
            $scope.gestion = false;
            $scope.validation = "rien";
            
            $scope.user.id = '';
            $scope.user.identifiant = '';
            $scope.user.nom = '';
            $scope.user.prenom = '';
            $scope.user.adresse = '';
            $scope.user.codepostal = '';
            $scope.user.ville = '';
            $scope.user.messagerie = '';
            $scope.user.datenaissance = '';
            $scope.user.telephone = '';
            $scope.user.sexe = '';
            $location.href="#/#entete"
        };
    };
});

