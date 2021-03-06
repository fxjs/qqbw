/**
 * Created by livi on 16/4/20.
 */
$(function(){
    $("#saveitem").click(function(){
        var newData={
            id:$("#tid").val(),
            itemname:$(".itemname").val(),
            __CSRF__:G_csrf
        }
        $.ajax({
            url:'/admin/item/save',
            data:newData,
            type:'POST',
            success:function(json){
                if(json.errno===0){
                    alert("保存成功！");
                    window.location.href="/admin/item"
                }
            }
        })
    })

    $('.delete').bind('click', function () {
        var delId = $(this).attr("del-id");
        var delids=[];
        delids.push(delId);
        var r = confirm("确定删除？");
        if (r) {
            $.ajax({
                url: '/admin/item/delsome',
                data: {delarr:delids,__CSRF__: G_csrf},
                type: 'POST',
                success: function (json) {
                    if (json.errno === 0) {
                        alert("删除成功！");
                        window.location.href = "/admin/item";
                    }
                }
            })
        } else {
        }
    })
})

    //批量删除
    var delsome=function(){
        var delids=[];
        $.each($('input[type="checkbox"]','tbody'),function(i,item){
            if($(item).is(':checked')){
                delids.push($(this).val());
            }
        })
        var r = confirm("确定删除？");
        if (r) {
            $.ajax({
                url: '/admin/item/delsome',
                data: {delarr:delids,__CSRF__: G_csrf},
                type: 'POST',
                success: function (json) {
                    if (json.errno === 0) {
                        alert("删除成功！");
                        window.location.href = "/admin/item";
                    }
                }
            })
        } else {
            return false
        }
    }
