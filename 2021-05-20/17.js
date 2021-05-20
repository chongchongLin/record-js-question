function getPersonInfo(one, two, three) {
    console.log(one)
    console.log(two)
    console.log(three)
  }
  
  const person = 'Lydia'
  const age = 21
  
  getPersonInfo`${person} is ${age} years old`

//   ["", " is ", " years old"] "Lydia" 21
//模板字符串会返回数组,并且插值处为空字符