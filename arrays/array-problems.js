// Brute force O(n^2)
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// Using hashmap. Better time complexity: O(n)
// we're looking to see if the number is stored in the object is a key that's in the array being iterated
const twoSum2 = function (nums, target) {
  const complements = {};
  for (let i = 0; i < nums.length; i++) {
    // looking for the difference
    // if the current number is stored in the obj that means it can be used to add with the key to get the target because it's complement

    // if the number we're iterating with is stored as a key, that means we can use it and a number we've already stored in order to reach our target
    if (complements[nums[i]]) {
      return [complements[nums[i]], i]; // because the nums[i] is a number stored in the obj
    }

    // storing the difference as a key in order to find the complement for the target. the value for the key will be the index since the problem asks for the indexes of the numbers that can be added together to reach the target
    //**** */
    //set the difference between the target and nums[i] as a key with it's value being the value of i in the iteration
    complements[target - nums[i]] = i;
  }
};

twoSum2([15, 11, 7, 2], 9);
// 9 - 15 = -6 complements[-6] = 0
// 9 - 11 = -2 complements[-2] = 1
// 9 - 7 = 2 complements[2] = 2
// 9 - 2 = 7

// so it's the value of 9 - 7 in the complements obj
// when iterates with 2, it finds 2 as a key in complements obj
// if it finds the number we're currently iterating with, that means the current number can be used to add with the number that was at the index when it was added to the complements obj

// complement has to do with subtracting a number from another number in order to see what value is needed to be able to reach the target
// we want to get to 100 and the number we have is 56. To figure out what number we need to get to the target of 100, we subtract 56 from 100, which is 44. 44 is the complement needed to get to 100

// so the whole concept is if the number being iterated through is stored, then that's the other number we need to reach our target

// storing the differences

// and since that number was used to subtract from the target, and the result of that is equal to the number that we're iterating with, it's the correct complement to reach our target, the value (which is an index) represents the position of the number that was used to get the same value that we're currently looping with

// const twoSum3 = function (nums, target) {
//   const complements = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (complements[nums[i]]) {
//       return [complements[nums[i]], i];
//     }
//     complements[target - nums[i]] = i;
//   }
// };

// twoSum3([15, 11, 7, 2], 9);

const twoSum4 = (target, numbersArr) => {
  const complements = {};

  for (let i = 0; i < numbersArr.length; i++) {
    if (complements[numbersArr[i]]) {
      return [complements[numbersArr[i]], i];
    }

    complements[target - numbersArr[i]] = i;
  }
};

console.log(twoSum4(20, [3, 77, 6, 98, 4, 14]));

// Sum mix
function sumMix(x) {
  return x.reduce((acc, curr) => acc + Number(curr), 0);
}

// Points
function points(games) {
  let result = 0;

  games.forEach((score) => {
    if (score[0] > score[2]) {
      result += 3;
    } else if (score[0] === score[2]) {
      result += 1;
    }
  });

  return result;
}
