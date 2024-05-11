"use strict";
(() => {
    class User {
        constructor(id, name, age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }
    }
    class ObjectCRUD {
        constructor() {
            this.data = [];
        }
        add(obj) {
            this.data.push(obj);
            return obj;
        }
        getObjectById(id) {
            return this.data.find(obj => obj.id === id);
        }
    }
    // 应用接口
    let userCRUD = new ObjectCRUD();
    let user = new User(1, '张三', 18);
    userCRUD.add(user);
    userCRUD.add(new User(2, '李四', 20));
    userCRUD.add(new User(3, '王五', 22));
    console.log(userCRUD.getObjectById(1));
    console.log(userCRUD.getObjectById(2));
    console.log(userCRUD.getObjectById(3));
    class Department {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
    let deptCRUD = new ObjectCRUD();
    deptCRUD.add(new Department(1, '技术部'));
    deptCRUD.add(new Department(2, '销售部'));
    deptCRUD.add(new Department(3, '财务部'));
    console.log(deptCRUD.getObjectById(1));
    console.log(deptCRUD.getObjectById(2));
    console.log(deptCRUD.getObjectById(3));
})();
