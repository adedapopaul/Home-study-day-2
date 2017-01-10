  'use strict'
 
  var reverseString = function (stringToCheck) {
      var placeHolder = stringToCheck.toLowerCase();
      var reverseStr = [];
      
      if (stringToCheck === ""){
          return null;
      }
      else{
        for (var j = 0; j < placeHolder.length; j++){
            reverseStr.splice(0, 0, (placeHolder[j]));
        }
      }
      stringToCheck = reverseStr.join("");
      var revString = String(stringToCheck);
      
      if(revString === placeHolder){
          return true;
      }
    return revString;
  }

module.exports= reverseString;