<%--
    高校分数线
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
    <jsp:include page="common.jsp"></jsp:include>
</head>
<body>

<div id="wrapper">
    <div class="menufix">
        <p>
            <strong>高校所在地：</strong>
            <a class="on" href="http://colleges.gaokao.com/schpoint/">全部</a>
            <a href="http://colleges.gaokao.com/schpoint/b1/">北京</a>
            <a href="http://colleges.gaokao.com/schpoint/b2/">天津</a>
            <a href="http://colleges.gaokao.com/schpoint/b3/">辽宁</a>
            <a href="http://colleges.gaokao.com/schpoint/b4/">吉林</a>
            <a href="http://colleges.gaokao.com/schpoint/b5/">黑龙江</a>
            <a href="http://colleges.gaokao.com/schpoint/b6/">上海</a>
            <a href="http://colleges.gaokao.com/schpoint/b7/">江苏</a>
            <a href="http://colleges.gaokao.com/schpoint/b8/">浙江</a>
            <a href="http://colleges.gaokao.com/schpoint/b9/">安徽</a>
            <a href="http://colleges.gaokao.com/schpoint/b10/">福建</a>
            <a href="http://colleges.gaokao.com/schpoint/b11/">山东</a>
            <a href="http://colleges.gaokao.com/schpoint/b12/">湖北</a>
            <a href="http://colleges.gaokao.com/schpoint/b13/">湖南</a>
            <a href="http://colleges.gaokao.com/schpoint/b14/">广东</a>
            <a href="http://colleges.gaokao.com/schpoint/b15/">重庆</a>
            <a href="http://colleges.gaokao.com/schpoint/b16/">四川</a>
            <a href="http://colleges.gaokao.com/schpoint/b17/">陕西</a>
            <a href="http://colleges.gaokao.com/schpoint/b18/">甘肃</a>
            <a href="http://colleges.gaokao.com/schpoint/b19/">河北</a>
            <a href="http://colleges.gaokao.com/schpoint/b20/">山西</a>
            <a href="http://colleges.gaokao.com/schpoint/b21/">内蒙古</a>
            <a href="http://colleges.gaokao.com/schpoint/b22/">河南</a>
            <a href="http://colleges.gaokao.com/schpoint/b23/">海南</a>
            <a href="http://colleges.gaokao.com/schpoint/b24/">广西</a>
            <a href="http://colleges.gaokao.com/schpoint/b25/">贵州</a>
            <a href="http://colleges.gaokao.com/schpoint/b26/">云南</a>
            <a href="http://colleges.gaokao.com/schpoint/b27/">西藏</a>
            <a href="http://colleges.gaokao.com/schpoint/b28/">青海</a>
            <a href="http://colleges.gaokao.com/schpoint/b29/">宁夏</a>
            <a href="http://colleges.gaokao.com/schpoint/b30/">新疆</a>
            <a href="http://colleges.gaokao.com/schpoint/b31/">江西</a>
            <a href="http://colleges.gaokao.com/schpoint/b33/">香港</a>
            <a href="http://colleges.gaokao.com/schpoint/b38/">澳门</a>
            <a href="http://colleges.gaokao.com/schpoint/b39/">台湾</a>
        </p>
        <p>
            <strong>考生所在地：</strong>
            <a class="on" href="http://colleges.gaokao.com/schpoint/">全部</a>
            <a href="http://colleges.gaokao.com/schpoint/a1/">北京</a>
            <a href="http://colleges.gaokao.com/schpoint/a2/">天津</a>
            <a href="http://colleges.gaokao.com/schpoint/a3/">辽宁</a>
            <a href="http://colleges.gaokao.com/schpoint/a4/">吉林</a>
            <a href="http://colleges.gaokao.com/schpoint/a5/">黑龙江</a>
            <a href="http://colleges.gaokao.com/schpoint/a6/">上海</a>
            <a href="http://colleges.gaokao.com/schpoint/a7/">江苏</a>
            <a href="http://colleges.gaokao.com/schpoint/a8/">浙江</a>
            <a href="http://colleges.gaokao.com/schpoint/a9/">安徽</a>
            <a href="http://colleges.gaokao.com/schpoint/a10/">福建</a>
            <a href="http://colleges.gaokao.com/schpoint/a11/">山东</a>
            <a href="http://colleges.gaokao.com/schpoint/a12/">湖北</a>
            <a href="http://colleges.gaokao.com/schpoint/a13/">湖南</a>
            <a href="http://colleges.gaokao.com/schpoint/a14/">广东</a>
            <a href="http://colleges.gaokao.com/schpoint/a15/">重庆</a>
            <a href="http://colleges.gaokao.com/schpoint/a16/">四川</a>
            <a href="http://colleges.gaokao.com/schpoint/a17/">陕西</a>
            <a href="http://colleges.gaokao.com/schpoint/a18/">甘肃</a>
            <a href="http://colleges.gaokao.com/schpoint/a19/">河北</a>
            <a href="http://colleges.gaokao.com/schpoint/a20/">山西</a>
            <a href="http://colleges.gaokao.com/schpoint/a21/">内蒙古</a>
            <a href="http://colleges.gaokao.com/schpoint/a22/">河南</a>
            <a href="http://colleges.gaokao.com/schpoint/a23/">海南</a>
            <a href="http://colleges.gaokao.com/schpoint/a24/">广西</a>
            <a href="http://colleges.gaokao.com/schpoint/a25/">贵州</a>
            <a href="http://colleges.gaokao.com/schpoint/a26/">云南</a>
            <a href="http://colleges.gaokao.com/schpoint/a27/">西藏</a>
            <a href="http://colleges.gaokao.com/schpoint/a28/">青海</a>
            <a href="http://colleges.gaokao.com/schpoint/a29/">宁夏</a>
            <a href="http://colleges.gaokao.com/schpoint/a30/">新疆</a>
            <a href="http://colleges.gaokao.com/schpoint/a31/">江西</a>
            <a href="http://colleges.gaokao.com/schpoint/a33/">香港</a>
            <a href="http://colleges.gaokao.com/schpoint/a38/">澳门</a>
            <a href="http://colleges.gaokao.com/schpoint/a39/">台湾</a>

        </p>
        <p>
            <strong>文理分科：</strong>
            <a class="on" href="http://colleges.gaokao.com/schpoint/">全部</a>
            <a href="http://colleges.gaokao.com/schpoint/s1/">理科</a>
            <a href="http://colleges.gaokao.com/schpoint/s2/">文科</a>
            <a href="http://colleges.gaokao.com/schpoint/s3/">综合</a>
            <a href="http://colleges.gaokao.com/schpoint/s4/">其他</a>
            <a href="http://colleges.gaokao.com/schpoint/s8/">艺术理</a>
            <a href="http://colleges.gaokao.com/schpoint/s9/">艺术文</a>
            <a href="http://colleges.gaokao.com/schpoint/s10/">综合改革</a>
        </p>
        <p>
            <strong>录取批次：</strong>
            <a class="on" href="http://colleges.gaokao.com/schpoint/">全部</a>
            <a href="http://colleges.gaokao.com/schpoint/d1/">第一批</a>
            <a href="http://colleges.gaokao.com/schpoint/d2/">第二批</a>
            <a href="http://colleges.gaokao.com/schpoint/d3/">第三批</a>
            <a href="http://colleges.gaokao.com/schpoint/d4/">提前批</a>
            <a href="http://colleges.gaokao.com/schpoint/d5/">不详</a>
            <a href="http://colleges.gaokao.com/schpoint/d6/">专科</a>
            <a href="http://colleges.gaokao.com/schpoint/d24/">第一段</a>
            <a href="http://colleges.gaokao.com/schpoint/d25/">第二段</a>
            <a href="http://colleges.gaokao.com/schpoint/d26/">第三段</a>
            <a href="http://colleges.gaokao.com/schpoint/d27/">本科批</a>
            <a href="http://colleges.gaokao.com/schpoint/d28/">自主招生批</a>
            <a href="http://colleges.gaokao.com/schpoint/d29/">普通批</a>
            <a href="http://colleges.gaokao.com/schpoint/d30/">高分优先投档线</a>
            <a href="http://colleges.gaokao.com/schpoint/d31/">本科A批</a>
            <a href="http://colleges.gaokao.com/schpoint/d32/">国家专项计划</a>
            <a href="http://colleges.gaokao.com/schpoint/d33/">重点本科汉族</a>
            <a href="http://colleges.gaokao.com/schpoint/d34/">普通本科汉族</a>
            <a href="http://colleges.gaokao.com/schpoint/d35/">重点本科少数民族</a>
            <a href="http://colleges.gaokao.com/schpoint/d36/">普通本科少数民族</a>
            <a href="http://colleges.gaokao.com/schpoint/d37/">贫困专项</a>
            <a href="http://colleges.gaokao.com/schpoint/d38/">本科提前批B</a>
            <a href="http://colleges.gaokao.com/schpoint/d39/">本科提前批A</a>
            <a href="http://colleges.gaokao.com/schpoint/d40/">特困地区本科</a>
            <a href="http://colleges.gaokao.com/schpoint/d41/">第一批A段</a>
            <a href="http://colleges.gaokao.com/schpoint/d42/">本科批次A阶段</a>
            <a href="http://colleges.gaokao.com/schpoint/d43/">贫困南单本一</a>
            <a href="http://colleges.gaokao.com/schpoint/d44/">理工类</a>
            <a href="http://colleges.gaokao.com/schpoint/d45/">文史类</a>
            <a href="http://colleges.gaokao.com/schpoint/d46/">普通文科</a>
            <a href="http://colleges.gaokao.com/schpoint/d47/">普通本科</a>
            <a href="http://colleges.gaokao.com/schpoint/d48/">国家专项本科</a>
            <a href="http://colleges.gaokao.com/schpoint/d49/">高校专项</a>
        </p>
        <p>
            <strong>招生年份：</strong>
            <a class="on" href="http://colleges.gaokao.com/schpoint/">全部</a>

            <a href="http://colleges.gaokao.com/schpoint/y2018/">2018</a>
            <a href="http://colleges.gaokao.com/schpoint/y2017/">2017</a>
            <a href="http://colleges.gaokao.com/schpoint/y2016/">2016</a>
            <a href="http://colleges.gaokao.com/schpoint/y2015/">2015</a>
            <a href="http://colleges.gaokao.com/schpoint/y2014/">2014</a>
            <a href="http://colleges.gaokao.com/schpoint/y2013/">2013</a>
            <a href="http://colleges.gaokao.com/schpoint/y2012/">2012</a>
            <a href="http://colleges.gaokao.com/schpoint/y2011/">2011</a>
            <a href="http://colleges.gaokao.com/schpoint/y2010/">2010</a>
            <a href="http://colleges.gaokao.com/schpoint/y2009/">2009</a>
            <a href="http://colleges.gaokao.com/schpoint/y2008/">2008</a>
            <a href="http://colleges.gaokao.com/schpoint/y2007/">2007</a>
        </p>
    </div>
    <div class="ment_Cto"><a href="javascript:void(0);"
                             onclick="javascript:$('.menufix').toggle();if($(this).html()=='收起选项'){ $(this).html('展开选项');$(this).addClass('down'); }else{ $(this).html('收起选项');$(this).removeClass('down'); }">收起选项</a>
    </div>
    <div class="hr_10"></div>
    <div class="scores_List">
        <h3>
            <span><p>高校分数线</p></span>
        </h3>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/1/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/1.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="北京大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/1/"
                                                                            target="_blank">北京大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('1','北京大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/1/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/1/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/1/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/1.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="北京大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/1/"
                                                                            target="_blank">北京大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('1','北京大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/1/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/1/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/2/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/2.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="中国人民大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/2/"
                                                                              target="_blank">中国人民大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('2','中国人民大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/2/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/2/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/2/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/2.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="中国人民大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/2/"
                                                                              target="_blank">中国人民大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('2','中国人民大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/2/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：提前批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/2/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/2/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/2.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="中国人民大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/2/"
                                                                              target="_blank">中国人民大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('2','中国人民大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/2/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/2/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/2/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/2.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="中国人民大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/2/"
                                                                              target="_blank">中国人民大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('2','中国人民大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/2/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：提前批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/2/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/3/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/3.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="清华大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/3/"
                                                                            target="_blank">清华大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('3','清华大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/3/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/3/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/3/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/3.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="清华大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/3/"
                                                                            target="_blank">清华大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('3','清华大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/3/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/3/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/4/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/4.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="北京航空航天大学"/></a><strong class="blue"><a
                    href="http://colleges.gaokao.com/school/4/" target="_blank">北京航空航天大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('4','北京航空航天大学');">+高校对比</a>
                    </p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/4/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/4/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/4/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/4.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="北京航空航天大学"/></a><strong class="blue"><a
                    href="http://colleges.gaokao.com/school/4/" target="_blank">北京航空航天大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('4','北京航空航天大学');">+高校对比</a>
                    </p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/4/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/4/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/8/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/8.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="中央民族大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/8/"
                                                                              target="_blank">中央民族大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('8','中央民族大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/8/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/8/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/8/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/8.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="中央民族大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/8/"
                                                                              target="_blank">中央民族大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('8','中央民族大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/8/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：提前批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/8/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/8/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/8.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="中央民族大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/8/"
                                                                              target="_blank">中央民族大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('8','中央民族大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/8/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/8/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/8/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/8.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="中央民族大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/8/"
                                                                              target="_blank">中央民族大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('8','中央民族大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/8/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：提前批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/8/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/12/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/12.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="东北大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/12/"
                                                                            target="_blank">东北大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('12','东北大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/12/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/12/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/12/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/12.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="东北大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/12/"
                                                                            target="_blank">东北大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('12','东北大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/12/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/12/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/14/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/14.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="哈尔滨工业大学"/></a><strong class="blue"><a
                    href="http://colleges.gaokao.com/school/14/" target="_blank">哈尔滨工业大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('14','哈尔滨工业大学');">+高校对比</a>
                    </p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/14/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/14/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/14/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/14.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="哈尔滨工业大学"/></a><strong class="blue"><a
                    href="http://colleges.gaokao.com/school/14/" target="_blank">哈尔滨工业大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('14','哈尔滨工业大学');">+高校对比</a>
                    </p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/14/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/14/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/15/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/15.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="复旦大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/15/"
                                                                            target="_blank">复旦大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('15','复旦大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/15/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/15/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/15/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/15.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="复旦大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/15/"
                                                                            target="_blank">复旦大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('15','复旦大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/15/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：提前批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/15/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/15/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/15.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="复旦大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/15/"
                                                                            target="_blank">复旦大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('15','复旦大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/15/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/15/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/15/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/15.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="复旦大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/15/"
                                                                            target="_blank">复旦大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('15','复旦大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/15/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：提前批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/15/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/16/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/16.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="同济大学"/></a><strong class="blue"><a href="http://colleges.gaokao.com/school/16/"
                                                                            target="_blank">同济大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('16','同济大学');">+高校对比</a></p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/16/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/16/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/17/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/17.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="上海交通大学"/></a><strong class="blue"><a
                    href="http://colleges.gaokao.com/school/17/" target="_blank">上海交通大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('17','上海交通大学');">+高校对比</a>
                    </p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/17/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：理科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/17/result/1/1/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="http://colleges.gaokao.com/school/17/" target="_blank"><img
                        src="http://colleges.gaokao.com/style/colleges/images/icon/17.png"
                        onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63"
                        height="63" alt="上海交通大学"/></a><strong class="blue"><a
                    href="http://colleges.gaokao.com/school/17/" target="_blank">上海交通大学</a></strong>
            </dt>
            <dd>
                <div class="right">
                    <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('17','上海交通大学');">+高校对比</a>
                    </p>
                    <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/17/"
                                              target="_blank">进入主页</a></p>
                </div>
                <ul>
                    <li>招生地区：北京</li>
                    <li>录取批次：第一批</li>
                    <li>考生类别：文科</li>
                    <li>录取分数线：<span class="blue"><a href="http://colleges.gaokao.com/school/tinfo/17/result/1/2/"
                                                    target="_blank">查看</a></span></li>
                    <li>年&nbsp;&nbsp;&nbsp;&nbsp;份：2018</li>
                </ul>
            </dd>
        </dl>
    </div>
    <div class="hr_10"></div>
    <div>
        <ul class="fany">
            <li>首页</li>
            <li><< 上一页</li>
            <li><a href="http://colleges.gaokao.com/schpoint/p2/">下一页 >></a></li>
            <li><a href="http://colleges.gaokao.com/schpoint/p50/">末页</a></li>
            <li id="qx">1/50页 第<input id="pagenum" type="text"/>页 <input id="pagego" type="image"
                                                                         src="http://colleges.gaokao.com/style/colleges/images/go.jpg"
                                                                         width="31" height="20"/></li>
        </ul>
    </div>
    <div class="hr_10"></div>
    <div class="wrapper wj_bk">
        <p>高考院校库分数线统计时包含了特长生分数，因此最低分和平均分可能与院校公布数据不一致，请以各高校正式公布数据为准。</p>
        <p>如果您发现网页当中的任何错误，欢迎发送邮件与我们联系，我们会及时更正，谢谢! </p>
    </div>
</div>

</body>
</html>
