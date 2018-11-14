
    $.ajax({
        url:"http://127.0.0.1:3000/users/regist",
        type:"post",
        dataType:"json",
        data:{
            uname:$("input[name=uname]").val(),
            upwd:$("input[name=upwd]").val(),
            phone:$("input[name=phone]").val()
        },
        success: function(res) {
            if(res.ok==1){
            //    location.href="login.html";
            console.log(res)
            }
            
        }
    })

