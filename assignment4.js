function cubeNumber(number) {
  if (typeof number === "number") {
    const result = Math.pow(number, 3);
    return result;
  } else {
    return "Please enter a number";
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please enter a string";
  } else {
    const result = string1.includes(string2);
    return result;
  }
}

function sortMaker(arr) {
  let temp = [];
  let arr0 = arr[0];
  let arr1 = arr[1];

  if (arr0 < arr1 && arr0 >= 0 && arr1 >= 0) {
    return (temp = [arr1, arr0]);
  } else if (arr0 === arr1) {
    return "equal";
  } else if (arr0 < 0 || arr1 < 0) {
    return "Invalid Input";
  } else {
    return arr;
  }
}

function findAddress(obj) {
  let street = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";
  return street + "," + house + "," + society;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Please enter a valid array";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
