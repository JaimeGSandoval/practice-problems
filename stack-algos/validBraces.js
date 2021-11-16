function validBraces(braces) {
  var matches = { '(': ')', '{': '}', '[': ']' };
  var stack = [];
  var currentChar;
  // "(){}[]"
  // "[(])"
  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      console.log('currentChar', currentChar);
      console.log('matches[currentChar]', matches[currentChar]);
      stack.push(currentChar);
      console.log('stack', stack);
    } else {
      // closing braces
      console.log('else', currentChar);
      console.log('pop', matches[stack.pop()]);
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
// validBraces('(}');
// validBraces('[(])');
// validBraces('[({})](]');

// true cycle
// curr = (, matches[curr] = )
// stack ['(']
// curr = ), else check -> curr(')') !== matches[stack.pop()] value of stack.pop is'(' but the value for the matches[stack.pop()] is ')' in matches hash is ')', so it's a match

// false cycle
// curr = [, matches[curr] = ]
// stack ['[']
// curr = (, matches[curr] = )
// stack ['[', '(']
// curr = ], else check -> curr(']') !== matches[stack.pop()] value of stack.pop is '(' but the value for the matches[stack.pop()] is ')' in the matches hash
// since ] !== ) it's not a match and return false
