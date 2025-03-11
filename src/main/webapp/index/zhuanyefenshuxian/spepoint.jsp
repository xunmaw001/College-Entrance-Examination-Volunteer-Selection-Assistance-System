<!--
专业分数线
-->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<!DOCTYPE html>
<html lang="en">
<html>
<head>
    <jsp:include page="../common.jsp"></jsp:include>
    <script>
        $(function () {
            var type = getUrlParam("type");
            var time = getUrlParam("time");
            initForm(type,time);
            initList(type,time);
            $('#type').on("click","a",function(){
                $(this).addClass('on');
                $(this).siblings('a').removeClass('on');
            });
            $('#time').on("click","a",function(){
                $(this).addClass('on');
                $(this).siblings('a').removeClass('on');
            });
            indexForm(type,time);
        });
        function initForm(type,time) {
            var typehtm = '';
            var timehtm = '';
            if(time){
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?time='+time+'"  >全部</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=1&time='+time+'" >文科</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=2&time='+time+'" >理科</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=3&time='+time+'" >综合</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=4&time='+time+'" >艺术理</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=5&time='+time+'" >艺术文</a>';
            }else{
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp">全部</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=1" >文科</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=2" >理科</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=3" >综合</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=4" >艺术理</a>';
                typehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type=5" >艺术文</a>';
            }
            if(type){
                timehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?type='+type+'"  >全部</a>';
                timehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?time=2018&type='+type+'" >2018</a>';
                timehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?time=2017&type='+type+'" >2017</a>';
                timehtm+='<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?time=2016&type='+type+'" >2016</a>';
            }else{
                timehtm+= '<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp"  >全部</a>';
                timehtm+= '<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?time=2018" >2018</a>';
                timehtm+= '<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?time=2017" >2017</a>';
                timehtm+= '<a href="<%=basePath%>index/zhuanyefenshuxian/spepoint.jsp?time=2016" >2016</a>';
            }
            $("#type").append(typehtm);
            $("#time").append(timehtm);
        }
        function initList(type,time) {
            $.ajax({
                url: '<%=basePath%>specialy/queryPointList',
                data: {
                    type:type,
                    time:time
                },
                type: 'post',
                dataType: 'json',
                async: true,
                success: function (res){
                    var htm = '';
                    $.each(res,function (index,item) {
                        htm += "<tr class='szw'>";
                        htm += "<td><a a href='<%=basePath%>index/zhuanyechaxun/speListIndex.jsp?id="+item.id+"'>"+item.name+"</a></td>";
                        htm += "<td><a href='<%=basePath%>grade/getIdGrade?s_id="+item.s_id+"'>"+item.s_name+"</a></td>";
                        htm += "<td class='pjf'>--</td>";
                        htm += "<td>"+item.maxpoints+"</td>";
                        htm += "<td>"+item.minpoints+"</td>";
                        htm += "<td>"+item.number+"</td>";
                        htm += "<td>吉林</td>";
                        if(item.type ==1 ){
                            htm += "<td>文科</td>";
                        }else if(item.type ==2 ){
                            htm += "<td>理科</td>";
                        }else if(item.type ==3 ){
                            htm += "<td>综合</td>";
                        }else if(item.type ==4 ){
                            htm += "<td>艺术理</td>";
                        }else if(item.type ==5 ){
                            htm += "<td>艺术文</td>";
                        }
                        htm += "<td>"+item.time+"</td>";
                        if(item.batch ==1 ){
                            htm += "<td>提前批</td>";
                        }else if(item.batch ==2 ){
                            htm += "<td>一批A</td>";
                        }else if(item.batch ==3 ){
                            htm += "<td>一批B</td>";
                        }else if(item.batch ==4 ){
                            htm += "<td>二批A</td>";
                        }else if(item.batch ==5 ){
                            htm += "<td>二批B</td>";
                        }else if(item.batch ==5 ){
                            htm += "<td>三批</td>";
                        }
                    })
                    $(".scores_List table").append(htm);
                }
            });
        }
    </script>
</head>
<body>
<div id="wrapper">
    <div class="menufix">
        <p id ='type'>
            <strong >文理分科：</strong>
        </p>
        <p id="time">
            <strong >招生年份：</strong>
        </p>
    </div>
    <div class="ment_Cto"><a href="javascript:void(0);"
                             onclick="javascript:$('.menufix').toggle();if($(this).html()=='收起选项'){ $(this).html('展开选项');$(this).addClass('down'); }else{ $(this).html('收起选项');$(this).removeClass('down'); }">收起选项</a>
    </div>
    <div class="hr_10"></div>
    <div class="scores_List">
            <table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#E1E1E1">
                <tr>
                    <th scope="col">专业名称</th>
                    <th scope="col">高校名称</th>
                    <th scope="col">平均分</th>
                    <th scope="col">最高分</th>
                    <th scope="col">最低分</th>
                    <th scope="col">录取人数</th>
                    <th scope="col">考生地区</th>
                    <th scope="col">科别</th>
                    <th scope="col">年份</th>
                    <th scope="col">批次</th>
                </tr>

            </table>
        </div>
    <div class="hr_10"></div>
    <div class="hr_10"></div>
    <div class="wrapper wj_bk">
            <p>高考院校库分数线统计时包含了特长生分数，因此最低分和平均分可能与院校公布数据不一致，请以各高校正式公布数据为准。</p>
            <p>如果您发现网页当中的任何错误，欢迎发送邮件(zhangran@100tal.com）与我们联系，我们会及时更正，谢谢! </p>
        </div>
</div>
</body>
</html>
