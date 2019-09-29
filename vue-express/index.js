let app=require("express")();
let express=require("express");
var bodyParser = require('body-parser');//解析,用req.body获取post参数

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
 app.use(express.static("public"));
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
 
 let indexControler=require("./controllers/IndexControler");
 let mineControl=require("./controllers/MineControl");
app.post('/login', indexControler.index)
app.get('/hot', mineControl.mine)

// app.post('/',function(req,res){
// 	 console.log( req.body.name);
// 	res.send('haha')
// })



app.listen("8888",()=>{
	console.log("启动")
})