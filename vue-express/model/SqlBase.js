
class SqlBase {
  constructor() {
    let mysql = require("mysql"); //调用MySQL模块

    //1，创建一个connection
     this.connection = mysql.createConnection({
        host     : 'cdb-o04jt3c8.cd.tencentcdb.com',  //主机
        user     : 'root',       //MySQL认证用户名
        password : 'ab123456',           //MySQL认证用户密码
        port: '10075',            //端口号
        database:'firstdan'
    });
    //2,连接
    this.connection.connect();
	
  }
}

module.exports = SqlBase;
