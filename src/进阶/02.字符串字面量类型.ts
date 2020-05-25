// 字符串字面量类型(
(() => {
  type Mode = 'development' | 'production' | 'none'

  function fn1(mode: Mode) {
    console.log(mode);
  }

  // 只能传入定义的东西

  fn1('development')
})()