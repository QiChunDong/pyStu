"use strict";
// 命名空间，防治代码和变量的污染，类似于闭包
(() => {
})();
// 只要将命名空间放在最外层，就可以使用export导出
var Home;
(function (Home) {
    let str = "test";
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log(this.name + " " + this.age);
        }
    }
    Home.Person = Person;
    // 命名空间可以嵌套子空间
    let Child;
    (function (Child) {
        class ChildPerson {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            say() {
                console.log(this.name + " " + this.age);
            }
        }
        Child.ChildPerson = ChildPerson;
    })(Child = Home.Child || (Home.Child = {}));
})(Home || (Home = {}));
// 使用的地方可以直接使用Home.Person
let p = new Home.Person("张三", 20);
p.say();
// 子命名空间
let cp = new Home.Child.ChildPerson("李四", 20);
cp.say();
