const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var output={
        maxSize:9
    }
    output.pnum=req.query.pnum;
    var kwords=req.query.kwords;
    var arr=kwords.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like "%${arr[i]}%"`;
    }
    var where=" where "+arr.join(" and ");
    var sql=`SELECT * ,(SELECT md FROM xz_laptop_pic WHERE laptop_id=lid LIMIT 1) AS md FROM xz_laptop ${where}`;
    pool.query(sql,[],(err,result)=>{
        if (err) console.log(err);
        //var result=result.price,title,md
        output.count=result.length;
        output.pageCount=Math.ceil(output.count/output.maxSize)
        output.products=result.slice(output.pnum*9,output.pnum*9+9);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(output));
        res.end();
    })    
})
module.exports=router;