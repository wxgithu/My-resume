var $texName=$("#yhm");
var $texPwd=$("#mima");
function vali(tex,reg) {
    var $div=$(tex.next())
    if(reg.test(tex.val())){
        console.log(tex.val());
        console.log($div)
        $div.addClass("vali_success")
        return true
    }else
    {
        console.log(111)
        $div.addClass("vali_fail");
        return false
    }
}
$texName.on("focus",function () {
    var $tex=$(this)
    var $div=$($tex.next())
    $div.removeClass("vali_info")
})
$texName.on("blur",function () {
    vali($(this),/^\w{1,10}$/);
})
$texPwd.on("focus",function () {
    var $tex=$(this)
    var $div=$($tex.next())
    $div.removeClass("vali_info")
})
$texPwd.on("blur",function () {
    vali($(this),/^\d{6}$/)
})
$("form").on("submit",function(e){
    var rName=vali($texName,/^\w{1,10}$/);
    var rPwd=vali($texPwd,/^\d{6}$/);
    if(!(rName&&rPwd))//如果验证不通过
        e.preventDefault()
})