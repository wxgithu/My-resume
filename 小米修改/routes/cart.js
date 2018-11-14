//购物车
const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get("/add",(req,res)=>{
    var lid=req.query.lid;
    var count=req.query.count;
    var uid=req.session.uid;
    //查询数据库中有没有此uid用户的add记录,有则修改数量，没有就插入
    pool.query("select * from xz_shoppingcart_item where user_id=? and product_id=?",[uid,lid],(err,result)=>{
        if(err) console.log(err)
        if(result.length==0){
            pool.query("insert into xz_shoppingcart_item values(null,?,?,?,0)",
                [uid,lid,count],
                (err,result)=>{
                    if(err) console.log(err)
                    res.end();
                }
           )
        }else{
            pool.query("update xz_shoppingcart_item set count=count+? where user_id=? and product_id=?",[count,uid,lid],(err,result)=>{
                if(err) console.log(err)
                res.end();
            })
        }
    })
    
})
//查找购物车
router.get("/items",(req,res)=>{
    var uid=req.session.uid;
    var sql=`SELECT *,(SELECT md FROM xz_laptop_pic WHERE laptop_id=product_id LIMIT 1) AS md FROM xz_shoppingcart_item INNER JOIN xz_laptop ON product_id=lid WHERE user_id=?`;
    pool.query(sql,[uid],(err,result)=>{
        res.writeHead(200);
        if(err) console.log(err)
        res.write(JSON.stringify(result));
        res.end();
    })
    
})
//数据库修改数量
router.get("/update",(req,res)=>{
    var iid=req.query.iid;
    var count=req.query.count;
    if(count>0){
        var sql="update xz_shoppingcart_item set count=? where iid=?";
        var data=[count,iid];
    }else{
        var sql="delete from xz_shoppingcart_item where iid=?";
        var data=[iid];       
    }
    pool.query(sql,data,(err,result)=>{
        if(err) console.log(err)
        res.end();
    })
})
module.exports=router;
