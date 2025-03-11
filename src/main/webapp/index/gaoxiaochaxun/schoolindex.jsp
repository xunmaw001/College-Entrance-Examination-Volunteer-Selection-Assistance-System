<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <jsp:include page="../common.jsp"></jsp:include>
</head>
<style>
    .tabschool {
        position: relative;
        width: 1000px;
    }
</style>
<body>
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
        <c:forEach items="${colleges}" var="colleges">
            <h2>
                    ${colleges.s_name}
            </h2>
            <div class="college_msg bk">
                <dl>
                    <dt class="left"><img src="${colleges.s_pic}"
                                          onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'"
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
                            <li>院士：${colleges.s_ys}</li>
                        </ul>
                        <ul class="left contact">
                            <p>
                                　　通讯地址：${colleges.s_place}<br/>
                                　　联系电话：${colleges.s_phone}<br/>
                                　　电子邮箱: ${colleges.s_email}<br/>
                                　　学校网址：${colleges.s_url}</p>
                        </ul>
                    </dd>
                </dl>
            </div>
            <div class="letter_Box">
                <strong class="ft14 c_blue rightMargin10">操作:</strong>
                <span class="letter_Con">
                    <a href='<%=basePath%>index/add/addGrade.jsp?s_id=${colleges.s_id}'>增加学校分数</a>
                </span>
            </div>
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
                                <td>第${grades.c_no}批</td>
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
<script type="text/javascript" src="http://colleges.gaokao.com/style/colleges/js/index_call.js"></script>
</body>
</html>

