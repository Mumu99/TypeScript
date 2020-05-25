/**
 * 函数的类型
 */

(() => {
  // 函数声明
  function fn1(x: number, y: string): string {
    return x + y
  }

  // 函数表达式
  // 默认类型推论给fn2推论为右边函数的类型
  const fn2 = function (x: number, y: string): string {
    return x + y
  }



  const fn3: (x: number, y: string) => string = function (x: number, y: string): string {
    return x + y
  }
  const fn4: (x: number, y: string) => string = (x: number, y: string): string => {
    return x + y
  }
  const fn5: (x: number, y: string) => string = (x: number, y: string): string => x + y

  // 定义接口
  interface Func {
    (x: number, y: string): string // 函数类型
    // name: string 普通类型
  }

  const fn6: Func = (x: number, y: string): string => x + y

  // 可选参数
  function fn7(x: number, y?: number): number {
    console.log(y);
    return x
  }

  // 可选参数后面不允许再出现必需参数了
  // function fn8(x: number, y?: number, z: number): number {
  //   console.log(y);
  //   return x
  // }

  // 参数默认值
  function fn9(x: number = 1, y?: number): number {
    console.log(y);
    // 可以通过强制类型转换
    return x + Number(y)
  }

  // 有参数默认值之后, 就可以放在可选参数后面
  function fn1_1(y?: number, x: number = 1): number {
    console.log(y);
    // 可以通过强制类型转换
    return x + Number(y)
  }

  // 剩余参数
  function fn1_2(a: number, ...args: any): number {
    console.log(args);
    return a
  }
  fn1_2(1, 2, '4', true)

  // 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
  // 传入number类型,不知道返回值类型是什么
  function reverse1(x: number | string): number | string {
    if (typeof x === "number") {
      return Number(x.toString().split("").reverse().join(""));
    } else {
      return x.split("").reverse().join("");
    }
  }
  reverse1(123)

  // 重载
  function reverse(x: number): number
  function reverse(x: string): string
  function reverse(x: number | string): number | string {
    if (typeof x === "number") {
      return Number(x.toString().split("").reverse().join(""));
    } else {
      return x.split("").reverse().join("");
    }
  }
  reverse('123')
})()
