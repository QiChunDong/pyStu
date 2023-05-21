// 声明字面量
let v1 = 10;
v1 = 20;

// 联合类型 可以是指定的数据类型
let v2 :string | number;
v2 = 1;
v2 = "eee";

// 联合类型还可以限制数据范围
let v3 :"male" | "female";
v3 = "male";
// 下面的会报错了
// v3 = "qqqq";

// any类型，相当于对该变量关闭了ts的限制
// 开发时 不建议经常使用any
let v4: any; // 显式的any
v4 = 1;
v4 = false;
v4 = "111";
// 不指定类型的字面量，默认就是any
let v5;
v5 = 1;
v5 = "1";

// unknow 未知数据类型
let v6: unknown
v6 = 1;
v6 = "2";

// any和unknown的区别是：
// 1. any对象可以赋值给任意类型的对象，这时候被复制的对象也变成了any，也就是说会污染被赋值的对象
// 2. unknown却不会，赋值给其他类型对象会报错，其实就是个类型安全的any
v3 = v4
// v3 = v6  // 这个赋值会报错

// 应该怎么赋值？
// 1. 先判断类型
v6 = "3";
let v7: string = "2";
if (typeof v6 == 'string') {
    v7 = v6
}
// 2. 类型断言
//   v as string
//   <type>v
v6 = "1";
v7 = v6 as string;
v7 = <string>v6;

// void 标识无返回值 如果返回了数据会有 编译报错
// function f1() :void{
//     return 1;
// }
// never标识永远不会有返回值，一般用作抛出异常，程序停止，永远不会返回的情况
// 用的比较少，这个函数肯定会报错，执行不完
function f2() :never{
    throw new Error("xxxxx")
}

// 对象，普通的object可以互相赋值
let v8: object
v8 = {}
v8 = function () {}
// ts可以指定对象的结构体
// 一旦制定了结构体，不能随意指定字段了
let v9: {name: string}
// 下面的内容就会报错,
// 无指定的key会报错
// 多了别的key也会报错
// v9 = {}
// v9 = {name: "qcd", age: 12}
v9 = {name: "qccd"}
// 支持将key设置为可选的，加个?就可以了
let v10: {name: string, age?: number}
// 缺失了age也不会报错
v10 = {name: "qcd"}
// 如果只需要指定一个name 其他的key可以随便指定，但是必须要有一个name
// [xxxx: string] 其中xxx表示key的形参，不限制叫啥，yyy也可以，指定了key是string类型，别的也可以，[]通过数组标识多个参数
// any标识值是any类型，当然任何其他类型都可以，比如 [xxx: string]: number
let v11: {name: string, [xxx: string]: any}
v11 = {name: 'qcd', age: 18}
let v12: {name: string, [yyyy: number]: boolean}
v12 = {name: 'qcd', 122: false}

// 函数也可以通过字面量提前约束其类型
// a和b都是定义函数的形式参数，都是定义中的，时机赋予的函数可以不是a和b
// 箭头函数指向了函数的返回值类型
let f3: (a: string, b: number) => number
// 即便不显示地指定返回值是number，函数的返回值也约束了number 返回tring会报错
f3 = function(x: string, y: number) {
    return 1
}
// 下面的会报错 因为没有返回number
// f3 = function(x: string, y: number): number {
//     return '2'
// }

// 数组，定义数组的类型
let v13: string[]
v13 = ['qcd']
// 下面的会报错
// v13 = [1]
// 还可以通过类似泛型的方式指定数组的类型
let v14: Array<number>
v14 = [2222]

// ts 拓展了元组类型： 固定长度的数组
// 执行效率和使用效率都会高很多
// []中指定期望数目的类型，能赋予的值，个数和类型必须要一致
let v15: [string, number]
v15 = ['qcd', 111]
// 下面的会报错
// v15 = ['qcd']
// v15 = ['qcd', '1111']
// v15 = ['qcd', 111, '222']



// ts拓展了枚举类
// 制定了两个值，均有各自的含义，可以在使用的地方进行赋值和赋过的值的对比
enum v16 {
    A,
    B
}
let v17: { name: string, gender: v16}
v17 = { name: 'qcd', gender: v16.A}
console.log(v17.gender == v16.A)
// 枚举定义时可以指定值也可以不指定值
enum v18 {
    A = 1,
    B = 2
}

// 联合类型 通过 | 来将多个类型进行联合
let v19: string | number;
v19 = 'qcd'
v19 = 123
// 还可以通过 & 进行联合，到那时意义变成了与的关系
// 所有的类型都满足才能定义
// 下面这种可以定义，但是毫无意义，因为不会有一个变量同时是字符串和数字
let v20: string & number
// & 的应用场景可以如下
// 约束对象的name和age两个字段的类型，类似于 let xxx: {name: string, age: number}
let v21: {name: string} & {age: number}
v21 = {name: 'qcd', age: 18}
// 如下会报错
// v21 = {name: 'qcd'}
// v21 = {anme: 'qcd', age:18, step: 1}

// 最后是类型的别名，可以基于一些类型的约束，定义为别名自己使用
type t1 = string
let v23: t1
v23 = '1111'
// 还可以封装一个自己定义的类型
// 定义t2 是1-5，这样 t2的变量只能赋值1-5
type t2 = 1 | 2 | 3 | 4 | 5
let v24: t2
v24 = 1
v24 = 5
// 如下会报错
// v24 = 'qcd'
// v24 = {name: 'qcd'}
// v24 = 6


console.log('the end')