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
        var message = '${message}';
        if(message){
            alert(message);
            location.href='<%=basePath%>index/zhuanyechaxun/spelist.jsp';
        }
        initform();
    });
    function submit() {
        $("#form").submit();
    }
    function initform() {
        querySub();queryColl()
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
                    htm += '<option  value="' + item.code + '" >' + item.name + '</option>';
                });
                $('#subject').append(htm);
            }
        });
    }
    function queryColl() {
        $.ajax({
            url: "<%=basePath%>colleges",
            type: 'post',
            dataType: 'json',
            async: true,
            success: function (res) {
                var htm = '';
                $.each(res, function (index, item) {
                    htm += '<option  value="' + item.s_id + '" >' + item.s_name + '</option>';
                });
                $('#s_id').append(htm);
            }
        });
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
    textarea{
        width: 500px;
        height: 60px;
    }
</style>
<body>

<div id="wrapper">
    <div class="hr_10"></div>
    <strong style="font-size: 20px">添加专业</strong>
    <div class="hr_10"></div>
    <form  id ='form' action="<%=basePath%>specialy/add" method="post">
        <table>
            <tr>
                <td><label>学校名称:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select id="s_id" name="specialty.schoolid"  autocomplete="off" placeholder="请输入学校名称">
                </select>
                </td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >专业名称:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input  name="specialty.name"  autocomplete="off" placeholder="请输入专业名称"></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >批次:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select  name="specialty.batch">
                        <option value="1">提前批</option>
                        <option value="2">一批A</option>
                        <option value="3">一批B</option>
                        <option value="4">二批A</option>
                        <option value="5">二批B</option>
                </select>
                </td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >专业类型:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select  name="specialty.type">
                    <option value="1">文科</option>
                    <option value="2">理科</option>
                    <option value="3">综合</option>
                    <option value="4">艺术理</option>
                    <option value="5">艺术文</option>
                </select></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
            <tr>
                <td><label >所属学科:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select id="subject"  name="specialty.subjCode">

                </select></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
            <tr>
                <td><label >专业代码:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" name="specialty.zydm" autocomplete="off" placeholder="请输入专业代码"/></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
            <tr>
                <td><label >学历层次:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><select  name="specialty.level" >
                    <option value="1">本科</option>
                    <option value="2">专科</option>
                </select></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>

            <tr>
                <td><label >主干学科:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input  name="specialty.zgxk"  autocomplete="off" placeholder="请输入主干学科"></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >主修课程:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><textarea name="specialty.zxkc"></textarea></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
            <tr>
                <td><label >培养目标:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><textarea name="specialty.pymb"></textarea></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >培养要求:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><textarea name="specialty.pyyq"></textarea></td>
            </tr>
            <tr><td>&nbsp;</td>
                <td>&nbsp;</td></tr>
            <tr>
                <td><label >就业方向:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><textarea name="specialty.jyfx"></textarea></td>
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
