// 数组
(() => {
  //1. [类型 + 方括号 ] 表示法
  const a: number[] = [1, 2, 3]

  // 2. 数组泛型
  const b: Array<string> = ['1', '2']

  // 3. 接口标识数组(一般不使用)
  interface ArrayList {
    [index: number]: boolean // 任意属性
  }
  const c: ArrayList = [true, false]

  // 4.类数组
  // 类数组（Array-like Object）不是数组类型，比如 arguments
  function fn(x: number) {
    const args: IArguments = arguments
    return args
  }
  fn(1)

  // 5. any
  const d: any[] = [1, 'string']
})()