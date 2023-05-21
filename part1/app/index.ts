// @ts-ignore
import app1 from "./app1.ts"

console.log(111 * 222)

let app = document.getElementById("app")
if (app != null) {
    app.innerHTML = app.innerHTML + "33333333333333333333333333333"
    console.log(app.innerHTML + "2222222222222222222222222")
}

console.log(Promise)

const a1 = {name: "qcd", age: 19}
a1.name = "qqq"
a1.age = 16

console.log(a1, 'a1')


console.log(app1)