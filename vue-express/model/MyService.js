let SqlBase=require("./SqlBase")
	 class MyService{
		constructor(arg) {
	
			}
		
		getBase(callback){
			let sqlBase=new SqlBase()
			let sql="select * from hotarea";
			sqlBase.connection.query(sql,(err, result)=> {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
	  
	  callback(result);
	
    })	
		}
		getData(callback){
			this.getBase(callback);
		}
	}
	 module.exports=MyService;