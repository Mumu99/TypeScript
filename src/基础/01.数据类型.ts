// 基本类型 Number、String、Boolean、Null、Undefined symbol
// 定义的变量a, 他的类型是number值为123
let a: number = 123
// a = 's' 变量类型无法修改

const b: string = 'hello ts'

const c: boolean = true

const d: null = null

const e: undefined = undefined

const f: symbol = Symbol()

// 引用类型 Object、Function、Array

// 接口
interface Person {
  name: string,
  age: number
}

// 定义对象
const g: Person = {
  name: '木木',
  age: 18
}

// 定义函数
function add(x: number, y: number): number {
  return x * y
}

add(1, 2)

// 定义数组
const arr1: number[] = [1, 2, 3]
const arr2: Array<string> = ['1', '2', '3']

// TS 扩展类型

// 元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
// 元组是特殊的数组, 确定长度和确定每一个值的类型的数组
let x: [number, string]
// x = [1, 'Zhub']
// x = ['Zhub', 1] //error
// x = [1, '1', 1] //error

// 枚举 Enum: 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
enum Color { red, yellow, green } // 枚举的值默认从0开始, 一次增加
console.log(Color['red']); // 0
console.log(Color['yellow']);// 1
console.log(Color['green']);// 2
console.log(Color[0]); // red
console.log(Color[1]); // yellow
console.log(Color[2]); // green
console.log(Color.red); // 0

enum Color1 {
  red = 3,
  yellow = 2,
  green
}
console.log(Color1['red']); // 3
console.log(Color1['yellow']);// 2
console.log(Color1['green']);// 3--> 根据上次枚举的值继续往后添加
// 任意值 Any：用来表示允许赋值为任意类型。
let z: any = 123;
z = true;
z = 'string'
// 类似于
let o; // 类型推算
o = 'string'
o = true
// 空值 Void: 与 Any 相反，用来表示没有任何类型
/// 通常用来标识函数, 没有返回值, 函数就没有类型
function fn(): void { }
// 永不存在的值 Never：表示的是那些永不存在的值的类型
// 报错类型
function foo(): never {
  throw new Error('出错')
}