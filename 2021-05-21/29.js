const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b]) //456

//当一个字符串转对象时会变成,[objcet,objcet] 也就是a["[objcet,objcet]"] = 123 则a[c]后 a[b]=456;
