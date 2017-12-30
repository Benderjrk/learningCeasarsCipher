function ceasarCipher(str, num) {
  //to make any number only able to be 25 or lower
  num = num % 26;
  var lowerCaseString, alphabet, newString;
// making the string lowercase
  lowerCaseString = str.toLowerCase();
// making an alphabet array
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  newString = '';

//looping through the lowerCase string
  for(var i = 0; i < lowerCaseString.length; i++){
    var
      currentLetter,
      currentIndex,
      newIndex;
    //creating a variable at the current letter for each letter
    currentLetter = lowerCaseString[i];
    //creating a variable even if there is a space
    if(currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    //the current index of the current letter in the alphabet
    currentIndex = alphabet.indexOf(currentLetter);
    //the neew index is the current plus the num entered to be calculated with the alphabet and returned
    newIndex = currentIndex + num;
    //if the new index is over 25 we start back at one, looping back the alphabet
    if(newIndex > 25) {
      newIndex = newIndex - 26;
    }
    //if the new index is under 0 we start back at 26, looping back the alphabet
    if(newIndex < 0) {
      newIndex =  26 + newIndex;
    }
    //if the string was uppercase at that index on the normal string it will be uppercase on the new string
    if(str[i] === str[i].toUpperCase() ) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }


  }
  return newString;
}

console.log(ceasarCipher("Looking to the Sun", 2)); //Nqqmkpi vq vjg Uwp

console.log(ceasarCipher("Hose", -16)); //Ryco

console.log(ceasarCipher("Javascript", 20)); //Dupumwlcjn
