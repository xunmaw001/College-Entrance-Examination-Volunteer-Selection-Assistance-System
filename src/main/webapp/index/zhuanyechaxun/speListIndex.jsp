<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %><%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <jsp:include page="../common.jsp"></jsp:include>
    <script>

        $(function () {
            var id = getUrlParam("id");

            querySub();
            querySpeById(id);
        });
        function querySpeById(id) {
            $.ajax({
                url: "<%=basePath%>specialy/queryById",
                data:{id:id},
                type: 'post',
                dataType: 'json',
                async: true,
                success: function (res) {
                    var htm = '';
                    $('#name').text(res.name);
                    $('#zgxk').text(res.zgxk);
                    $('#zxkc').text(res.zxkc);
                    $('#pymb').text(res.pymb);
                    $('#pyyq').text(res.pyyq);
                    $('#jyfx').text(res.jyfx);
                     htm += '<strong class="ft14 c_blue rightMargin10">操作:</strong>';
                     htm += '<span class="letter_Con">';
                     htm += '<a href="<%=basePath%>index/add/addAdmitted.jsp?id='+id+'">增加学校分数</a></span>';
                    $("#bot").append(htm);
                }
            });
        }
        function querySub() {
            $.ajax({
                url: "<%=basePath%>subj",
                type: 'post',
                dataType: 'json',
                async: true,
                success: function (res) {
                    var htm = '';
                    $.each(res, function (index, item) {
                        htm += '<a href="javascript:void(0);" code="' + item.code + '" >' + item.name + '</a>';
                    });
                    $('#subject').append(htm);
                }
            });
        }
    </script>
</head>
<body>

<div class="wrap">
    <div class="menufix" style="display:none;" id="subject">
        <p>
            <strong>学科：</strong>
            <a class="on" href="javascript:void(0);">全部</a>
        </p>
    </div>
    <div class="ment_Cto"><a href="javascript:void(0);" class="down" onclick="javascript:$('.menufix').toggle();if($(this).html()=='收起选项'){ $(this).html('展开选项');$(this).addClass('down'); }else{ $(this).html('收起选项');$(this).removeClass('down'); }">展开选项</a></div>
    <div class="hr_10"></div>
    <div class="bg_sez">
        <h2 id = 'name'></h2>
        <div class="hr_10"></div>
        <div class="xuen_kc bk fll">
            <p><strong>主干学科：</strong><span id="zgxk"></span></p>
            <p><strong>主要课程：</strong><span id="zxkc">分析学、代数学、几何学、概率论、物理学、数学模型、数学实验、计算机基础、数值方法、数学史等，以及根据应用方向选择的基本课程。&nbsp;</span></p>
        </div>
    </div>
    <div class="hr_10"></div>


</div>
<div id="wrapper">
    <div id="bot">

    </div>
    <div class="cont_l gsgl">
        <div class="hr_10"></div>
        <ul class="tab_tit clearfix">
            <li>专业概况</li>
        </ul>
        <div class="tab_con">
                <p class="zygk bk">
                    <strong>培养目标</strong> <br />
                    <font id="pymb">

                        </font>
                </p>
                <p class="zygk bk">
                    <strong>培养要求</strong> <br />
                    <font id="pyyq">
                    </font>
                </p>
                <p class="zygk bk" id="d_bk">
                    <strong>就业方向</strong> <br />
                    <font id="jyfx" >

                    </font>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
