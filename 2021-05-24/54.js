//输出是什么
(() => {
    let x = (y = 10);
  })();
  
  console.log(typeof x);
  console.log(typeof y);
  
  //因为let x ,块级作用域,所以typeof X undefined;