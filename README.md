Graphql Demo
-------------

Use koa + graphql + mongodb
> 首先本地安装mongodb，如果对mongodb不熟悉的同学，可以brew安装mongodb后，再安装mongodb-express可视化管理。

Install Mongodb
---------------

### 方式一
```js
sudo chown -R {$whoami} /usr/local   // {$whoami} 为用户名文件夹名字
brew install mongodb    // 安装mongodb
./mongod --dbpath=/data/db   // 指定数据库路径启动

```
### 方式二 下载安装包
http://www.runoob.com/mongodb/mongodb-linux-install.html

Quick Start
--------------

```js
npm install

npm start
```

> 初始化 mongodb数据 <br/>
> 访问 [http://localhost:3000/initDB](http://localhost:3000/initDB)  会初始化3个Collection<br/>

![avatar](http://thyrsi.com/t6/672/1550504319x2890149584.png)


> 访问 demo  <br/>
> [http://localhost:3000](http://localhost:3000)

![avatar](http://thyrsi.com/t6/672/1550503243x2728278668.png)

Graphql Request Test
--------------

> 访问[http://localhost:3000/graphiql](http://localhost:3000/graphiql) , 如下图 输入 { proLanguage framework }

![avatar](http://thyrsi.com/t6/672/1550503512x2728278668.png)

Variables
------------------


