const add = () => {
    const cache = {};
    return num => {
      if (num in cache) {
        return `From cache! ${cache[num]}`;
      } else {
        const result = num + 10;
        cache[num] = result;
        return `Calculated! ${result}`;
      }
    };
  };
  
  const addFunction = add();
  console.log(addFunction(10));
  console.log(addFunction(10));
  console.log(addFunction(5 * 2));
  // add是一个记忆函数,每次都缓存上一次的值,如果值在缓存中出现就直接从缓存中读取
  //第一次10,不在缓存,所以输出From cache!,第二,第三次值都在缓存中所以Calculated