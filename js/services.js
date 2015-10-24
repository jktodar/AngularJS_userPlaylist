angular.module('MusicApp')
	.service('MusicService', function(){
		
		var self = this;

		self.submitSongs = function(tempArray, trueArray, explicitValue){
		
			 var i;
			  for (i = 0; i < tempArray.length; i++) {
			    if (tempArray[i].checked == true) {
			    	while (trueArray.indexOf(tempArray[i]) == -1){
			    		trueArray.push(tempArray[i]);
			    		tempArray[i].type = explicitValue;
			    	}
			    }
			  } 
			
		};


}) // 

