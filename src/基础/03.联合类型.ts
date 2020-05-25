// 联合类型（Union Types）表示取值可以为多种类型中的一种
(() => {
  // 变量可以是number、string、boolean
  let a: number | string | boolean
  a = 5
  a = '5'
  a = true

  // 联合实现定义函数的参数的时候, 使用参数的属性方法, 必须是联合类型共有的属性方法
  function fn(x: string | number) {
    // length属性, number没有
    return x.toString() // toString()公有
  }
})()