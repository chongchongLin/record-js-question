function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  
  const lydia = new Person('Lydia', 'Hallie')
  const sarah = Person('Sarah', 'Smith')
  
  console.log(lydia)
  console.log(sarah)  //undefined

  //之所以是undefined,是因为没有new,此时this指向全局对象
  