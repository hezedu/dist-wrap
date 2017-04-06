# dist-warp
简单的将CommonJS代码包裹成前端代码，前端支持`CommonJS`, `amd`, `global`加载。
## 安装

`npm install dist-warp`
## 特性
- 最少的包裹－－只有一层。
- 头部注释不动。

## API
### warp(source)
### warp(source, globalName)
必须在源文件中包含一行 `module.exports = someModule`。

比如源`source`:
```js
var hello = 'hello';
module.exports = hello; //这个必须有
```
执行
```js
var warp = require('dist-warp');
var result = warp(source);
```
结果result:
```js
(function(){
//dist-wrap top

  var hello = 'hello';
  //module.exports = hello;

//dist-wrap bottom
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return hello;
    });
  }else if(typeof module === 'object' && module.exports){
    module.exports = hello;
  }else{
    this.hello = hello;
  }
})();
```
###自定义全局命名
如果想要绑定到全局的名字不一样，你可以用第二个参数：
```js
warp(source, 'HELLO');
```
