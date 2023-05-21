function hello (persion: string) {
    return "hello " + persion
}

let user = "Qi"

console.log(hello(user))


let a:number;
a = 1;
// 报错  不能换类型
// a = "1111";
let a1 = 1;
// 报错  可以自己推测类型，这时候就不能改变了
// a1 = "1";

// 直接赋值
let b :string = "11111";


// 函数。js中的函数是不考虑参数的类型和个数的
function t1 (a: number, b: number) {
    return a + b
}
// 运算结果是3
console.log(t1(1, 2))
// 运算结果是 12 也会提示报错
// console.log(t1(1, '2'))
