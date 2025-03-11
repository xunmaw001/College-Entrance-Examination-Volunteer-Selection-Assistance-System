<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <jsp:include page="../common.jsp"></jsp:include></head>
<script>
    $(function () {
        var message = '${message}';
        if(message){
            alert(message);
            location.href='<%=basePath%>';
        }
    })
    function submit() {
        $("#form").submit();
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
    <strong style="font-size: 20px">添加学校</strong>
    <div class="hr_10"></div>
    <form  id ='form' action="<%=basePath%>colleges/add" method="post"  enctype="multipart/form-data">
        <table>
            <tr>
                <td><label>学校名称:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="colleges.s_name"  autocomplete="off" placeholder="请输入学校名称"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >学校网址:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="tel" name="colleges.s_url" autocomplete="off" placeholder="请输入学校网址"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >学校头像:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="file" name="colleges.s_pic" autocomplete="off" /></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >学校电子邮箱:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="tel" name="colleges.s_email" autocomplete="off" placeholder="请输入学校网址"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label>类型:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select name="colleges.s_type" lay-verify="required">
                    <option value="综合">综合</option>
                    <option value="工科">工科</option>
                    <option value="农业">农业</option>
                    <option value="师范">师范</option>
                    <option value="民族">民族</option>
                    <option value="林业">林业</option>
                    <option value="医药">医药</option>
                    <option value="语言">语言</option>
                    <option value="财经">财经</option>
                    <option value="艺术">艺术</option>
                    <option value="政法">政法</option>
                </select></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label>高校类型:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select name="colleges.s_no">
                    <option value="985">985</option>
                    <option value="211">211</option>
                    <option value="普通高校">普通高校</option>
                </select></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label>高校性质:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select name="colleges.s_typeno">
                    <option value="本科">本科</option>
                    <option value="专科">专科</option>
                </select></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td><label>联系电话:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text"  name="colleges.s_phone"  autocomplete="off" placeholder="请输入联系电话" /></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td><label>高校隶属:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select name="colleges.s_nature">
                    <option value="教育部">教育部</option>
                    <option value="教务处">教务处</option>
                </select></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td><label>高校所在地:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text"  name="colleges.s_place"   autocomplete="off" placeholder="请输入高校所在地" /></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label>院士：</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text"  name="colleges.s_ys"  autocomplete="off" placeholder="请输入院士"/></td>
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
