<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <jsp:include page="common.jsp"></jsp:include>
</head>
<style>
    .tabschool {
        position: relative;
        width: 1000px;
    }
</style>
<body>
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
    $("#back-to-top").hide();
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
<!--网站新 头结束 -->
<link rel="stylesheet" type="text/css" href="http://www.gaokaopai.com/Public/Css/gkb_vip.css"/>

<script type="text/javascript" src="http://www.gaokaopai.com/Public/Js/mydialog.js"></script>
<div class="zoomIn errorBox" id="errorBox">
    <%--<h4><em class="tip_gantanhao"></em>所属资料仅支持在高考帮APP上查看</h4>--%>
    <img src="http://www.gaokaopai.com/Public/Images/tips.jpg" alt=""/>
    <a class="errorBox_close" href="javascript:;" onclick="easyDialog.close();"></a>
</div>
<script type="text/javascript">
    $(function () {
        $('.errorTips').on('click', function () {
            easyDialog.open({
                container: 'errorBox',
                autoClose: false
            });
        });
    })

</script>
<div class="wrap">
    <div class="menufix" style="display:none;">
        <p>
            <strong>高校类型：</strong>
            <a href="#">全部</a>
            <a class="on" href="#">综合</a>
            <a href="#">工科</a>
            <a href="#">农业</a>
            <a href="#">师范</a>
            <a href="#">民族</a>
            <a href="#">林业</a>
            <a href="#">医药</a>
            <a href="#">语言</a>
            <a href="#">财经</a>
            <a href="#">体育</a>
            <a href="#">艺术</a>
            <a href="#">政法</a>
            <a href="#">军事</a>
        </p>
        <p>
            <strong>学历层次：</strong>
            <a class="on" href="#">全部</a>
            <a href="#">本科</a>
            <a href="#">高职专科</a>
            <a href="#">独立学院</a>
            <a href="#">教育部直属</a>
            <a href="#">其它</a>
        </p>
    </div>
    <div class="ment_Cto"><a href="javascript:void(0);" class="down"
                             onclick="javascript:$('.menufix').toggle();if($(this).html()=='收起选项'){ $(this).html('展开选项');$(this).addClass('down'); }else{ $(this).html('收起选项');$(this).removeClass('down'); }">展开选项</a>
    </div>
    <div class="hr_10"></div>
    <div class="bg_sez">
        <c:forEach items="${college}" var="colleges">
            <h2>
                    ${colleges.s_name}
            </h2>
            <div class="college_msg bk">
                <dl>
                    <dt class="left"><img src="${colleges.s_pic}"
                                          onerror="this.src='http://college.gaokao.com/style/college/images/icon_default.png'"
                                          width="121" height="121" alt="吉林大学"/></dt>
                    <dd class="left">
                        <ul class="left basic_infor">
                            <li>高校类型：
                                <c:if test="${fn:contains(colleges.s_no,'985')}">
                                <span class="c985">985</span>
                                </c:if>
                                <c:if test="${fn:contains(colleges.s_no,'211')}">
                                <span class="c211 rm5">211</span>
                                </c:if>
                            <li>高校隶属于：${colleges.s_nature}</li>
                            <li>高校所在地：${colleges.s_place}</li>
                            <li>院士：19人 博士点：311个 硕士点：240个</li>
                        </ul>
                        <ul class="left contact">
                            <p>
                                　　通讯地址：${colleges.s_place}<br/>
                                　　联系电话：00000-199999011<br/>
                                　　电子邮箱: ${colleges.s_email}<br/>
                                　　学校网址：${colleges.s_url}</p>
                        </ul>
                    </dd>
                </dl>
            </div>
            <div class="hr_10"></div>
            <script type="text/javascript">
                //添加到收藏夹
                function bookmark() {
                    var title = document.title;
                    var url = document.location.href;
                    if (window.sidebar) {
                        window.sidebar.addPanel(title, url, "");
                    } else if (window.opera && window.print) {
                        var mbm = document.createElement('a');
                        mbm.setAttribute('rel', 'sidebar');
                        mbm.setAttribute('href', url);
                        mbm.setAttribute('title', title);
                        mbm.click();
                    } else if (document.all) {
                        window.external.AddFavorite(url, title);
                    } else {
                        alert("您的浏览器不支持加入收藏夹功能，请手动收藏。");
                    }
                }
            </script>
        </c:forEach>
    </div>
    <div class="hr_10"></div>
</div>
<div id="wrapper">
    <div class="hr_10"></div>
    <div class="cont_l in">
        <div class="hr_10"></div>
        <div class="tabschool">
                    <table width="1000" border="0" cellpadding="0" cellspacing="1" bgcolor="#E1E1E1">
                            <tr align="center">
                                <th scope="col">年份</th>
                                <th scope="col">最低</th>
                                <th scope="col">最高</th>
                                <th scope="col">平均</th>
                                <th scope="col">录取人数</th>
                                <th scope="col">录取批次</th>
                            </tr>
                        <c:forEach items="${gradelist}" var="grades">
                        <tr class="szw">
                                <td>${grades.c_year}</td>
                                <td>${grades.c_min}</td>
                                <td>${grades.c_max}</td>
                                <td id="pjf"><a href="#" target="_blank">${grades.c_avg}</a>
                                </td>
                                <td class="hs">${grades.c_pnum}</td>
                                <td>第${grades.c_cno}批</td>
                            </tr>
                        </c:forEach>
                    </table>
        </div>
        <div class="hr_10"></div>
        <div class="hr_10"></div>
        <div class="hr_10"></div>
        <div class="hr_10"></div>
    </div>
    <div class="hr_10"></div>
</div>
<div class="wrapper wj_bk">
    <p>高考院校库分数线统计时包含了特长生分数，因此最低分和平均分可能与院校公布数据不一致，请以各高校正式公布数据为准。</p>
    <p>如果您发现网页当中的任何错误，欢迎发送邮件(zhangran@100tal.com）与我们联系，我们会及时更正，谢谢! </p>
</div>
<div class="hr_10"></div>
<!--新底 开始 20140225-->
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
<script type="text/javascript" src="http://college.gaokao.com/style/college/js/index_call.js"></script>
</body>
</html>

