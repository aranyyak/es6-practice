const ages = [12, 54, 84, 88];
const ages2 = [19, 83, 44, 67, 91, 30];
const allAges = [ages, ages2];
const allAges2 = [...ages, ...ages2];
// three dots is used to use only values of a array
// console.log(allAges2);

const taka = [800, 650, 1000, 900];

const maximum = Math.max (...taka);
console.log(maximum);