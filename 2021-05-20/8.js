class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor
      return this.newColor
    }
  
    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor
    }
  }
  
  const freddie = new Chameleon({ newColor: 'purple' })
  freddie.colorChange('orange')
  //TypeError 是因为colorChange是一个静态方法,只能被Chameleon使用,并不能被实例使用。