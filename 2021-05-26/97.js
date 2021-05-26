const info = {
    [Symbol('a')]: 'b'
  }
  
  console.log(info)
  console.log(Object.keys(info)) //[]
  
  //Symbol类型是不可枚举的 