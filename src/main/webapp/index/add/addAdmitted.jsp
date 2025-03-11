<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<head>
    <jsp:include page="../common.jsp"></jsp:include></head>
</head>

<script>
    $(function () {
        var specialtyid = getUrlParam("id");
        var message = '${message}';
        if(message){
            alert(message);
            location.href='<%=basePath%>index/zhuanyechaxun/speListIndex.jsp?id=${specialtyid}';
        }
        initform(specialtyid);
    });
    function submit() {
        $("#form").submit();
    }
    function initform(specialtyid) {
        $("#specialtyid").val(specialtyid);
    }
</script>
<style>
    input{
        width: 500px;
        height: 30px;
    }
    select{
        width: 500px;
        height: 30px;
    }
</style>
<body>
<div id="wrapper">
    <div class="hr_10"></div>
    <strong style="font-size: 20px">添加专业明细</strong>
    <div class="hr_10"></div>
    <form  id ='form' action="<%=basePath%>admitted/add" method="post">
        <table>
            <tr hidden>
                <td><label></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input id="specialtyid" name="admitted.specialtyid"  />
                </td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >志愿:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select  name="admitted.volunteer"  autocomplete="off" placeholder="请输入志愿">
                    <option value="1">一志愿</option>
                    <option value="2">平行志愿</option>
                    <option value="3">征集志愿</option>
                </select></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >录取最高分:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="admitted.maxpoints" autocomplete="off" placeholder="请输入录取最高分"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >录取最低分:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="admitted.minpoints" autocomplete="off" placeholder="请输入录取最低分"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
            <tr>
                <td><label >录取人数:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="admitted.number" autocomplete="off" placeholder="请输入录取人数"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
            <tr>
                <td><label >录取年份:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select  name="admitted.time"  autocomplete="off" placeholder="请输入学校名称">
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td ></td>
                <td ><input type="submit" style="color: #0a8607;
                background-color: #1e1e1e;width: 60px;float: right" onclick="submit();" /></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
        </table>
    </form>
</div>
</body>
</html>
