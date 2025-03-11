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
        var s_id = getUrlParam("s_id");
        var message = '${message}';
        if(message){
            alert(message);
            location.href='<%=basePath%>grade/getIdGrade?s_id=${s_id}';
        }
        initform(s_id);
    });
    function submit() {
        $("#form").submit();
    }
    function initform(s_id) {
        $("#s_id").val(s_id)
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
    <strong style="font-size: 20px">添加学校明细</strong>
    <div class="hr_10"></div>
    <form  id ='form' action="<%=basePath%>grade/add" method="post">
        <table>
            <tr hidden>
                <td><label>学校名称:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input id="s_id" name="grade.s_id"  autocomplete="off" placeholder="请输入学校名称"/>
                </td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >年份:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select  name="grade.c_year"  autocomplete="off" placeholder="请输入学校名称">
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >录取最低分:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="grade.c_min" autocomplete="off" placeholder="请输入录取最低分"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >录取最高分:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="grade.c_max" autocomplete="off" placeholder="请输入录取最高分"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >录取平均分:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="grade.c_avg" autocomplete="off" placeholder="请输入录取平均分"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
            <tr>
                <td><label >录取人数:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="grade.c_pnum" autocomplete="off" placeholder="请输入录取人数"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
            <tr>
                <td><label >录取批次:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select  name="grade.c_no"  autocomplete="off" placeholder="请输入学校名称">
                    <option value="1">第一批次</option>
                    <option value="2">第二批次</option>
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
