```
{
  // tsconfig.json的类型是 json with comment 是可以写注释的
  // include用来指定哪些ts文件需要被编译
  // ** 代表任意目录
  // *  代表任意文件
  "include": ["./src/**/*"],
  // exclude表示排除的文件
  // 配置规则同include，这个选项存在默认值['node_modules', 'browser_components', 'jspm_packages']
  "exclude": ["./src/exclude/*"],
  // extend 继承其他的文件的配置
  // 类似于面向对象的继承，父配置的配置会被继承下来
  // 本文件的同名配置会覆盖父配置
  // "extends": "",
  // files指定要编译的文件，可以多个
  "files": ["./files/f1.ts", "./files/f2.ts"],
  // 下面这个是最重要的配置，编译器的配置选项
  "compilerOptions": {
    // target指定要编译的js版本 默认值 ES3
    // 可选值报错时会提示 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'esnext'
    "target": "ES6",
    // module 指定模块化的规范
    // 可选值 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node16', 'nodenext'
    "module": "ES6",
    // 输出的目录，将所有编译过的js文件输出到指定目录,会按照ts文件的目录结构进行分目录的
    "outDir": "./dist/",
    // outFile 将编译过的js代码合并到一个js文件中
    // 如果代码中包含了模块化引用，只能指定module: 'amd'和 'system'才能编译
    // "outFile": "./dist/app/app.js"

    // 如果存在js文件也进行编译输出 默认false
    "allowJs": true,
    // 对于编译目录下的js文件如果进行编译，是否要检查js文件中的规范性 默认false
    "checkJs": false,
    // 编译文件中删除掉所有的注释 默认false
    "removeComments": true,
    // 执行编译后是否不生成编译文件 默认false
    "noEmit": false,
    // 编译报错后是否不生成文件 默认false
    "noEmitOnError": false,

    // 下面的都是语法检查类的配置选项
    // strict是一个总开关，开启了，后面的所有编译检查都开启，全部执行严格检查
    // 如果关闭 所有的检查都关闭
    "strict": false,
    // 编译后的js文件总是开启严格模式
    // es6后js都是默认严格的  /* use strict */
    // 默认值false
    "alwaysStrict": false,
    // 不允许使用隐式的any
    // 不允许不指定类型让编译器去推测
    // 默认值false
    "noImplicitAny": false,
    // 不允许使用隐式的this
    // 众所周知，js的this指向问题特别变态，这个选项要求必须要明确this
    // 默认值false
    "noImplicitThis": false,
    // 严格的判空检查
    // 如果变量没有判空就直接使用了，编译器也会报错
    // 默认值 false
    "strictNullChecks": false
  }
}
```