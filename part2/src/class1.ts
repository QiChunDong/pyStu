class Persion {

    name: string = "zhangsan"
    age: number = 18

    static stage: number = 2

    readonly score: number = 90

    static readonly toys: number = 12

    say() {
        console.log("hello")
    }

    static sayee() {
        console.log("hello ee")
    }


}

let p = new Persion()

console.log("name", p.name)
console.log("age", p.age)
console.log("stage", Persion.stage)
Persion.stage = 20
console.log("stage1", Persion.stage)
p.say()
p.say()
Persion.sayee()

/**
 * 父类
 */
class parentC {
    name: string;

    constructor (name: string) {
        this.name = name
    }

    syaHello() {
        console.log("i say")
    }
}

/**
 * 子类继承父类
 */
class childC1 extends parentC {
    age: number;

    constructor (name: string, age: number) {
        super(name)
        this.age = age
    }

    syaHello(): void {
        console.log("i say i am " + this.name)
        
        console.log("i say i am " + this.age + " years old")
    }
}

let p1 = new parentC("qcd");
p1. syaHello()

let c1 = new childC1("qcd111", 18)
c1.syaHello()

/**
 * 抽象类
 */
abstract class abP1{
    name: string;

    constructor (name: string) {
        this.name = name
    }

    abstract sayYes(): void;

    sayHello() {
        console.log("i am abp1 " + this.name)
    }
}

class abC1 extends abP1{
    age: number;

    constructor(name: string, age: number) {
        super(name)
        this.age = age
    }

    sayHello(): void {
        console.log("i am abc1 " + this.name)
        console.log("i am " + this.age + " years old")
    }

    sayYes(): void {
        console.log("yes yes yes")
    }
    
}

// 抽象类无法创建实例，一下代码会报错
// let abp1Ins = new abP1("job")

let abc1Ins = new abC1("john", 78)
console.log(abc1Ins.age, '11111111')
abc1Ins.sayHello()
abc1Ins.sayYes()


/**
 * 定义接口
 */
interface api1 {
    // 接口内的变量和方法不允许赋值
    // name: string = "1";
    name: string;

    sayHello(): void;
}
// 需要特殊说明的一点是
// 可以定义重名的接口
// 重名的接口定义会合并到一起
interface api1 {
    age: number;

    sayYes(): void;
}

class api1Impl implements api1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
    sayHello(): void {
        console.log("hello i am " + this.name)
    }
    sayYes(): void {
        console.log("yes i am " + this.age + " yeas old")
    }

}

let api1ImplIns = new api1Impl("jeff", 67)
api1ImplIns.sayHello()
api1ImplIns.sayYes()

/**
 * 关于类的属性封装
 * 两种方式
 */
class C2{
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    getName(): string {
        return this.name
    }
    setName(name: string) {
        this.name = name
    }
    getAge(): number {
        return this.age
    }
    setAge(age: number) {
        this.age = age
    }
}

let c21 = new C2("qcd", 1);
// private 修饰了之后，不能直接访问了
// console.log(c21.name)
console.log(c21.getName(), "i am c21")
c21.setName("qcd1")
console.log(c21.getName(), "i am c21")

/**
 * ts 可以使用es6的proxy格式
 * 定义get和set来封装属性
 */
class C3 {
    private _name: string

    constructor(name: string) {
        this._name = name
    }

    // 此处的name最好与_name区别开来，否则会报错
    get name(): string {
        return this._name
    }
    set name(name: string) {
        this._name = name
    }
}

let c31 = new C3("qcd")
console.log(c31.name, "i am c31")
c31.name = "qcd1"
console.log(c31.name, "i am c31")

/**
 * ts 支持java中的所有的修饰符
 * private public protected
 */
class C4P {
    protected name: string
    private fName: string

    constructor(name: string, fName: string) {
        this.name = name
    }
}

class C4C extends C4P {
    public age: number

    constructor(name: string, fName: string, age: number) {
        super(name, fName)
        this.age = age
    }

    set fNameVar(fname: string) {
        // 由于fname是private 所以C4C无权访问,下述的语句皆报错
        // this.fName = fname
        // super.fName = fname
    }

    set nameVar(name: string) {
        // name 是protected 所以C4C是可以访问的
        this.name = name
    }
}
let c4c1 = new C4C("qcd", "qi", 78)
console.log(c4c1.age)

/**
 * ts 就像一个后台静态语言一样提供了一套泛型系统
 * 和java一样，通过<xx>定义泛型
 */
//               定义     用  用
function helloYou<K>(hel: K): K {
    return hel
}
console.log(helloYou<number>(1234))
// 可以不指定泛型，ts会进行类型推断
console.log(helloYou("wwwwww"))
// ts的泛型竟然还支持多个泛型
function helloMe<T, K>(name: T, age: K): K{
    console.log("<T, K>", name, age)
    return age
}
helloMe("qcd", "13")
helloMe("qcdq", 56)


/**
 *
 */
interface api2 {
    length: number
}

/**
 * 可以指定某个类型是实现了指定接口的类
 * @param a
 */
function hi<T extends api2>(a: T): number {
    return a.length
}
/**
 * 类Hic 实现了api2
 */
class HiC implements api2 {
    length: number;

}
// 创建HIC的实例
let hic = new HiC()
hic.length = 1234
// 此时就可以将hic传入hi函数
console.log(hi<HiC>(hic), 'hic')

/**
 * 类也可以指定泛型  类似于java
 * 不 一摸一样
 */
class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name
    }
}


const mc = new MyClass<string>("json")
console.log(typeof mc.name)

const mc1 = new MyClass<number>(1234565)
console.log(typeof mc1.name)

