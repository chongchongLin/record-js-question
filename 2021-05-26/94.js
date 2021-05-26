function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
  }
  
  getItems(["banana", "apple"], "pear", "orange") //SyntaxError

//   ...args只能作为第二个参数,