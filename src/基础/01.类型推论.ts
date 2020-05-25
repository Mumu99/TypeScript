// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
// 包裹匿名函数, 防止变量污染
(() => {
  const a: number = 123
  // 类型推论
  // 结果为number类型, 再次赋值如果不是nnumber类型就会报错
  let b = 123 // --> const b:number = 123
  // b = 's'

  let c
  c = 123
  c = 'string'
  c = true
})()