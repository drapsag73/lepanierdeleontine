app.factory('Post', function($http, $q) {
	var factory = {
		posts: false,
		getPosts : function(){
			var deferred = $q.defer();
			if(factory.posts !== false){
				deferred.resolve(factory.posts);
			}else{
				$http.get('http://192.168.0.16:8090/personnes')
					.success(function(data, status){
						factory.posts = data;
						deferred.resolve(factory.posts);
					})
					.error(function(data, status){
						deferred.reject('Impossible de récupérer les données');
					});
			}
			return deferred.promise;
		},
		getPost : function(nomutilisateur){
			var deferred = $q.defer();
			var post = {};
			var posts = factory.getPosts().then(function(posts){
				angular.forEach(factory.posts, function(value, key){
					if(value.nomutilisateur == nomutilisateur){
						post = value;
					}
				});
				deferred.resolve(post);
			}, function(msg){
				deferred.reject();
				
			})
			return deferred.promise;
		},
        
        postPost : function(post){
  			var deferred = $q.defer();
             $http.post('http://192.168.0.16:8090/personnes', {'message': post})
                .success(function(data, status){
                    console.log('SUCCES');
  					factory.posts = data;
					deferred.resolve(factory.posts);
                })
				.error(function(data, status){
						deferred.reject("Impossible de créer l'utilisateur");
					});
                   
            
        },
        
        postDelete : function(id){
   			var deferred = $q.defer();
             $http.delete('http://192.168.0.16:8090/personnes/' + id)
                .success(function(data, status){
                    console.log('SUPPRESSION OK');
  					factory.posts = data;
					deferred.resolve(factory.posts);
                })
				.error(function(data, status){
						deferred.reject("Impossible de supprimer l'utilisateur");
					});
           
        },
        
        postPut : function(user){
            var tampon = {};
/*            tampon.sexe = user.famille.sexe
            tampon.nom = user.famille.nom
            tampon.prenom = user.famille.prenom
            tampon.datenaissance = user.famille.datenaissance
            tampon.activite = user.famille.activite
            tampon.parente = user.famille.parente
            user.famille = []
            user.famille.push(tampon);
            user.famille['nom'] = user.famille.nom*/
            alert(JSON.stringify(user.famille))
   			var deferred = $q.defer();
             $http.put('http://192.168.0.16:8090/personnes/' + user.id, user)
                .success(function(data, status){
                    console.log('MISE A JOUR OK');
  					factory.posts = data;
					deferred.resolve(factory.posts);
                })
				.error(function(data, status){
						deferred.reject("Impossible de mettre à jour l'utilisateur " + user.nom);
					});
           
        }
	}
	return factory;
});