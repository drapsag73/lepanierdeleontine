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
                Post.postPost(user);
        }

         $scope.delete = function(id){
             console.log(id);
                Post.postDelete(id);
        }
         
   // $scope.edit = false;
    $scope.nouveau = false;
    $scope.edit = true;
    $scope.sup = false;
    $scope.ann = true;
    $scope.error = false;
    $scope.incomplete = false;
    
    $scope.editUser = function(id, action) {
         if (action == 'post') {
            $scope.nouveau = true;
            $scope.edit = false;
            $scope.sup = false;
            $scope.ann = false;
            $scope.gestion = true;
            $scope.validation = "création";
            
            $scope.incomplete = true;
            $scope.identifiant = '';
            $scope.nom = '';
            $scope.prenom = '';
            $scope.adresse = '';
            $scope.codepostal = '';
            $scope.ville = '';
            $scope.messagerie = '';
            $scope.datenaissance = ''
            $scope.telephone = '';
            $scope.sexe = '';
       } else if (action == "put"){
            $scope.nouveau = false;
            $scope.edit = true;
            $scope.sup = false;
            $scope.ann = false;
            $scope.gestion = true;
            $scope.validation = "modification";
            $scope.incomplete = false;
            
            $scope.id = id._id;
            $scope.identifiant = id.nomutilisateur;
            $scope.nom = id.nom;
            $scope.prenom = id.prenom;
            $scope.adresse = id.adresse;
            $scope.codepostal = id.codepostal;
            $scope.ville = id.ville;
            $scope.messagerie = id.messagerie;
            $scope.datenaissance = id.datenaissance;
            $scope.telephone = id.telephone;
            $scope.sexe = id.sexe;
      } else if (action == "delete"){
           $scope.nouveau = false;
            $scope.edit = false;
            $scope.sup = true;
            $scope.ann = false;
            $scope.gestion = true;
            $scope.validation = "suppression";
            $scope.incomplete = false;
            
            $scope.id = id._id;
            $scope.identifiant = id.nomutilisateur;
            $scope.nom = id.nom;
            $scope.prenom = id.prenom;
            $scope.adresse = id.adresse;
            $scope.codepostal = id.codepostal;
            $scope.ville = id.ville;
            $scope.messagerie = id.messagerie;
            $scope.datenaissance = id.datenaissance;
            $scope.telephone = id.telephone;
            $scope.sexe = id.sexe;
        } else {
            $scope.nouveau = false;
            $scope.edit = true;
            $scope.sup = false;
            $scope.ann = true;
            $scope.gestion = false;
            $scope.validation = "rien";
            
            $scope.identifiant = '';
            $scope.nom = '';
            $scope.prenom = '';
            $scope.adresse = '';
            $scope.codepostal = '';
            $scope.ville = '';
            $scope.messagerie = '';
            $scope.datenaissance = '';
            $scope.telephone = '';
            $scope.sexe = '';
            $location.href="#/#entete"
        };
    };
});

