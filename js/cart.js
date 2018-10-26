//全选checkbox
var chbAll=document.querySelector("table>thead>tr>th:first-child>input");
chbAll.onclick=function(){
    var chbAll=this;
    var chbs=document.querySelectorAll("table>tbody>tr>td:first-child>input")
    for(var chb of chbs){
        chb.checked=chbAll.checked;
    }
}
var tbody=document.querySelector("table>tbody")
tbody.onclick=function(e) {
    if(e.target.type="checkbox"){
        var chb = e.target
        if (chb.checked == false)
            chbAll.checked = false;
        else {
            var unchecked = document.querySelector("table>tbody>tr>td:first-child>input:not(:checked)")
            if (unchecked != null)
                chbAll.checked = false;

            else
                chbAll.checked = true;
        }
    }
}
//加减按钮
// var table=document.getElementById("data");
//     table.onclick=function(e){
//         var btn=e.target;
//         if(btn.nodeName=="BUTTON"){
//         var span=btn.parentNode.children[1];
//         var n=parseInt(span.innerHTML);
//         if(btn.innerHTML==="+")
//             n++;
//         else if(n>1)
//             n--;
//         span.innerHTML=n;
//         var price=parseFloat(btn.parentNode.previousElementSibling.innerHTML.slice(1));
//         var tolPrice=price*n;
//         btn.parentNode.nextElementSibling.innerHTML="￥"+tolPrice.toFixed(2);
//         var lastTd=document.querySelectorAll("table>tbody>tr>td:last-child");
//         var tds=lastTd.previousElementSibling;
//         console.log(lastTd);//<td></td>   <td><span>X</span></td>
//         console.log(tds);//undefined
//         var total=0;
//         for(var td of tds){
//             total+=parseFloat(td.innerHTML.slice(1));
//         }
//         document.querySelector("table>tfoot>tr>td:last-child").previousSibling.innerHTML="￥"+total.toFixed(2);
//     }
// }
//     //删除操作
//   //获取删除按钮
// var dels=document.querySelectorAll("table>tbody>tr>td:last-child>a.btn");
//     console.log(dels);
//     for(var del of dels){
//         var del=this;
//         del.onclick=function(){
//             //获取删除行
//            var tr=del.parentNode.parentNode;
//             //var tr=document.querySelectorAll("table>tbody>tr")
//             //console.log(tr.rowIndex);
//             table.deleteRow(tr.rowIndex);
//         }
//     }
//加减按钮
//加减按钮
$("tbody").on("click","button",function(){
    $btn=$(this);
    var count=0;
    var price=$btn.parent().prev().html().slice(1);
    var n=$btn.parent().find("span").html();
    if($btn.html()=="+")
    n++;
    else if(n>0)
        n--;
    $btn.parent().find("span").html(n);
    count=(price*n).toFixed(2);
    $btn.parent().next().html("￥"+count);
    //总价
    var total=0;
    $tds=$("tbody>tr>td:nth-child(5)");
    for(var td of $tds){
        total+=parseFloat(td.innerText.slice(1));
    }
    $("#price").html("￥"+total.toFixed(2));
})
//删除
var $del=$("table>tbody>tr>td:last-child");
$del.on("click","a",function (e) {
    $btn=$(this);
    e.preventDefault();
    var $tr=$btn.parent().parent();
    if(confirm("是否删除当前商品")){
        $tr.remove();
    }
})

