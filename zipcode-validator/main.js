// Define a function named zipCodeValidator which receives a string as an argument and returns true if it is a valid zip code, and returns false if it is not a valid zip code

// Valid zip code requirements:

// Must only contain numbers
// Must not contain any spaces
// Must not contain more than five digits in length



function zipCodeValidator(str) {
  var numArr = [];
  if (str.length === 5) {

    for (var i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        var num = null;
        num = parseInt(str[i]);
        numArr.push(num)
      }
    }
  }
  return numArr.length === 5;
}



zipCodeValidator("21594") // -> true
zipCodeValidator("3Eds32") // -> false
zipCodeValidator("9123465") // -> false
