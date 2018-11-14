const express=require("express");
const router=express.Router();
const pool=require("../pool");
// 注册
router.post("/regist",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var phone=req.body.phone;
  pool.query("select * from xm_user where uname=?",[uname],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.writeHead(200); 
      res.write(JSON.stringify({
        ok:1,
        msg:"user regist success"
      }))
      // pool.query("insert into xz_user values(?,?,?)"),[uname,upwd,phone],(err,result)=>{
      //   if(err) throw err;
      //   console.log(result)
      // }
    }else{
      res.write(JSON.stringify({
        ok:0,
        msg:"user regist fail！"
      }))   
    }
    res.end();
  })
})
router.post("/signin",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
  pool.query(
    "select * from xz_user where uname=? and upwd=?",
    [uname,upwd],
    (err,result)=>{
      if(err) console.log(err);
      if(result.length>0){
        res.writeHead(200);       
        var user=result[0]
        req.session["uid"]=user["uid"];
        res.write(JSON.stringify({
          ok:1,
          msg:"user login success"
        }))
      }else{
        res.write(JSON.stringify({
          ok:0,
          msg:"user login fail！"
        }))
      }
      res.end();
    }
  )
})
router.get("/islogin",(req,res)=>{
    res.writeHead(200);
    if(req.session.uid===undefined){
        res.write(JSON.stringify({
            ok:0,
            msg:"user notlogin"
          }))
          res.end();
    }else{
      var uid=req.session.uid;
      var sql="select * from xz_user where uid=?";
      pool.query(sql,[uid],(err,result)=>{
        if(err) console.log(err)
        var user=result[0];
        res.write(JSON.stringify({
          ok:1,
          uname:user.uname
        }))  
        res.end()
      })
              
    }   
})
router.get("/signout",(req,res)=>{
    req.session["uid"]=undefined;
    res.write(JSON.stringify({
      ok:1,
      msg:"user already signout"
    }))
    res.end();
    })
module.exports=router;