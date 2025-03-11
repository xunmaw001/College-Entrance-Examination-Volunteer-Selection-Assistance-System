<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <jsp:include page="common.jsp"></jsp:include>
<body>

<style>
    .cont_l2 in {
        width: 1000px;
        float: left;
    }
</style>
<script type="text/javascript">
    //头部高校搜索
    $("#schbtn_h").click(function () {
        var name = $("#schname_h").val();
        if (name != '搜索高校' && name != '') {
            var name = encodeURI(name);
            window.open('http://colleges.gaokao.com/schlist/n' + name + '/');
        } else {
            alert('高校名称不能为空');
        }
    });
    // $("#back-to-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 500) {
                $("#back-to-top").fadeIn();
            }
            else {
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
<div id="wrapper">
    <div class="menufix">
        <p>
            <strong>高校类型：</strong>
            <a class="on" href="#">全部</a>
            <a href="#">综合</a>
            <a href="#">工科</a>
            <a href="#">农业</a>
            <a href="#">师范</a>
            <a href="#">民族</a>
            <a href="#">林业</a>
            <a href="#">医药</a>
            <a href=#">语言</a>
            <a href="#">财经</a>
            <a href="#">体育</a>
            <a href="#">艺术</a>
            <a href="#">政法</a>
            <a href="http://colleges.gaokao.com/schlist/a4/c13/">军事</a>
        </p>
        <p>
            <strong>高校特色：</strong>
            <a class="on" href="#">全部</a>
            <a href="#">211高校</a>
            <a href="#">985高校</a>
        </p>
    </div>
    <div class="ment_Cto"><a href="javascript:void(0);"
                             onclick="javascript:$('.menufix').toggle();if($(this).html()=='收起选项'){ $(this).html('展开选项');$(this).addClass('down'); }else{ $(this).html('收起选项');$(this).removeClass('down'); }">收起选项</a>
    </div>
    <div class="cont_2 in">
        <h3 class="zy_tit ss3" style="display:none;">
            <span><em>高校查询</em></span>
            <p><input id="schname" type="text" onfocus="this.value=''" onblur="if(!this.value) this.value='请输入高校名称'"
                      value="请输入高校名称" size='20' class="searchInput"/></p>
            <p><select id="enarea" name="enarea">
                <option value="">所在地</option>
            </select></p>
            <p><select id="category" name="category">
                <option value="">高校类型</option>
            </select></p>
            <p><select id="style" name="style" style="width:110px;">
                <option value="">高校性质</option>
            </select></p>
            <p><input id="schselect" type="image" src="http://colleges.gaokao.com/style/colleges/images/sous.png"
                      width="64" height="20"/></p>
        </h3>
        <h3>
            <span><p>吉林高校信息</p></span>
        </h3>
        <div class="scores_List">
            <div class="letter_Box">
                <strong class="ft14 c_blue rightMargin10">按学校名称</strong>
                拼音字母排序：
                <span class="letter_Con">
                    <a class="letter_Active" href="#">全部</a>
                                            <a href="#">A</a>
                                            <a href="#">B</a>
                                            <a href="#">C</a>
                                            <a href="#">D</a>
                                            <a href="#">E</a>
                                            <a href="#">F</a>
                                            <a href="#">G</a>
                                            <a href="#">H</a>
                                            <a href="#">J</a>
                                            <a href="#">K</a>
                                            <a href="#">L</a>
                                            <a href="#">M</a>
                                            <a href="#">N</a>
                                            <a href="#">P</a>
                                            <a href="#">Q</a>
                                            <a href="#">R</a>
                                            <a href="#">S</a>
                                            <a href="#">T</a>
                                            <a href="#">W</a>
                                            <a href="#">X</a>
                                            <a href="#">Y</a>
                                            <a href="http://colleges.gaokao.com/schlist/a4/lZ/">Z</a>
                                            <%--<a href="http://colleges.gaokao.com/schlist/a4/l锛/">锛</a>--%>
                                    </span>
            </div>
            <h4 class="letter_Tlt letter_Active">全部</h4>
            <dl>
                <c:forEach items="${colleges}" var="colleges">
                    <dt>
                        <a href="#" target="_blank">
                            <img src="http://colleges.gaokao.com/style/colleges/images/icon/13.png"
                                 onerror="this.src='${colleges.s_pic}'"
                                 width="63" height="63" alt="${colleges.s_name}"/></a><strong title="${colleges.s_name}"
                                                                                              class="blue">
                        <a href="#" target="_blank">${colleges.s_name}</a></strong>
                    </dt>
                    <dd>
                        <div class="right">
                            <p class="topMargin20"><a class="btn_gary"
                                                      href="<%=basePath%>grade/getIdGrade/${colleges.s_id}">进入主页</a></p>
                        </div>
                        <ul>
                            <li>高校所在地：${colleges.s_place}</li>
                            <li>院校特色：
                                <c:if test="${fn:contains(colleges.s_no,'985')}">
                                    <span class="c985">985</span>
                                </c:if>
                                <c:if test="${fn:contains(colleges.s_no,'211')}">
                                    <span class="c211 rm5">211</span>
                                </c:if>
                            </li>
                            <li>高校类型：${colleges.s_type}</li>
                            <li>高校隶属：${colleges.s_nature}</li>
                            <li>高校性质：本科</li>
                            <li>学校网址：${colleges.s_url}</li>
                        </ul>
                    </dd>
                </c:forEach>
            </dl>
        </div>
    </div>
    <style>
        .selecting mark {
            background: none;
            border: 1px solid #FFD0C8;
            line-height: 20px;
            position: relative;
            display: inline-block;
            padding: 0 30px 0 10px;
            margin-right: 10px;
        }

        .selecting mark i {
            background: url('http://tiku.gaokao.com/style/images/sel_btn_close.gif') no-repeat;
            width: 12px;
            height: 12px;
            position: absolute;
            right: 5px;
            top: 4px;
            cursor: pointer;
        }
    </style>
</div>
<%--<div style="display:none;">--%>
<%--<script type="text/javascript" src="http://img.eduuu.com/edu/js/ggc.js?gx=2011_4"></script>--%>
<%--<script src=" http://s50.cnzz.com/stat.php?id=1997329&amp;web_id=1997329" type="text/javascript"></script>--%>
<%--</div>--%>
<div class="hr_10"></div>
<style type="text/css">
    .fixed_popbox {
        display: none;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 90px;
        background: rgba(67, 166, 189, 0.9)
    }

    .fixed_popbox .popcon {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        position: relative
    }

    .fixed_popbox .popcon_text {
        float: left;
        height: 100%;
        width: 630px;
        color: #FFF;
        font-size: 16px
    }

    .fixed_popbox .popcon_text table {
        height: 100%
    }

    .fixed_popbox .popcon_text a {
        color: #FFF
    }

    .fixed_popbox .qr_code {
        height: 70px;
        padding-left: 14px;
        border-left: 1px dotted #FFF;
        float: right;
        margin-top: 10px;
        margin-right: 20px
    }

    .fixed_popbox .qr_code a {
        display: block;
        width: 100px;
        height: 26px;
        line-height: 26px;
        color: #FFF;
        font-size: 14px;
        text-align: center;
        border: 1px solid #FFF;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px
    }

    .fixed_popbox .qr_code .ios {
        padding-bottom: 10px
    }

    .fixed_popbox .qr_code p {
        padding: 0 10px
    }

    .fixed_popbox .qr_code .qr_txt {
        color: #FFF
    }

    .fixed_popbox .popbox_close {
        position: absolute;
        right: 0;
        top: 5px;
        width: 12px;
        height: 12px;
        background: url('http://img.eduuu.com/bbs/images/bbsfc/close.gif') no-repeat center center;
        overflow: hidden
    }
</style>
<script type="text/javascript">
    $(function () {
        if ($('#J_fixed_popbox')[0]) {
            var _box = $('#J_fixed_popbox');

            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    _box.fadeIn(800);
                } else {
                    _box.fadeOut(800);
                }
            });
            $(".popbox_close", _box).click(function () {
                _box.remove();
                $('.footer').css({
                    'padding': 0
                })
            });
        }
    });
</script>
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
<script type="text/javascript" src="http://colleges.gaokao.com/style/colleges/js/index_call.js"></script>
<!--script type="text/javascript" src="http://img.eduuu.com/gaokao/2015/bannerDaili.js?1019"></script-->
</body>
</html>
>
