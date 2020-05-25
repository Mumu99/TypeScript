/**
 * 
 * 泛型
 */
(() => {

  // value和返回值没有精确的类型
  function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }

  createArray(3, "x"); // ['x', 'x', 'x']

  //! 泛型
  function createArray2<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }

  // 指定泛型参数类型为string
  // createArray2<string>(3, "x"); // ['x', 'x', 'x']
  // createArray2<number>(3, 955); // ['x', 'x', 'x']
  // 不指定的时候, 会类型推论
  createArray2(3, false); // ['x', 'x', 'x']

  // 多个参数泛型
  function mos<A, B>(arr: [A, B]): [B, A] {
    return [arr[1], arr[0]]
  }
  mos<number, string>([1, 'mumu'])

  // 泛型约束
  // 利用接口
  interface num {
    length: number
  }
  // 泛型继承接口
  function moz<D extends num>(x: D): D {
    //! 因为不确定泛型的类型, 不能随意使用属性方法
    // console.log(x.length); // error
    // console.log(x.length);
    return x
  }
  moz({ length: 5 })

  // 泛型接口
  interface creatArrayFunc {
    <T>(length: number, value: T): Array<T>
  }
  // createArray3默认没有类型, 通过类型推论, 需要自己定义
  const createArray3: creatArrayFunc = <T>(length: number, value: T): Array<T> => {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }

  // 泛型类
  class Count<L> {
    public value: L
    public constructor(value: L) {
      this.value = value
    }
    public add(x: L, y: L): L {
      console.log(x, y);
      return x
    }
  }
  // 使用的时候, 指定泛型
  const v = new Count<number>(1)
  v.add(1, 2)

  // 泛型默认值
  function createArray4<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }
  createArray4(5, 'x')
  createArray4(5, true)
  createArray4<number>(5, 5)
})()