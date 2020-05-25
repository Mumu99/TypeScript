/*
  在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
  TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
*/

(() => {
  // 接口的基本使用
  interface Person {
    name: string, // 确定属性
    age: number,
    sex?: string, // 可选属性
    [propName: string]: any // 任意属性
  }

  // 定义符合接口的对象, 属性不能多也不能少, 得一样
  const tom: Person = {
    name: 'tom',
    age: 18,
    sex: '男🚹',
    hoppy: ['打篮球', '跳', '唱']
  }
  console.dir(tom);

  interface Person1 {
    name: string,
    // 如果可选属性和任意属性表达式意思一样, 值也一样, 那么就不能写, 会报错
    // sex?: string, // 可选属性
    [propName: string]: string // 任意属性(可写可不写, 可选属性, 也是一样的, 所以不需要sex)
  }

  // 可以添加多个属性, 但是类型必须和接口里面定义的类型一致
  const b: Person1 = {
    name: 'amy',
    age: '18',
    gender: '女'
  }

  interface Person2 {
    readonly id: number
    name: string
    age?: number
  }

  const c: Person2 = {
    id: 1, // 只读属性
    name: 'amy',
    age: 18,
  }
  c.name = 'slp'
  // c.id = 1 // 只读属性不能修改
})()