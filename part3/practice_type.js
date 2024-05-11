// number
// 二进制数
var bin = 10;
// 八进制数
var oct = 484;
// 十进制数
var integer = 10;
var float = 3.14;
// 十六进制数
var hex = 0xffffff;
console.table({ bin: bin, oct: oct, integer: integer, float: float, hex: hex });
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
var key = Symbol();
// Well-Known Symbol
var symbolHasInstance = Symbol.hasInstance;
console.table({ key: key, symbolHasInstance: symbolHasInstance });
var x = Symbol();
var y = Symbol();
console.table({ x: x, y: y });
var a = Symbol();
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var a3 = Symbol();
var b3 = Symbol('desc');
// const c3: unique symbol = a;
// ~
// 错误：a的类型与c的类型不兼容
// const d: unique symbol = b3;
// ~
// 错误：b的类型与d的类型不兼容
console.log(b3, "b3");
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction, 'd');
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 10] = "Left";
    Direction1[Direction1["Right"] = 11] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1, 'd1');
// 可以直接赋值给number
var direction = Direction.Up;
// const d4: Direction = 10
// 常量枚举，初始值A是数值，自增
var Foo1;
(function (Foo1) {
    Foo1[Foo1["A"] = 0] = "A";
    Foo1[Foo1["B"] = 1] = "B";
})(Foo1 || (Foo1 = {}));
// 不可以是字符串
// 不然后面的不指定值会报错
var Bar1;
(function (Bar1) {
    Bar1["C"] = "C";
    // D, // 编译错误
})(Bar1 || (Bar1 = {}));
// 一下也都是常量枚举
var Foo2;
(function (Foo2) {
    Foo2[Foo2["A"] = 0] = "A";
    Foo2["B"] = "B";
    Foo2["C"] = "C";
    Foo2[Foo2["D"] = 0] = "D";
})(Foo2 || (Foo2 = {}));
var Bar2;
(function (Bar2) {
    Bar2[Bar2["A"] = -1] = "A";
    Bar2[Bar2["B"] = 3] = "B";
    Bar2[Bar2["C"] = 6] = "C";
})(Bar2 || (Bar2 = {}));
// 字面量枚举值，常量的子集
var Foo3;
(function (Foo3) {
    Foo3[Foo3["A"] = 0] = "A";
    Foo3[Foo3["B"] = 1] = "B";
    Foo3[Foo3["C"] = -3] = "C";
    Foo3["D"] = "foo";
    Foo3["E"] = "bar";
    Foo3[Foo3["F"] = 0] = "F";
})(Foo3 || (Foo3 = {}));
// 联合枚举类型 Direction4等同于UnionDirectionType4
var Direction4;
(function (Direction4) {
    Direction4[Direction4["Up"] = 0] = "Up";
    Direction4[Direction4["Down"] = 1] = "Down";
    Direction4[Direction4["Left"] = 2] = "Left";
    Direction4[Direction4["Right"] = 3] = "Right";
})(Direction4 || (Direction4 = {}));
var Direction5;
(function (Direction5) {
    Direction5[Direction5["Up"] = 0] = "Up";
    Direction5[Direction5["Down"] = 1] = "Down";
    Direction5[Direction5["Left"] = 2] = "Left";
    Direction5[Direction5["Right"] = 3] = "Right";
})(Direction5 || (Direction5 = {}));
function fn(direction) {
    if (direction === Direction5.Up) {
        // Direction.Up
    }
    else if (direction === Direction5.Down) {
        // Direction.Down
    }
    else if (direction === Direction5.Left) {
        // Direction.Left
    }
    else {
        // 能够分析出此处的direction为Direction.Right
        direction;
        console.log(direction, "d5 else");
    }
}
var dt5 = Direction5.Right;
console.log(dt5, "dt5");
fn(dt5);
var dt6 = [
    0 /* Directions6.Up */,
    1 /* Directions6.Down */,
    2 /* Directions6.Left */,
    3 /* Directions6.Right */,
];
console.log(dt6, 'dt6');
var starA1 = 'hello';
var starA2 = "world";
var starA3;
starA3 = starA1;
starA3 = starA2;
// 顶端类型
var ddA1;
ddA1 = true;
ddA1 = 'hi';
ddA1 = 3.14;
// ddA1 = 99999n;
ddA1 = Symbol();
ddA1 = undefined;
ddA1 = null;
ddA1 = {};
ddA1 = [];
ddA1 = function () { };
var a4 = ddA1;
var b4 = ddA1;
var c4 = ddA1;
var d4 = ddA1;
var e4 = ddA1;
var f4 = ddA1;
var g4 = ddA1;
var h4 = ddA1;
var a5 = 0;
a5.length;
a5();
a5[0];
// unknown
var uA2;
// 正确
var a6 = uA2;
var b6 = uA2;
// 以下均错误
var a7 = uA2;
var b7 = uA2;
var c7 = uA2;
var d7 = uA2;
var e7 = uA2;
var f7 = uA2;
var g7 = uA2;
function f2(message) {
    if (typeof message === 'string') {
        return message.length;
    }
}
f2(undefined);
var uA1;
// 错误
// uA1 + 1;
// uA1.foo;
// uA1();
// never
function nF1() {
    throw new Error();
}
var xn1;
var an1 = xn1;
var bn1 = xn1;
var cn1 = xn1;
var dn1 = xn1;
var en1 = xn1;
var fn1 = xn1;
var gn1 = xn1;
var hn1 = xn1;
var yn2;
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
xn1 = function () { };
var xn3;
var yn3 = xn3;
// 该函数永远无法执行到末尾，返回值类型为'never'
function throwError() {
    throw new Error();
}
// 间接的返回也是never
function fail() {
    return throwError();
}
// 死循环 返回never
function infiniteLoop() {
    while (true) {
        console.log('endless...');
    }
}
// else中是永远不会存在的值，类型就是nerver
function getLength(message) {
    if (typeof message === 'string') {
        message; // string
    }
    else {
        message; // never
    }
}
