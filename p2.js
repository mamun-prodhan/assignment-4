function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return 'Please enter a string';
  }
  else{
    const result = string1.includes(string2);
    return result;
  }
}
// const output = matchFinder('John Doe','ohn');
// const output = matchFinder('JavaScript','Code');
const output = matchFinder('Peter Parker','Pen');
// const output = matchFinder('Peter Parker','pet');
// const output = matchFinder(false,true);
console.log(output);
