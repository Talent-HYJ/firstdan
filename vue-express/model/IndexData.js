let SqlBase = require("./SqlBase")
	class IndexData {
		constructor(req, res) {
			this.req = req;
			this.res = res;
		}
		getBase(callback) {
			// console.log(this.req.body.name)
			let indexcontent = {};
			let sqlBase = new SqlBase()

			if (this.req.body.register == 1) {
				let sql =
					`insert into users (name,nickname,phone,password,idcard) 
				values("${this.req.body.name}","${this.req.body.nickname}",${this.req.body.phone},${this.req.body.password},
				${this.req.body.idcard})`;
				sqlBase.connection.query(sql, (err, result) => {
					if (err) {
						console.log("[INSERT ERROR] - ", err.message);
						console.log("没有该数据");
						return -1;

					} else {
						console.log("查询成功")
						return callback(result);
					}

					// callback(result)
				})

			} else {
				let sql = `select * from users where phone=${this.req.body.name}`;
				sqlBase.connection.query(sql, (err, result) => {
					if (err) {
						console.log("[INSERT ERROR] - ", err.message);
						console.log("没有该数据");
						return -1;

					} else {
						console.log("查询成功")
						return callback(result);
					}

					// callback(result)
				})
			}



			// callback(result)

			// let sql=`select * from users where phone=${this.req.body.name}`;


			// sqlBase.connection.query(this.sql,(err, result)=> {
			//       if (err) {
			//         console.log("[INSERT ERROR] - ", err.message);
			// 		console.log("没有该数据");
			// 		return -1;

			//       }
			// 	  else{
			// 		  console.log("查询成功")
			// 		  return callback(result);
			// 	  }

			// 	  // callback(result)
			//     })



		}
		getData(callback) {

			this.getBase(callback)
		}
	}
	module.exports = IndexData;
