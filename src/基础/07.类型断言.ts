/*
  类型断言（Type Assertion）可以用来手动指定一个值的类型。

*/
(() => {
  interface Person {
    name: string
  }
  interface Dog {
    age: number
  }

  // 将一个联合类型断言为其中一个类型 
  function fn(x: Person | Dog) {
    if ((x as Person).name) {
      console.log('Person', (x as Person).name);
      return x
    } else if ((x as Dog).age) {
      console.log('Dog', (x as Dog).age);
      return x
    }
  }
  fn({ name: 'tom' })
  fn({ age: 18 })

  // 将一个父类断言为更加具体的子类
  class Father { }
  // 子类
  class Son extends Father {
    name: string // son类中的属性进行声明
    constructor(name: string) {
      super()
      this.name = name
    }
  }
  class Doctor extends Father {
    age: number // son类中的属性进行声明
    constructor(age: number) {
      super()
      this.age = age
    }
  }

  function foo(x: Father) {
    if ((x as Son).name) {
      console.log((x as Son).name);
    } else if ((x as Doctor).age) {
      console.log((x as Doctor).age);
    }
  }
})()