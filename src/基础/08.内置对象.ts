// 内置对象
(() => {
  let b: Boolean = new Boolean(1);
  let e: Error = new Error("Error occurred");
  let d: Date = new Date();
  let r: RegExp = /[a-z]/;

  //   2. DOM 和 BOM 的内置对象
  // 有 `Document、HTMLElement、Event、NodeList` 等
  let dog: Document = document
  let body: HTMLElement = document.body;
  let allDiv: NodeList = document.querySelectorAll("div");

  console.log(dog);
  console.dir(body);
  console.log(allDiv);
  document.addEventListener("click", function (e: MouseEvent) {
    // Do something
    console.log(e);
  });
})()