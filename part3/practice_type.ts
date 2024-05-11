// number
// 二进制数
const bin: number = 0b1010;
// 八进制数
const oct: number = 0o744;
// 十进制数
const integer: number = 10;
const float: number = 3.14;
// 十六进制数
const hex: number = 0xffffff;
console.table({bin, oct, integer, float, hex})

// 目标低于 ES2020 时，BigInt 字面量不可用。ts(2737)
// bgint
// 二进制整数
// const binB: bigint = 0b1010n;
// 八进制整数
// const octB: bigint = 0o744n;
// 十进制整数
// const integerB: bigint = 10n;
// 十六进制整数
// const hexB: bigint = 0xffffffn;
// console.table({binB, octB, integerB, hexB})

// SYMBOL
// 自定义Symbol
const key: symbol = Symbol();
// Well-Known Symbol
const symbolHasInstance: symbol = Symbol.hasInstance;
console.table({key, symbolHasInstance})

const x: unique symbol = Symbol();
const y: symbol = Symbol();
interface Foo {
    [x]: string; // 正确
    // [y]: string;
    // ~~~
    // 错误：接口中的计算属性名称必须引用类型为字面量类型
    // 或'unique symbol'的表达式
}
console.table({x, y})


const a: unique symbol = Symbol();
// 报错
// let a1: unique symbol = Symbol();
// 报错
// var a2: unique symbol = Symbol();
// 报错
// var a3: unique symbol = Symbol();

interface WithUniqueSymbol {
	readonly b: unique symbol
}
interface WithUniqueSymbol1 {
    // 报错
	// b: unique symbol
}
class C {
	static readonly c: unique symbol 
}


const a3: unique symbol = Symbol();
const b3: unique symbol = Symbol('desc');
// const c3: unique symbol = a;
// ~
// 错误：a的类型与c的类型不兼容
// const d: unique symbol = b3;
// ~
// 错误：b的类型与d的类型不兼容
console.log(b3, "b3")


// enum
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
}
console.log(Direction, 'd')
enum Direction1 {
    Up, // 0
    Down, // 1
    Left = 10, // 10
    Right, // 11
}
console.log(Direction1, 'd1')

// 可以直接赋值给number
const direction: number = Direction.Up;

// const d4: Direction = 10


// 常量枚举，初始值A是数值，自增
enum Foo1 {
    A, // 0
    B, // 1
}
// 不可以是字符串
// 不然后面的不指定值会报错
enum Bar1 {
    C = 'C',
    // D, // 编译错误
}
// 一下也都是常量枚举
enum Foo2 {
    A = 0, // 数字字面量
    B = 'B', // 字符串字面量
    C = `C`, // 无替换值的模板字面量
    D = A, // 引用前面定义的常量枚举成员
}
enum Bar2 {
    A = -1, // 一元运算符
    B = 1 + 2, // 二元运算符
    C = (4 / 2) * 3, // 分组运算符（小括号）
}
// 字面量枚举值，常量的子集
enum Foo3 {
    A,
    B = 1,
    C = -3,
    D = 'foo',
    E = `bar`,
    F = A
}


// 联合枚举类型 Direction4等同于UnionDirectionType4
enum Direction4 {
    Up,
    Down,
    Left,
    Right,
}
type UnionDirectionType4 =
| Direction.Up
| Direction.Down
| Direction.Left
| Direction.Right;
    

enum Direction5 {
    Up,
    Down,
    Left,
    Right,
}
function fn (direction: Direction5) {
    if (direction === Direction5.Up) {
        // Direction.Up
    } else if (direction === Direction5.Down) {
        // Direction.Down
    } else if (direction === Direction5.Left) {
        // Direction.Left
    } else {
        // 能够分析出此处的direction为Direction.Right
        direction;
        console.log(direction, "d5 else")
    }
}
let dt5: Direction5 = Direction5.Right
console.log(dt5, "dt5")
fn(dt5)

const enum Directions6 {
    Up,
    Down,
    Left,
    Right,
}
const dt6 = [
    Directions6.Up,
    Directions6.Down,
    Directions6.Left,
    Directions6.Right,
];

console.log(dt6, 'dt6')


const starA1: 'hello' = 'hello';
const starA2: `world` = `world`;
let starA3: string;
starA3 = starA1;
starA3 = starA2;


// 顶端类型
let ddA1: any;
ddA1 = true;
ddA1 = 'hi';
ddA1 = 3.14;
// ddA1 = 99999n;
ddA1 = Symbol();
ddA1 = undefined;
ddA1 = null;
ddA1 = {};
ddA1 = [];
ddA1 = function () {};

let a4: boolean = ddA1;
let b4: string = ddA1;
let c4: number = ddA1;
let d4: bigint = ddA1;
let e4: symbol = ddA1;
let f4: void = ddA1;
let g4: undefined = ddA1;
let h4: null = ddA1;

const a5: any = 0;
a5.length;
a5();
a5[0];


// unknown

let uA2: unknown;
// 正确
const a6: any = uA2;
const b6: unknown = uA2;
// 以下均错误
const a7: boolean = uA2;
const b7: string = uA2;
const c7: number = uA2;
const d7: bigint = uA2;
const e7: symbol = uA2;
const f7: undefined = uA2;
const g7: null = uA2;


function f2(message: unknown) {
    if (typeof message === 'string') {
    return message.length;
}
}
f2(undefined);

let uA1: unknown;
// 错误
// uA1 + 1;
// uA1.foo;
// uA1();


// never
function nF1(): never {
    throw new Error();
}

let xn1: never;
let an1: boolean = xn1;
let bn1: string = xn1;
let cn1: number = xn1;
let dn1: bigint = xn1;
let en1: symbol = xn1;
let fn1: void = xn1;
let gn1: undefined = xn1;
let hn1: null = xn1;

let yn2: never;
// 正确
xn1 = yn2;
// 以下会错误
xn1 = true;
xn1 = 'hi';
xn1 = 3.14;
xn1 = 99999n;
xn1 = Symbol();
xn1 = undefined;
xn1 = null;
xn1 = {};
xn1 = [];
xn1 = function () {};

let xn3: any;
let yn3: never = xn3;
    
// 该函数永远无法执行到末尾，返回值类型为'never'
function throwError(): never {
    throw new Error();
}
// 间接的返回也是never
function fail(): never {
    return throwError();
}
// 死循环 返回never
function infiniteLoop(): never {
    while (true) {
        console.log('endless...');
    }
}

// Exclude<T, U>的源码
type Exclude<T, U> = T extends U ? never : T;
// T是boolean 
type T = Exclude<boolean | string, string>;
// else中是永远不会存在的值，类型就是nerver
function getLength(message: string) {
    if (typeof message === 'string') {
        message; // string
    } else {
        message; // never
    }
}