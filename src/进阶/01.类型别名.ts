/*
  类型别名用来给一个类型取新的名字
*/
(() => {
  type Name = string
  type Age = number
  type Say = () => string

  type Rc = ReactLoginFormComponent
  interface ReactLoginFormComponent {
    isLogin: boolean
  }

  const d: Rc = {
    isLogin: true
  }
  console.log(d);

  function fn1(a: Name, b: Age, c: Say) {
    console.log(a);
    console.log(b);
    console.log(c());
  }

  fn1('lo', 1, () => 'hello')
})()