// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
function sum(arr) {
   var sum = 0;

   for (var i = 0; i < arr.length; i++) {
     sum += arr[i];
   }

   return sum;
}

// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 24. If the array is empty, return 1.
function product(arr) {

  if (arr.length === 0) {
    return 1;
  } else {
  var prod = 1;

  for (var i = 0; i < arr.length; i++) {
   prod *= arr[i];
  }

 return prod;
}
}
// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return the concatenation of all the strings in the array. For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// array is empty, return ''.

// a.join('-'); // 'Wind-Rain-Fire'

function concatenate(arr) {
 var conc = '';
 if (arr.length === 0) {
   return '';
 } else {

return arr.join('');


 }
}

// Define a function named repeat that takes in two arguments.
//     str (string)
//     times (number)
//
// Return a new string containing times copies of the input str. For example,
// given 'hi' and 4, then return 'hihihihi'.
function repeat(str, times) {
  var result = '';
  for (var i = 0; i < times; i++) {
 result = (result + str);
}
return result;
}

// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
function filterPassingGrades(grades) {
  var result = [];
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] >= 70) {
      result.push(grades[i]);
    }
  }
  return result;
}



// Define a function named replace that takes in three arguments.
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Return a new array of numbers where all from elements are replaced with to.
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
function replace(arr,from,to) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === from) {
      arr[i] = to;
    }
  }
  return arr;
}


// Define a function named flatten that takes in one argument.
//     arr (array of arrays)
//
// Return a new array that combines all of elements of each inner array. For
// example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
//
// Tip: You only need to flatten one level deep.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
     result = result.concat(arr[i]);
  }
  return result;
}






// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function max (arr) {
  return Math.max.apply(null, arr);
}



// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min (arr) {
  return Math.min.apply(null, arr);
}



// Define a function named mean that takes in one argument.
//    arr (array of numbers)
//
// Return the mean (i.e. average) of all of the numbers in the array. For
// example, given [1, 2, 6], then return 3. If the array is empty, return null.
function mean (arr) {
  var result = 0;
  if (arr.length === 0) {
    return null;
  } else {
    for (var i=0; i <arr.length; i++) {
      result += arr[i];
    }
    var avg = result/arr.length;
  }
  return avg;
}



// Define a function named median that takes in one argument.
//    arr (array of numbers)
//
// Return the median of all of the numbers. For example, given [1, 2, 6], then
// return 2. Also, if given [1, 2, 6, 8], return 4. If the array is empty,
// return null.
//
// Tip: Use Google to learn more about calculating the median.
// Tip: The given array may not be sorted.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function median (arr) {
arr.sort();
var lowMid = Math.floor((arr.length-1)/2);
var highMid = Math.ceil((arr.length-1)/2);
var med = (arr[lowMid] + arr[highMid])/2;
return med || null;
}



// Define a function named contains that takes in two arguments.
//     arr (array of strings)
//     str (string)
//
// Return true if that string exists in the array, otherwise false.
function contains (arr,str) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  } return false;
}



// Define a function named distance that takes in two arguments.
//    point1 (object)
//    point2 (object)
//
// Assume each point argument has the following format.
//    { x: NUMBER, y: NUMBER }
//
// Return the distance between the two points on a Cartesian coordinate system.
// For example, given { x: 3, y: 2 } and { x: 9, y: 7 }, then return
// approximately 7.810249675906654.
//
// Tip: Use Google to learn more about calculating the distance.
function distance (point1, point2) {
  var distx = point2.x - point1.x;
  var disty = point2.y - point1.y;
  distx = distx * distx;
  disty = disty * disty;
  return Math.sqrt(distx + disty);
}



// Define a function named combine that takes in two arguments.
//    obj1 (object)
//    obj2 (object)
//
// Return a new object that has the key-value pairs of both objects. For
// example, given { a: 1 } and { b: 2 }, then return { a: 1, b: 2 }.
// If there's a key in more than one object,
// the latest object to have the key will determine the value. For example,
// given {c: 3} and {c: 4}, then return {c: 4}.
function combine (obj1, obj2) {
  for (var result in obj2) {
    obj1[result] = obj2[result];
  } return obj1;
}



// Define a function called invert that takes in one argument.
//    obj (object)
//
// Return a new object where the keys and values of the argument are inverted.
// For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.
function invert (obj) {
  var emptyObj = {};
  var key = '';
  for (var i in obj) {
    key = obj[i];
    emptyObj[key] = i;
  }
  return emptyObj;
}



// Define a function named values that takes in one argument.
//    obj (object)
//
// Return an array of the values of the object. For example, given
// { a: 1, b: 2, c: 3 }, then return [1, 2, 3].
function values (obj) {
  var key = [];
  for (var i in obj) {
    key.push(obj[i]);
  }
  return key;
}



// Define a function called toPairs that takes in one argument.
//    obj (object)
//
// Return a new array where each element is key-value pair array of the
// argument. For example, given { a: 1, b: 2 }, then return
// [['a', 1], ['b', 2]].
function toPairs (obj) {
return Object.entries(obj);
}



// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
function fromPairs (arr) {
 var keyVals = {};
 arr.forEach(function(Data) {
   keyVals[Data[0]] = Data[1];
 });
 return keyVals;
}
