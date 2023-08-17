// function #1
function all(array, callback) {
  // traversing array elements and calling callback fn on each element
  for (const value of array) {
    // if a single array element doesn't satisfy callback fn condition, false is returned
    if (!callback(value)) {
      return false;
    }
  }
  // all array elements satisfy callback fn condition and true is returned
  return true;
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});
console.log("func1: " + allAreLessThanSeven); // false

/*----------------------------------------------------------------------------------------------------------*/

// function #2
function contains(obj, val) {
  // if obj sent is the value we are looking for
  if (obj === val) {
    return true;
  }

  // traversing through obj properties
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      // if type of property is object, recursion is used to traverse nested objects
      if (contains(obj[key], val)) {
        return true;
      }
    }
    // condition for finding val in first level of obj properties
    else if (obj[key] === val) {
      return true;
    }
  }

  // value isn't found
  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

var obj = 33;

console.log("func2: " + contains(nestedObject, "foo2"));
console.log("func2: " + contains(nestedObject, 44));
console.log("func2: " + contains(nestedObject, "test"));
console.log("func2: " + contains(obj, 33));
