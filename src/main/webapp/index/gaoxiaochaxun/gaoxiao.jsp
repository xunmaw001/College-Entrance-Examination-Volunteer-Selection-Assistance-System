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
    <jsp:include page="../common.jsp"></jsp:include>
<body>

<style>
    .cont_l2 in {
        width: 1000px;
        float: left;
    }
</style>

<div id="wrapper">
    <div class="menufix">
        <p class="topone" id="s_type">
            <strong>高校类型：</strong>
            <a class="on" href="javascript:void(0);">全部</a>
            <a href="javascript:void(0);">综合</a>
            <a href="javascript:void(0);">工科</a>
            <a href="javascript:void(0);">农业</a>
            <a href="javascript:void(0);">师范</a>
            <a href="javascript:void(0);">民族</a>
            <a href="javascript:void(0);">林业</a>
            <a href="javascript:void(0);">医药</a>
            <a href="javascript:void(0);">语言</a>
            <a href="javascript:void(0);">财经</a>
            <a href="javascript:void(0);">体育</a>
            <a href="javascript:void(0);">艺术</a>
            <a href="javascript:void(0);">政法</a>
            <a href="javascript:void(0);">军事</a>
        </p>
        <p id="s_no">
            <strong>高校特色：</strong>
            <a class="on" href="javascript:void(0);">全部</a>
            <a href="javascript:void(0);">211高校</a>
            <a href="javascript:void(0);">985高校</a>
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
            <span><p style="color:#2c2d2e">吉林高校信息</p></span>
        </h3>
        <div class="scores_List">
            <div class="letter_Box">
                <strong class="ft14 c_blue rightMargin10">操作:</strong>
                <span class="letter_Con">
                    <a href="<%=basePath%>index/add/addColleges.jsp">增加学校</a>
                </span>
            </div>
            <c:forEach items="${colleges}" var="colleges">
                <dl>
                    <dt>
                        <a href="javascript:void(0);" target="_blank">
                            <img src="<%=basePath%>${colleges.s_pic}"
                                 onerror=""
                                 width="63" height="63" alt="${colleges.s_name}"/></a><strong title="${colleges.s_name}"
                                                                                              class="blue">
                        <a href="javascript:void(0);" target="_blank">${colleges.s_name}</a></strong>
                    </dt>
                    <dd>
                        <div class="right">
                            <p class="topMargin20"><a class="btn_gary"
                                                      href="<%=basePath%>grade/getIdGrade?s_id=${colleges.s_id}">进入主页</a>
                            </p>
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
                            <li>高校性质：${colleges.s_typeno}</li>
                            <li>学校网址：${colleges.s_url}</li>
                        </ul>
                    </dd>
                </dl>
            </c:forEach>
        </div>
    </div>
</div>
<div class="hr_10"></div>
</div>
<script type="text/javascript" src="<%=basePath%>js/index_call.js"></script>
</body>
</html>

