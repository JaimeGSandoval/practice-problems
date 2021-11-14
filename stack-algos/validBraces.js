function validBraces(braces) {
  var matches = { '(': ')', '{': '}', '[': ']' };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      console.log('currentChar', currentChar);
      console.log('matches[currentChar]', matches[currentChar]);
      stack.push(currentChar);
      console.log('stack', stack);
    } else {
      console.log('else', currentChar);
      console.log('pop', matches[stack.pop()]);
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        // checks to see if not equal to correct closing brace
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length === 0; // any unclosed braces left?
}

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// validBraces('(){}[]');
// validBraces('([{}])');
validBraces('(}');
// validBraces('[(])');
// validBraces('[({})](]');
