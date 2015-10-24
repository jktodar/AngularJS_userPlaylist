
angular.module("MusicApp",[])
  .controller('MusicController', function (UserFactory, MusicFactory, MusicService){
		var self = this;

		self.newUser = new UserFactory;
		self.music = new MusicFactory;

		self.genresObj = {};
		self.genresObj.pop = [];
		self.genresObj.rock = [];
		self.genresObj.rap = [];

		self.tempSongsArray = [];
		self.checkedSongs = [];

			(function(){
			for (var i = 0; i <= self.music.songsArray.length - 1; i++) {
				if (self.music.songsArray[i].genre == 'pop') {
					self.genresObj.pop.push(self.music.songsArray[i]);
				}else if (self.music.songsArray[i].genre == 'rock') {
					self.genresObj.rock.push(self.music.songsArray[i]);
				}else{
					self.genresObj.rap.push(self.music.songsArray[i]);
				}
			}

		})();



		self.isDisabled = true;
		self.checkAge = function(age){
			if (age>=18) {
				self.isDisabled = false;
			}else{
				self.isDisabled = true;
			}
		};
		
		self.updateSong = function($event,song){
			self.tempSongsArray.push(song);
			
		};

		self.callSubmit = function(tempArray, explicitValue, name, age){
			MusicService.submitSongs(tempArray, self.checkedSongs, explicitValue, name);

			self.newUser.tmpUser.name = '';
			self.newUser.tmpUser.age = '';
			self.newUser.tmpUser.playlist = '';
			self.userSelection = '';
			self.userTypeSelect = '';

			self.newUser.user.name = name;
			self.newUser.user.age = age;
			self.newUser.user.playlist = self.checkedSongs;

			self.showUserInfo = true;

		};
		
		
})
