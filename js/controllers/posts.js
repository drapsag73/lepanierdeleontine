app.controller('postsCtrl', function($scope, $rootScope, $window, $location, $anchorScroll, $route, Post){
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
            $window.location.reload();
        }

        $scope.delete = function(id){
            Post.postDelete(id);
            $window.location.reload();

        }
        
        $scope.update = function(user){
             if(isDate(user.datenaissance)){
                $scope.valideDate = true;
                Post.postPut(user);
                $window.location.reload();
           }else{
               $scope.valideDate = false;
 //               alert("Date invalide !");
            }
         }
               
        $scope.valideDate = true;
        $scope.changeDate = function(sDate){
           if(isDate(sDate)){
               $scope.valideDate = true;
            }else{
                $scope.valideDate = false;
            }
         }

        $scope.valideMail = true;
        $scope.changeMail = function(sMail){
           if(isMail(sMail)){
                $scope.valideMail = true;
            }else{
                $scope.valideMail = false;
            }
         }
        
        $scope.changeCategorie = function(categorie,texteCategorie){
            $scope.query.categorie=categorie;
            $scope.editUser('annuler', 'annuler');
            $scope.liste = texteCategorie;
         }
            
        
        $scope.initRecherche = function(){
            $scope.recherche="";
            switch($scope.liste){
                case 'Les Bénéficiaires':
                    $scope.query.categorie='beneficiaires';
                    break;
                case 'Les Bénévoles':
                   $scope.query.categorie='benevoles';
                    break;
                case 'Les Solidaires':
                     $scope.query.categorie='solidaires';
                    break;
                default:
                    $scope.query.categorie='';
                
            }
        }
        
        $scope.setTitleInfos = function(user){
            $scope.infos = "Identifiant---------: " + user.identifiant + "\n";
            $scope.infos += "Nom----------------: " + user.nom + "\n";
            $scope.infos += "Prénom-------------: " + user.prenom + "\n";
            $scope.infos += "Adresse------------: " + user.adresse + "\n";
            $scope.infos += "Code Postal--------: " + user.codepostal + "\n";
            $scope.infos += "Ville--------------: " + user.ville + "\n";
            $scope.infos += "Messagerie---------: " + user.messagerie + "\n";
            $scope.infos += "Date de naissance--: " + user.datenaissance + "\n";
            $scope.infos += "Téléphone----------: " + user.telephone + "\n";
            $scope.infos += "Sexe---------------: " + user.sexe + "\n";
            $scope.infos += "Activité-----------: " + user.activite;
            
        }

/*        $scope.setMajToAllWords = function(toFirstWord, texte){
		  var newText = (toFirstWord == true) ? texte.charAt(0).toUpperCase() : texte.charAt(0);
		  for (var i=0 ; i<texte.length-1 ; i++){
			 if (texte.charAt(i).match(/[-\s]/) && texte.charAt(i+1).match(/\S/)){
				newText += texte.charAt(i+1).toUpperCase();
 			 } else {
				newText += texte.charAt(i+1);
			 }
		  }
		  return newText;
	   }
*/
    
        
   // $scope.edit = false;
    $scope.majCharge = [];
    $scope.nouveau = false;
    $scope.edit = true;
    $scope.sup = false;
    $scope.ann = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.user = {};
    $scope.user.famille = [];
    $scope.query = "";
    $scope.jumpToLocation = function(key){
        $location.hash(key);
        $anchorScroll();
    }

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
            $scope.user.datenaissance = '';
            $scope.user.telephone = '';
            $scope.user.sexe = '';
            $scope.user.activite = '';
            $scope.user.categorie = '';
            $scope.user.famille = [];
       } else if (action == "put"){
            $scope.nouveau = false;
            $scope.edit = true;
            $scope.sup = false;
            $scope.ann = false;
            $scope.gestion = true;
            $scope.validation = "modification";
            $scope.incomplete = false;
            
            $scope.user.id = id._id;
            $scope.user.identifiant = id.identifiant;
            $scope.user.nom = id.nom;
            $scope.user.prenom = id.prenom;
            $scope.user.adresse = id.adresse;
            $scope.user.codepostal = id.codepostal;
            $scope.user.ville = id.ville;
            $scope.user.messagerie = id.messagerie;
            $scope.user.datenaissance = id.datenaissance;
            $scope.user.telephone = id.telephone;
            $scope.user.sexe = id.sexe;
            $scope.user.activite = id.activite;
            $scope.user.categorie = id.categorie;
            $scope.user.famille = id.famille
  //          var tampon = {};
  //         alert(JSON.stringify($scope.user))
 //           tampon.nom = id.famille;
 //           $scope.user.famille.push(tampon);
 //         alert(JSON.stringify("tampon = " + tampon))
 //         alert(JSON.stringify($scope.user.famille))
           
      } else if (action == "delete"){
           $scope.nouveau = false;
            $scope.edit = false;
            $scope.sup = true;
            $scope.ann = false;
            $scope.gestion = true;
            $scope.validation = "suppression";
            $scope.incomplete = false;
            
            $scope.user.id = id._id;
            $scope.user.identifiant = id.identifiant;
            $scope.user.nom = id.nom;
            $scope.user.prenom = id.prenom;
            $scope.user.adresse = id.adresse;
            $scope.user.codepostal = id.codepostal;
            $scope.user.ville = id.ville;
            $scope.user.messagerie = id.messagerie;
            $scope.user.datenaissance = id.datenaissance;
            $scope.user.telephone = id.telephone;
            $scope.user.sexe = id.sexe;
            $scope.user.activite = id.activite;
            $scope.user.categorie = id.categorie;
            $scope.user.famille = id.famille;
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
            $scope.user.activite = '';
            $scope.user.categorie = '';
            $scope.user.famille = [];
        };
    };
    
    $scope.modifCharge = function(index, maj) {
        $scope.majCharge[index] = maj;
    };
    
       
    $scope.annuleModifCharge = function(index, maj, form) {
        console.log($scope.user.famille[index].nom)
        $scope.majCharge[index] = maj;
//        form.$rollbackViewValue();
//        form.$setPristine()
//        form.$setUntouched();
    };
     
    $scope.ajouteCharge = function() {
        $scope.user.famille.push($scope.temp);
        $scope.temp = []
   };
   
    $scope.supCharge = function(index) {
        $scope.user.famille.splice(index,1);
    };
});

