/*

  类
*/
(() => {

  class Person {
    // 类上的属性值是string类型

    /**
     * class 定义类
     * extends 继承类
     * static 定义类的属性/ 方法
     * constructor 构造方法
     * super
     *  super() 调用父类的constructor方法
     *  super.xxx() 调用父类的其他方法, (通过this也能访问)
     *  但是不能获取父类的属性, 需要通过this.xx去访问
     * public 公开的, 所有类都能使用
     * private 私有的, 只有自己能访问
     * protected 受保护的, 除了自己还有子类也可以, 子类只能访问受保护的方法, 不能访问属性, 实例不能访问
     * 
     * 实例对象除了public, 其他的都不可以访问
     */
    //public eat: string // 可以在传入时候定义

    private age: number = 18 // 定义类型和值
    protected sex: string = '男'
    constructor(protected readonly eat: string) { // 代表将来new Person()传入的参数是string
      this.eat = eat
    }

    protected sayEat() {
      return `我喜欢吃${this.eat}, 年龄为${this.age},性别${this.sex}`
    }
  }
  class Son extends Person {
    constructor(name: string) {
      super(name) // 调用constructor方法
      // console.log(super.eat); // 不能访问父类的属性
      console.log(super.sayEat());
      console.log(this.eat); // 通过this访问
      // this.eat = '5' // 只读无法修改
    }
  }
  const a = new Person('面包')
  // console.log(a.eat, a.age);
  // console.log(a.eat, a.sex, a.age);
  // console.log(a.sayEat());
})()