let IndexData = require("../model/IndexData");
class IndexService {
  constructor(req,res) {
	  this.req=req;
	  this.res=res;
  }
  getData(callback) {
   
  let indexData=new IndexData(this.req,this.res);
  
   
     indexData.getData(callback)
      
   
  }
}

module.exports = IndexService;