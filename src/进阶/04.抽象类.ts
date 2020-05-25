/**
 *
 * 抽抽抽抽象类
 * 什么是抽象类？
    1. 抽象类是不允许被实例化的
    2. 抽象类中的抽象方法必须被子类实现

    abstract定义抽象类
 */

(() => {

  // 定义抽象类
  abstract class Door {
    name: string
    constructor(name: string) {
      this.name = name
    }
    public abstract say(): void
    // 定义方法
    open() {
      console.log('open');
    }

  }
  // 抽象类不允许被实例
  // const a = new Door()
  // 抽象类中抽象方法必须被之类实现
  class Adoor extends Door {
    constructor(name: string) {
      super(name) // 调用父级的constructor
      this.name // 通过this访问属性
      super.open() // 通过super访问方法
      this.open() // 通过this访问方法
    }
    say() {
      console.log('say()');
    }
  }
})()