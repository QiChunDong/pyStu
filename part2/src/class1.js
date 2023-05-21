var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persion = /** @class */ (function () {
    function Persion() {
        this.name = "zhangsan";
        this.age = 18;
        this.score = 90;
    }
    Persion.prototype.say = function () {
        console.log("hello");
    };
    Persion.sayee = function () {
        console.log("hello ee");
    };
    Persion.stage = 2;
    Persion.toys = 12;
    return Persion;
}());
var p = new Persion();
console.log("name", p.name);
console.log("age", p.age);
console.log("stage", Persion.stage);
Persion.stage = 20;
console.log("stage1", Persion.stage);
p.say();
p.say();
Persion.sayee();
/**
 * 父类
 */
var parentC = /** @class */ (function () {
    function parentC(name) {
        this.name = name;
    }
    parentC.prototype.syaHello = function () {
        console.log("i say");
    };
    return parentC;
}());
/**
 * 子类继承父类
 */
var childC1 = /** @class */ (function (_super) {
    __extends(childC1, _super);
    function childC1(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    childC1.prototype.syaHello = function () {
        console.log("i say i am " + this.name);
        console.log("i say i am " + this.age + " years old");
    };
    return childC1;
}(parentC));
var p1 = new parentC("qcd");
p1.syaHello();
var c1 = new childC1("qcd111", 18);
c1.syaHello();
/**
 * 抽象类
 */
var abP1 = /** @class */ (function () {
    function abP1(name) {
        this.name = name;
    }
    abP1.prototype.sayHello = function () {
        console.log("i am abp1 " + this.name);
    };
    return abP1;
}());
var abC1 = /** @class */ (function (_super) {
    __extends(abC1, _super);
    function abC1(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    abC1.prototype.sayHello = function () {
        console.log("i am abc1 " + this.name);
        console.log("i am " + this.age + " years old");
    };
    abC1.prototype.sayYes = function () {
        console.log("yes yes yes");
    };
    return abC1;
}(abP1));
// 抽象类无法创建实例，一下代码会报错
// let abp1Ins = new abP1("job")
var abc1Ins = new abC1("john", 78);
console.log(abc1Ins.age, '11111111');
abc1Ins.sayHello();
abc1Ins.sayYes();
var api1Impl = /** @class */ (function () {
    function api1Impl(name, age) {
        this.age = age;
        this.name = name;
    }
    api1Impl.prototype.sayHello = function () {
        console.log("hello i am " + this.name);
    };
    api1Impl.prototype.sayYes = function () {
        console.log("yes i am " + this.age + " yeas old");
    };
    return api1Impl;
}());
var api1ImplIns = new api1Impl("jeff", 67);
api1ImplIns.sayHello();
api1ImplIns.sayYes();
/**
 * 关于类的属性封装
 * 两种方式
 */
var C2 = /** @class */ (function () {
    function C2(name, age) {
        this.name = name;
        this.age = age;
    }
    C2.prototype.getName = function () {
        return this.name;
    };
    C2.prototype.setName = function (name) {
        this.name = name;
    };
    C2.prototype.getAge = function () {
        return this.age;
    };
    C2.prototype.setAge = function (age) {
        this.age = age;
    };
    return C2;
}());
var c21 = new C2("qcd", 1);
// private 修饰了之后，不能直接访问了
// console.log(c21.name)
console.log(c21.getName(), "i am c21");
c21.setName("qcd1");
console.log(c21.getName(), "i am c21");
/**
 * ts 可以使用es6的proxy格式
 * 定义get和set来封装属性
 */
var C3 = /** @class */ (function () {
    function C3(name) {
        this._name = name;
    }
    Object.defineProperty(C3.prototype, "name", {
        // 此处的name最好与_name区别开来，否则会报错
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return C3;
}());
var c31 = new C3("qcd");
console.log(c31.name, "i am c31");
c31.name = "qcd1";
console.log(c31.name, "i am c31");
/**
 * ts 支持java中的所有的修饰符
 * private public protected
 */
var C4P = /** @class */ (function () {
    function C4P(name, fName) {
        this.name = name;
    }
    return C4P;
}());
var C4C = /** @class */ (function (_super) {
    __extends(C4C, _super);
    function C4C(name, fName, age) {
        var _this = _super.call(this, name, fName) || this;
        _this.age = age;
        return _this;
    }
    Object.defineProperty(C4C.prototype, "fNameVar", {
        set: function (fname) {
            // 由于fname是private 所以C4C无权访问,下述的语句皆报错
            // this.fName = fname
            // super.fName = fname
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(C4C.prototype, "nameVar", {
        set: function (name) {
            // name 是protected 所以C4C是可以访问的
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return C4C;
}(C4P));
var c4c1 = new C4C("qcd", "qi", 78);
console.log(c4c1.age);
/**
 * ts 就像一个后台静态语言一样提供了一套泛型系统
 * 和java一样，通过<xx>定义泛型
 */
//               定义     用  用
function helloYou(hel) {
    return hel;
}
console.log(helloYou(1234));
// 可以不指定泛型，ts会进行类型推断
console.log(helloYou("wwwwww"));
// ts的泛型竟然还支持多个泛型
function helloMe(name, age) {
    console.log("<T, K>", name, age);
    return age;
}
helloMe("qcd", "13");
helloMe("qcdq", 56);
/**
 * 可以指定某个类型是实现了指定接口的类
 * @param a
 */
function hi(a) {
    return a.length;
}
/**
 * 类Hic 实现了api2
 */
var HiC = /** @class */ (function () {
    function HiC() {
    }
    return HiC;
}());
// 创建HIC的实例
var hic = new HiC();
hic.length = 1234;
// 此时就可以将hic传入hi函数
console.log(hi(hic), 'hic');
/**
 * 类也可以指定泛型  类似于java
 * 不 一摸一样
 */
var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
    }
    return MyClass;
}());
var mc = new MyClass("json");
console.log(typeof mc.name);
var mc1 = new MyClass(1234565);
console.log(typeof mc1.name);
