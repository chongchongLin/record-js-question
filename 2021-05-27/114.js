let config = {
    alert: setInterval(() => {
      console.log('Alert!')
    }, 1000)
  }
  
  config = null
  //因为setInterval的参数是一个回调函数,回调函数仍然保留着对config的引用,对象就不会被引用