// const doubleIt = function (num) {
//     return num*2;
// }

// const result = doubleIt(5);
// console.log(result);

const doubleIt = num => num*2;
const add = (x, y) => x+y;
const give5 = () => 5;

const doMath = (x, y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}
const result = doMath(10, 7);
console.log(result);