$(function(){
    //1.ajax请求header.html片段
    $.ajax({
        url:"http://localhost:3000/header.html",
        type:"get",
        success: function(res) {
            $("#header").replaceWith(res);
        }
    })
    //2.动态创建link引用header.css
    $("<link rel=stylesheet href=../CSS/header.css>").appendTo("head")
    //1.ajax请求footer.html片段
    $.ajax({
        url:"http://localhost:3000/footer.html",
        type:"get",
        success: function(res) {
            $("#footer").replaceWith(res);
        }
    })
    //2.动态创建link引用footer.css
    $("<link rel=stylesheet href=../CSS/footer.css>").appendTo("head")
})