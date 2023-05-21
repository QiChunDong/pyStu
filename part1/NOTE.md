### 整合webpack的步骤
1. 先创建npm工程 npm init
2. 安装webpack和ts的依赖 npm i -D webpack webpack-cli typescript ts-loader
3. 设置tsconfig
4. 配置webpack.config.js
4. package.json配置启动命令

### 进阶版webpack使用
1. html-webpack-plugin  自动生成html模板，可以指定模板
2. 安装clean-webpack-plugin 每次编译会自动清楚目的目录
3. 安装webpack-dev-server 实现热加载
  - package.json需要加一个start 命令 "dev": "webapck serve --mode development"
  - 需要在webpack.config.js指定mdoe是development

### 进度
p11 看完了 敲到了dev-server