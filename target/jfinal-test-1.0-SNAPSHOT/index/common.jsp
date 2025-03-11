<%--
 高校搜索
--%>
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
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
    <meta http-equiv="mobile-agent" content="format=wml;url=http://college.gaokao.com/sitemap/college.gaokao.com.xml"/>
    <meta http-equiv=”Cache-Control” content="no-transform"/>
    <meta name="keywords" content="各省院校,全国大学,大学名单,高校录取,高等院校,高等大学,211大学,985大学,重点大学"/>
    <meta name="description" content="高考院校库主要包括各省院校、大学名单、高校信息等内容，院校库的建立是为了帮助广大高考生及家长能够及时了解高校信息、能够以更快捷的方式查找到各省院校的基本情况。"/>
    <title>全国各省院校_全国大学名单_全国高校录取_高等院校_高考院校库</title>
    <link href="http://www.gaokao.com/favicon.ico" rel="shortcut icon"/>
    <link href="<%=basePath%>css/base.css" rel="stylesheet" type="text/css"/>
    <link href="<%=basePath%>css/style.css?2014623" rel="stylesheet" type="text/css"/>
    <link href="<%=basePath%>css/nav_jump_gk.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="<%=basePath%>js/jquery.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/common.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/s.js"></script>
    <!--新增-->
    <link rel="stylesheet" type="text/css" href="<%=basePath%>css/new_base.css">
    <link rel="stylesheet" type="text/css" href="<%=basePath%>css/common.css"/>
    <script type="text/javascript" src="<%=basePath%>js/jquery/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/common.js"></script>
</head>
<body>
<div id="sec_head">
    <div class="inner po_re" style="z-index: 10;">
        <div class="sec_head_con tp15">
            <a class="logo" href="http://www.gaokao.com" target="_blank">
                <img src="images/1.jpg" alt="高考帮" title="高考帮" width="185"
                     height="37">
            </a>

            <script>
                jQuery(function () {
                    jQuery('.newsite dl').hover(function () {
                        jQuery(this).addClass('on');
                    }, function () {
                        jQuery(this).removeClass('on');
                    });
                });
            </script>
            <div class="nav tp20 lp20">
            </div>
            <div class="topNavR" style="padding-top:0">
            </div>
            <script type="text/javascript">Hover('.con_us', '.tips', 'on')</script>
        </div>
    </div>
</div>

<div class="wrap">
    <div class="logoArea">
        您现在的位置：<span class="dress">&gt; 高校搜索</span>
    </div>
    <div class="channel_Nav">
        <div class="right search_Box ft14">
            <input id="schname_h" type="text" onfocus="this.value=''" onblur="if(!this.value) this.value='搜索高校'"
                   value="搜索高校" size='20' class="search_Txt"/>
            <input id="schbtn_h" class="search_Btn" type="button" value="搜索"/>
        </div>
        <ul id="over">
            <li><a href="<%=basePath%>index/jilin.jsp">高校搜索</a></li>
            <li><a href="<%=basePath%>index/spelist.jsp">专业搜索</a></li>
            <li><a href="<%=basePath%>index/schpoint.jsp">高校分数线</a></li>
            <li><a href="<%=basePath%>index/spepoint.jsp">专业分数线</a></li>
            <li><a href="<%=basePath%>index/areapoint.jsp">地区批次线</a></li>
        </ul>
    </div>
</div>
<script type="text/javascript">
    //头部高校搜索
    $("#schbtn_h").click(function () {
        var name = $("#schname_h").val();
        if (name != '搜索高校' && name != '') {
            var name = encodeURI(name);
            window.open('http://college.gaokao.com/schlist/n' + name + '/');
        } else {
            alert('高校名称不能为空');
        }
    });
    /* 页面跳转 */
    /*$("#over li").on("click",function () {
        this.attr("class","");
    });*/
    $('body').append("<p id='back-to-top'>返回顶部</p>");
    $("#back-to-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 500) {
                $("#back-to-top").fadeIn();
            } else {
                $("#back-to-top").fadeOut();
            }
        });
        $("#back-to-top").click(function () {
            $(this).animate({bottom: 400, opacity: 0}, 300);
            $('body,html').animate({scrollTop: 0}, 300, function () {
                $("#back-to-top").css('bottom', 0);
                $("#back-to-top").animate({opacity: 100})
            });
            return false;
        });
    });
</script>
<!--头结束 -->
</body>
</html>
