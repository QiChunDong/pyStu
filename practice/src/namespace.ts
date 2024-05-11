
// 命名空间，防治代码和变量的污染，类似于闭包
(() => {

})();

// 只要将命名空间放在最外层，就可以使用export导出

namespace Home {
    let str: string = "test";

    export class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        say() {
            console.log(this.name + " " + this.age);
        }
    }

    // 命名空间可以嵌套子空间
    export namespace Child {
        export class ChildPerson {
            name: string;
            age: number;
            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }

            say() {
                console.log(this.name + " " + this.age);
            }
        }
    }
}
// 使用的地方可以直接使用Home.Person
let p = new Home.Person("张三", 20);
p.say();
// 子命名空间
let cp = new Home.Child.ChildPerson("李四", 20);
cp.say();