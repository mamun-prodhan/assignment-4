// problem one
function cubeNumber(number) {
    if (typeof number === 'number') {
      const result = Math.pow(number, 3);
      return result;
    }
    else{
      return 'Please enter a number';
    }
  }
//   const output = cubeNumber(3);
//   console.log(output);


// problem two
function matchFinder(string1, string2) {
    if (typeof string1 === "string" && typeof string2 === "string") {
      const result = string1.includes(string2);
      return result;
    }
    else{
      return 'Please enter a string';
    }
  }
//   const output = matchFinder('mypiet', "et");
//   console.log(output);



// problem three
function sortMaker(arr) {
    let temp=[];
    let arr0 = arr[0];
    let arr1 = arr[1];

    if(arr0 < arr1 && arr0 >= 0 && arr1 >= 0){
        return temp = [arr1, arr0];
    }
    else if(arr0 === arr1){
        return 'equal';
    }
    else if(arr0 < 0 || arr1 < 0){
        return 'Invalid Input';
    }
    else{
        return arr;
    }
}

// const arr = [2,3];
// const arr = [4,2];
// const arr = [4,4];
// const arr = [1,2];
// const arr = [4,-2];
// const arr = [0, 1];

// const result = sortMaker(arr)
// console.log(result);



// problem four
function findAddress(obj) {
    let street = obj.street || '__';
    let house = obj.house || '__';
    let society = obj.society || '__';
    return street+','+house+','+society;
}

// obj = {
//     street:10,
//     house:'15A',
//     society:'Earth Perfect'
// }

// result = findAddress(obj);
// console.log(result);



// problem five
function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return 'Please enter a valid array';
    }
    else{
        let sum = 0;
        for(let i = 0; i < changeArray.length; i++){
            sum+=changeArray[i];
        }
        if(sum >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }
}

// const result = canPay([1,2,5],10);
// const result = canPay([],10);
// console.log(result);
  