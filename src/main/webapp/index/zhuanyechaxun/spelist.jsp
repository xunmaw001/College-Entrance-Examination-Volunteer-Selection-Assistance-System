<!--
专业搜索
-->
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
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
            var subjCode = getUrlParam("subjCode");
            if(subjCode){
                $('#subject a').removeClass('on');
            }
            querySub(subjCode);
            querySpec(subjCode);
            $('#subject').on("click","a",function(){
                $(this).addClass('on');
                $(this).siblings('a').removeClass('on');
            });
        });
        function querySub(subjCode) {
            $.ajax({
                url: "<%=basePath%>subj",
                type: 'post',
                dataType: 'json',
                async: true,
                success: function (res) {
                    var htm = '';
                    $.each(res, function (index, item) {
                        if(item.code == subjCode){
                            htm += '<a class="on" href="<%=basePath%>index/zhuanyechaxun/spelist.jsp?subjCode='+item.code+'" >' + item.name + '</a>';
                        }else{
                            htm += '<a  href="<%=basePath%>index/zhuanyechaxun/spelist.jsp?subjCode='+item.code+'" >' + item.name + '</a>';
                        }
                    });
                    $('#subject').append(htm);
                }
            });
        }
        function querySpec(subjCode) {
            $.ajax({
                url: "<%=basePath%>specialy/queryList",
                type: 'post',
                dataType: 'json',
                data:{
                    subjCode:subjCode
                },
                async: true,
                success: function (res) {
                    var htm = '';
                    $.each(res, function (index, item) {
                        htm += '<dl><dt><strong class="blue college_Nm">'+item.name+'</strong></dt>'
                        htm += '<dd> <div class="right">';
                        htm += '<p class="topMargin20">';
                        htm += '<a class="btn_gary" href="<%=basePath%>index/zhuanyechaxun/speListIndex.jsp?id='+item.id+' " >进入主页</a></p></div>';
                        htm += '<ul>';
                        if(item.level == 1 ){
                            htm += '<li>学历层次：本科</li>';
                        }else{
                            htm += '<li>学历层次：专科</li>';
                        }
                        htm += '<li>学科：'+item.subjName+'</li>';
                        htm += '<li>专业代码：'+item.zydm+'</li>';
                        htm += '<li>授予学位：——</li>';
                        htm += '<li>相近专业：——</li>';
                        htm += '</ul></dd></dl>';
                    });
                    $('#dataList').append(htm);
                }
            });
        }

    </script>
</head>
<body>

<div id="wrapper">
    <div class="menufix">
        <p id="subject">
            <strong>学科：</strong>
            <a class="on" href="<%=basePath%>index/zhuanyechaxun/spelist.jsp" >全部</a>
        </p>
    </div>
    <div class="ment_Cto"><a href="javascript:void(0);"
                             onclick="
                                 javascript:
                                 $('.menufix').toggle();
                                 if($(this).html()=='收起选项'){
                                     $(this).html('展开选项');$(this).addClass('down');
                                 }else{
                                     $(this).html('收起选项');$(this).removeClass('down');
                                 }">收起选项</a>
    </div>
    <div class="hr_10"></div>
    <div class="scores_List">
        <h3>
            <span><p>专业信息</p></span>
        </h3>
        <div class="scores_List" id="dataList">
            <div class="letter_Box">
                <strong class="ft14 c_blue rightMargin10">操作:</strong>
                <span class="letter_Con">
                    <a href="<%=basePath%>index/add/addSpecialty.jsp">增加专业</a>
                </span>
            </div>


        </div>
    </div>
    <div class="hr_10"></div>
    <div class="hr_10"></div>
    <div class="wrapper wj_bk">
        <p>高考院校库分数线统计时包含了特长生分数，因此最低分和平均分可能与院校公布数据不一致，请以各高校正式公布数据为准。</p>
        <p>如果您发现网页当中的任何错误，欢迎发送邮件,与我们联系，我们会及时更正，谢谢! </p>
    </div>

</div>

</body>
</html>

