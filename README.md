# dist-wrap
简单的将CommonJS代码转成前端直接能src的代码，支持`amd`, `global`加载。
## 安装
`npm install dist-wrap`
## 特性
- 最少的包裹－－只有一层。
- 头部注释不动。
- 没有module.exports判定，支持CommonJS为啥还用转呢？是吧。
## API
### wrap(source)
### wrap(source, globalName)
**必须** 在源文件中包含一行 `module.exports = someModule`

比如源`source`:
```js
var hello = 'hello';
module.exports = hello; //这个必须有
```
执行
```js
var wrap = require('dist-wrap');
var result = wrap(source);
```
结果result:
```js
(function(){
//dist-wrap top

  var hello = 'hello';
  //module.exports = hello;

//dist-wrap bottom
  if(typeof define === 'function' && define.amd) {
    define(function(){
      return hello;
    });
  }else{
    this.hello = hello; //this是全局，.hello可以自定义,见下文
  }
})();
```
### 自定义全局命名
如果想要绑定到全局的名字不一样，你可以用第二个参数：
```js
wrap(source, 'HELLO');
```
