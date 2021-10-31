const solution = (str) => {
  let result = [];

  for (let i = 0; i < str.length; i += 2) {
    let temp = str.slice(i, i + 2);
    if (temp.length < 2) {
      temp += '_';
    }
    result.push(temp);
  }
  return result;
};

function solution2(str) {
  return (str + '_').match(/.{2}/g) || [];
}

// 1. (s+'_') -> means add _ in s or string
// 2. /.{2}/g -> this regexp means to return an array for all that matches the pattern (any 2 character)
//            -> . is a wildcard character (will match any one character)
//            -> {2} is a quantity specifier (specifies the lower and upper number of patterns - {lower, upper} ; the one used on the above solution means it wants specific number of matches - {2} )
//            -> g means to look for all that matches the pattern which is to look for every 2 character, without this, it'll return only the first match which is ['ab']
// 3. ||[]    -> means if no match found, it'll return empty array, without this, if no match was found, it will return NULL
