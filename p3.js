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
const arr = [4,-2];
// const arr = [-4, -5];

const result = sortMaker(arr)
console.log(result);
