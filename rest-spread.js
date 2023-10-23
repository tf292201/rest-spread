// Rest and Spread
//1
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);
//2
const findMin = (...nums) => Math.min(...nums);
//3
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
//4
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map(num => num * 2)
];

//1
const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
//2
const extend = (array1, array2) => {
  return [...array1, ...array2];
}
//3
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}
//4
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}
//5
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}
//6
const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}