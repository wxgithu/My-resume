new Vue({
    el:"#plist",
    data:{
        kwords,
        pnum,   
    },
    mounted(){
    if(location.search.indexOf("kwords=")!=-1)
    this.kwords=decodeURI(location.search.split("=")[1]); 
    this.pnum=1;
    var res=axios.get(
    "http://localhost:3000/products",
    {params:{
        kwords:this.kwords,
        pnum:this.pnum}
    }).then(function(res){
        this.res=res.data;
    })
    }
})

       
    //    function loadPage(num=0){
    //     pnum=num;       
        
            // success: function(output) {
            //     var { products,pageCount}=output;
            //     var html="";
            //     for(var p of products){
            //         var {lid,title,price,md}=p;
            //html+=`<div class="col-md-4 p-1">
            //         <div class="card mb-4 box-shadow pr-2 pl-2">
            //         <a href="product_details.html?lid=${lid}">
            //             <img class="card-img-top" src="${md}">
            //         </a>
            //         <div class="card-body p-0">
            //             <h5 class="text-primary">￥${price.toFixed(2)}</h5>
            //             <p class="card-text">
            //             <a href="product_details.html?lid=${lid}" class="text-muted small" title="${title}">${title}</a>
            //             </p>
            //             <div class="d-flex justify-content-between align-items-center p-2 pt-0">
            //             <button class="btn btn-outline-secondary p-0 border-0" type="button">-</button>
            //             <input type="text" class="form-control p-1" value="1">
            //             <button class="btn btn-outline-secondary p-0 border-0" type="button">+</button>
            //             <a class="btn btn-primary float-right ml-1 pl-1 pr-1" href="#" data-lid=${lid}>加入购物车</a>
            //             </div>
            //         </div>
            //         </div>
            //     </div>`
            //     }    

            //     $plist.html(html);
    //             var html="";
    //             for(var i=1;i<=pageCount;i++){
    //                 html+=`<li class="page-item ${i==pnum+1?'active':''}"><a class="page-link bg-transparent" href="#">${i}</a></li>`
    //             } 
    //             $ul.children(":not(:first-child):not(:last-child)").remove();       
    //             $ul.children().first().after(html);               
    //             if(pnum==0){
    //                 $ul.children().first().addClass("disabled");
    //             }
    //             else
    //             $ul.children().first().removeClass("disabled");
    //             if(pnum==pageCount-1){
    //                 $ul.children().last().addClass("disabled");
    //             }
    //             else
    //             $ul.children().last().removeClass("disabled");
    //         }
        
    // }
    //     loadPage();       
    //     //只在页面首次加载时绑定一次
    //     var $plist=$("#plist");
    //     var $ul=$plist.next().find("nav>ul");
    //     $ul.on("click","a",function(e){
    //         var $a=$(this);
    //         e.preventDefault();
    //         if(!$a.parent().is(".disabled,.active"))
    //         if($a.parent().is(":first-child"))
    //         var num=pnum-1;
    //         else if($a.parent().is(":last-child"))
    //         var num=pnum+1;
    //         else
    //         var num=$a.html()-1;
    //         loadPage(num);//重新加载页面内容
    //     })
    //     $plist.on("click","button,a.btn",function(e){
    //         var $btn=$(this)
    //         e.preventDefault();
    //         if($btn.is("button")){
    //            var $input=$btn.parent().find("input");
    //         var n=$input.val();
    //         if($btn.html()=="+"){
    //             n++;
    //         }
    //         else if(n>1){
    //            n--; 
    //         } 
    //         $input.val(n); 
    //         }else{
    //             (async function(){
    //                 var res=await $.ajax({
    //                     url:"http://localhost:3000/users/islogin",
    //                     type:"get",
    //                     dataType:"json",       
    //                 })
    //                 if(res.ok==1){
    //                     var lid=$btn.attr("data-lid");
    //                     var count=$btn.siblings("input").val();
    //                     await $.ajax({
    //                             url:"http://localhost:3000/cart/add",
    //                             type:"get",
    //                             data:{lid,count}
    //                             })
    //                     $btn.siblings("input").val(1);
    //                     alert("添加成功")
    //                 }
    //                 else{
    //                         alert("请先登陆")
    //                     } 
    //             })()
                
    //         }
            
    //     });
    //     async function loadCart(){
    //         var res=await $.ajax({
    //             url:"http://localhost:3000/users/islogin",
    //             type:"get",
    //             dataType:"json"
    //         })
    //         if(res.ok==0){
    //             alert("暂未登陆,无法访问购物车");
    //         }else{
    //             var res=await $.ajax({
    //                 url:"http://localhost:3000/cart/items",
    //                 type:"get",
    //                 dataType:"json"
    //             })
    //             var html="",total=0;
                
    //             for(var item of res){
    //                 var {title,count,price,iid}=item;
    //                 total+=price*count;
    //                 html+=`<li class="p-0 list-group-item d-flex justify-content-between lh-condensed">
    //                 <div class="input-group input-group-sm mt-1 mb-1">
    //                   <div class="input-group-prepend">
    //                     <span class="input-group-text text-truncate bg-white p-1 border-0 d-inline-block" title="${title}">${title}</span>
    //                     <button class="btn btn-outline-secondary p-0 border-0" type="button" data-iid=${iid}>-</button>
    //                   </div>
    //                   <input type="text" class="form-control p-1" aria-label="Small" value="${count}" aria-describedby="inputGroup-sizing-sm">
    //                   <div class="input-group-append">
    //                     <button class="btn btn-outline-secondary p-0 border-0" type="button" data-iid=${iid}>+</button>
    //                     <span class="input-group-text bg-white border-0 p-0 pl-1">¥${(price*count).toFixed(2)}</span>
    //                   </div>
    //                 </div>
    //               </li>`
    //             }
    //            $ulCart.children(":gt(0):not(:last)")
    //            .remove();
    //             $ulCart.find("li:last-child>h4")
    //             .html(`￥${total.toFixed(2)}`)
    //             .parent()
    //             .prev()
    //             .after(html);
    //         }
    //     }
    //     loadCart();

    //     var $ulCart=$("#cart");
    //     $ulCart.on("click","button",function(){
    //         var $btn=$(this);
    //         (async function(){
    //             var iid=$btn.attr("data-iid");
    //             var count=$btn.parent().siblings("input").val();
    //             if($btn.html()=="+"){
    //                 count++;   
    //             }       
    //             else {
    //                 count--;
    //             }
    //             if(count==0)
    //                 if(!confirm(`是否删除该商品`))
    //                 return;            
    //             await $.ajax({
    //                     url:"http://localhost:3000/cart/update",
    //                     type:"get",
    //                     data:{count,iid}
    //                     })          
    //                     loadCart();
    //         })()  
    //     })   
    
