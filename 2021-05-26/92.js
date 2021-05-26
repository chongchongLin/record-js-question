function giveLydiaPizza() {
    return "Here is pizza!"
  }
  
  const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."
  
  console.log(giveLydiaPizza.prototype)
  console.log(giveLydiaChocolate.prototype) //undefined
  //箭头函数没有prototype的属性