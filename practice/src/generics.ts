(() => {
    interface IObj {
        id: number;
    }

    interface IObjctCRUD<T extends IObj> {
        add(obj: T): T;
        getObjectById(id: number): T | undefined;
    }

    class User implements IObj {
        id: number;
        name: string;
        age: number;
        constructor(id: number, name: string, age: number) {
            this.id = id;
            this.name = name;
            this.age = age;
        }
    }

    class ObjectCRUD<T extends IObj> implements IObjctCRUD<IObj> {
        data: Array<T> = [];
        add(obj: T) {
            this.data.push(obj);
            return obj;
        }

        getObjectById(id: number): T | undefined {
            return this.data.find(obj => obj.id === id)
        }

    }

    // 应用接口
    let userCRUD = new ObjectCRUD<User>();
    let user = new User(1, '张三', 18);
    userCRUD.add(user);

    userCRUD.add(new User(2, '李四', 20));
    userCRUD.add(new User(3, '王五', 22));

    console.log(userCRUD.getObjectById(1));
    console.log(userCRUD.getObjectById(2));
    console.log(userCRUD.getObjectById(3));

    class Department implements IObj {
        id: number;
        name: string;
        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    let deptCRUD = new ObjectCRUD<Department>();
    deptCRUD.add(new Department(1, '技术部'));
    deptCRUD.add(new Department(2, '销售部'));
    deptCRUD.add(new Department(3, '财务部'));

    console.log(deptCRUD.getObjectById(1));
    console.log(deptCRUD.getObjectById(2));
    console.log(deptCRUD.getObjectById(3));

})();