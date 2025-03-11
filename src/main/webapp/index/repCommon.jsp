<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/4/10
  Time: 21:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<head>
    <title>Title</title>
</head>
<body>

<div style="display:none;">
    <script type='text/javascript'>var EDUU_GKEY = "高考网/院校库/高校分数线/主页";</script>
    <script type="text/javascript" src="http://img.eduuu.com/edu/js/ggc.js?gx=2011_4"></script>
    <script src=" http://s50.cnzz.com/stat.php?id=1997329&amp;web_id=1997329" type="text/javascript"></script>
</div>
<script type="text/javascript" language="javascript">
    //按地区取得高校
    function getschool() {
        $.getJSON("http://colleges.gaokao.com/json/school?aid=" + $('#scharea').val() + "&id=&callback=?", function (data) {
            $("#schid").html(data.json);
        });
    }

    //搜索分数线(下拉框)
    function schpselect(stuarea, subject, schid, scharea) {
        if (stuarea != '') {
            stuarea = '/a' + stuarea;
        }
        if (subject != '') {
            subject = '/s' + subject;
        }
        if (schid != '') {
            schid = '/c' + schid;
        }
        if (scharea != '') {
            scharea = '/b' + scharea;
        }
        var page = $("#pagenum").val();
        if (page != '') {
            page = '/p' + page;
        }
        var url = "http://colleges.gaokao.com/schpoint" + stuarea + subject + schid + scharea + page + "/";
        window.location.href = url;
    }

    //跳转到url
    function gotourl() {
        schpselect($("#stuarea").val(), $("#subject").val(), $("#schid").val(), $("#scharea").val())
    }

    $(document).ready(function () {
        //取得select框内数据
        $.getJSON("http://colleges.gaokao.com/json/area?str=1&id=&callback=?", function (data) {
            $("#stuarea").html(data.json);
        });
        $.getJSON("http://colleges.gaokao.com/json/area?str=2&id=&callback=?", function (data) {
            $("#scharea").html(data.json);
            if ('' > 0) {
                getschool();
            }
        });
        $.getJSON("http://colleges.gaokao.com/json/subject?id=&callback=?", function (data) {
            $("#subject").html(data.json);
        });
        $('#scharea').change(function () {
            getschool();
        });
        //搜索分数线
        $("#schpoint").click(function () {
            _gaq.push(['_trackEvent', 'Colleges', 'search', 'schpli']);
            gotourl();
        });
        //跳转到X页
        $("#pagego").click(function () {
            gotourl();
        });
        //回车事件 回车触发
        $('body').bind('keydown', function (e) {
            var key = e.which;
            if (key == 13) {
            }
        });
    });
</script>

<div class="hr_10"></div>

<script type="text/javascript" src="<%=basePath%>js/ui/c.js"></script>
</div>
<script>
    //设置cookie
    function setCookie(cookieName, cookieValue, seconds, path, domain, secure) {
        var expires = new Date();
        expires.setTime(expires.getTime() + seconds);
        document.cookie = escape(cookieName) + '=' + escape(cookieValue)
            + (expires ? '; expires=' + expires.toGMTString() : '')
            + (path ? '; path=' + path : '/')
            + (domain ? '; domain=' + domain : '')
            + (secure ? '; secure' : '');
    }

    //获取cookie
    function getCookie(name) {
        var start = document.cookie.indexOf(name);
        var end = document.cookie.indexOf(";", start);
        return start == -1 ? null : unescape(document.cookie.substring(start + name.length + 1, (end > start ? end : document.cookie.length)));
    }
</script>
<script type="text/javascript" src="<%=basePath%>js/index_call.js"></script>
</body>
</html>
