// tsc编译文件
// tsc xxx.ts 可以手动编译该文件
// tsc xxx.ts -w 可以监控该文件，实时自动编译ts文件，这都是编译器做的事情
// 定义tsconifuig.json 空文件也会有效，只要文件存在，空json执行默认配置，tsc --init 可以自动生成tsconifuig.json
// tsc 可以对这个目录下的所有ts文件进行
// tsc -w 可以对这个目录下的所有ts文件进行监控，然后自动编译所有的变更

let cv1: number = 1
console.log(cv1)

// tsconfig.json的类型是 json with comment 是可以写注释的
