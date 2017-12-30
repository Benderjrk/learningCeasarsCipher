function ceasarCipher(str, num) {
  var lowerCaseString, alphabet, newString;
// making the string lowercase
  lowerCaseString = str.toLowerCase();
// making an alphabet array
  alphabet        = 'abcdefghijklmnopqrstuvwxyz'.split('');
  newString       = '';

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
  }
}
