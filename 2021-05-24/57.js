// counter.js
let counter = 10;
export default counter;

// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);//Error

//引入模块只能是只读的