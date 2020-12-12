// Solution #1
let number = /\d/;
let newArr = [];
let finalArr = [];

function returnSum(str) {
 let splitStr = str.split('');
  for (let i in splitStr) {
    if (splitStr[i].match(number)) {
      newArr.push(parseInt(splitStr[i]));
    } 
  }
  if (newArr.length === 0) {
    return 0;
  }
  return newArr.reduce((a, b) => a + b);
}

console.log(returnSum('GH2U87A'));
console.log(returnSum('ABC123'));
console.log(returnSum('ABC'));

///////////////////////////////////////////////////////////////
// Solution #2

function returnSum(str) {
  let result = str
  .split('')
  .filter(x => x.match(number))
  .map(i => parseInt(i));

  return (result.length > 0 ? result.reduce((a, b) => a + b) : 0);
}

console.log(returnSum('GH2U87A'));
console.log(returnSum('ABC123'));
console.log(returnSum('ABC'));