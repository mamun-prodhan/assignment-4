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
const result = canPay([1,-5,5],10);
// const result = canPay([],10);
console.log(result);