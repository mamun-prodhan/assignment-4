function cubeNumber(number) {
  if (typeof number === 'number') {
    const result = Math.pow(number, 3);
    return result;
  }
  else{
    return 'Please enter a number';
  }
}
const output = cubeNumber(4);
console.log(output);
