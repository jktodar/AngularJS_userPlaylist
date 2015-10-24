angular.module('MusicApp')
	.factory('MusicFactory', function(){

		function Music(){


			this.explicitValue = {
				isTrue: 'explicit',
				isFalse: 'clean'

			}

			this.songsArray = [
				{ name: "Bad Blood", artist: 'Taylor Swift', genre: 'pop', type: '' },
				{ name: "Pop Song 2", artist: 'Artist Two', genre: 'pop', type: '' },
			
				{ name: "Take Me to Church", artist: 'Hozier', genre: 'rock', type: ''  },
				{ name: "Shut Up and Dance", artist: 'Walk The Moon', genre: 'rock', type: ''  },

				{ name: "Confused", artist: 'Kid Cudi', genre: 'rap', type: ''  },
				{ name: "Rap Song 2", artist: 'Rap Artist Two', genre: 'rap', type: '' }
					
			];


		}
		return Music;

	}) // MusicFactory

	.factory('UserFactory', function(MusicFactory){
		function User(){
			var self = this;

			self.user = {
				name: '',
				age: '',
				playlist: ''
			}

			self.tmpUser = {
				name: '',
				age: '',
				playlist: ''
			}

		}
	return User;
}) // UserFactory

