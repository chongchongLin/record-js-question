function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person("Lydia", "Hallie");
  Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
  
  console.log(member.getFullName());

  //TypeError,构造函数不能这样新增