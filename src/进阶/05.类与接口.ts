/**
 *
 * 类与接口
 */
(() => {

  interface Animation {
    eat(): void
  }

  // 类实现接口, implement
  // 目的, 抽取类的公共方法, 在接口中定义, 然后通过类是实现接口复用
  class Cat implements Animation {
    eat() {
      console.log('cat eat');
    }
  }
  class Dog {
    eat() {
      console.log('dog eat');
    }
  }

  interface Person {
    say(): void
  }

  // 类能实现多个接口
  class Bird implements Person, Animation {
    eat() { }
    say() { }
  }

  // 类只能继承一个类
  // class A extends Cat, Dog { }

  // 接口继承接口
  interface Fish extends Animation {
    swim(): void
  }

  class A implements Fish {
    eat() { }
    swim() { }
  }

  // 接口继承类
  class Point {
    x: number
    y: number
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }
  }

  interface Point3d extends Point {
    z: number
  }

  let p: Point3d = { z: 1, x: 2, y: 3 }
})()