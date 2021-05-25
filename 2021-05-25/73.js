async function getData() {
    return await Promise.resolve("I made it!");
  }
  
  const data = getData();
  console.log(data);
  //Promise {<pending>} 是因为没有then执行后面的回调