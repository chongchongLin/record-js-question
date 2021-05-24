// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;

//import命令是在编译阶段就被执行,代码运行之前,导入的模块会先执行。
// console.log('running sum.js');
// console.log('running index.js');
//3