const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

obj.hasOwnProperty('1') //true
obj.hasOwnProperty(1) //true
set.has('1') //false
set.has(1) //true


//我的答案 A: false true false true
//所有对象的键(不包括symbol)都是字符串类型