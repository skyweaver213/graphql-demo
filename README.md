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
mkdir -p /data/db       // 首次创建数据库文件夹，可能需要root权限
./mongod --dbpath=/data/db   // 指定数据库路径启动

```
### 方式二 下载安装包
[http://www.runoob.com/mongodb/mongodb-linux-install.html](http://www.runoob.com/mongodb/mongodb-linux-install.html)

Quick Start
--------------

```js
npm install

npm start
```

> 初始化 mongodb数据 <br/>
> 访问 [http://localhost:3000/initDB](http://localhost:3000/initDB)  会初始化3个Collection<br/>

![avatar](./static/demo0.png)


> 访问 demo  <br/>
> [http://localhost:3000](http://localhost:3000)

![avatar](./static/demo1.png)

Graphql Request Test
--------------

> 访问[http://localhost:3000/graphiql](http://localhost:3000/graphiql) , 如下图 <br/>
输入:

```js
{ proLanguage {
  name
  desc
  uid
  key
} framework {
  name
  desc
} }
```

![avatar](./static/demo4.png)

Variables
------------------
```js
### params
query db($uid: String){
  proLanguage(uid: $uid, key: "jav") {
    _id
    name
    desc
    uid
    key
  }
  framework {
    _id
    name
    desc
  }
}


QUERY VARIABLES
{"uid": "1234"}
```
![avatar](./static/demo3.png)


