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
    <jsp:include page="common.jsp"></jsp:include>
</head>
<body>
<div id="wrapper">
    <div class="menufix">
        <p>
            <strong>高校所在地：</strong>
            <a class="on" href="http://colleges.gaokao.com/schlist/">全部</a>
            <a href="http://colleges.gaokao.com/schlist/a1/">北京</a>
            <a href="http://colleges.gaokao.com/schlist/a2/">天津</a>
            <a href="http://colleges.gaokao.com/schlist/a3/">辽宁</a>
            <a href="http://colleges.gaokao.com/schlist/a4/">吉林</a>
            <a href="http://colleges.gaokao.com/schlist/a5/">黑龙江</a>
            <a href="http://colleges.gaokao.com/schlist/a6/">上海</a>
            <a href="http://colleges.gaokao.com/schlist/a7/">江苏</a>
            <a href="http://colleges.gaokao.com/schlist/a8/">浙江</a>
            <a href="http://colleges.gaokao.com/schlist/a9/">安徽</a>
            <a href="http://colleges.gaokao.com/schlist/a10/">福建</a>
            <a href="http://colleges.gaokao.com/schlist/a11/">山东</a>
            <a href="http://colleges.gaokao.com/schlist/a12/">湖北</a>
            <a href="http://colleges.gaokao.com/schlist/a13/">湖南</a>
            <a href="http://colleges.gaokao.com/schlist/a14/">广东</a>
            <a href="http://colleges.gaokao.com/schlist/a15/">重庆</a>
            <a href="http://colleges.gaokao.com/schlist/a16/">四川</a>
            <a href="http://colleges.gaokao.com/schlist/a17/">陕西</a>
            <a href="http://colleges.gaokao.com/schlist/a18/">甘肃</a>
            <a href="http://colleges.gaokao.com/schlist/a19/">河北</a>
            <a href="http://colleges.gaokao.com/schlist/a20/">山西</a>
            <a href="http://colleges.gaokao.com/schlist/a21/">内蒙古</a>
            <a href="http://colleges.gaokao.com/schlist/a22/">河南</a>
            <a href="http://colleges.gaokao.com/schlist/a23/">海南</a>
            <a href="http://colleges.gaokao.com/schlist/a24/">广西</a>
            <a href="http://colleges.gaokao.com/schlist/a25/">贵州</a>
            <a href="http://colleges.gaokao.com/schlist/a26/">云南</a>
            <a href="http://colleges.gaokao.com/schlist/a27/">西藏</a>
            <a href="http://colleges.gaokao.com/schlist/a28/">青海</a>
            <a href="http://colleges.gaokao.com/schlist/a29/">宁夏</a>
            <a href="http://colleges.gaokao.com/schlist/a30/">新疆</a>
            <a href="http://colleges.gaokao.com/schlist/a31/">江西</a>
            <a href="http://colleges.gaokao.com/schlist/a33/">香港</a>
            <a href="http://colleges.gaokao.com/schlist/a38/">澳门</a>
            <a href="http://colleges.gaokao.com/schlist/a39/">台湾</a>
        </p>
        <p>
            <strong>高校类型：</strong>
            <a class="on" href="http://colleges.gaokao.com/schlist/">全部</a>
            <a href="http://colleges.gaokao.com/schlist/c1/">综合</a>
            <a href="http://colleges.gaokao.com/schlist/c2/">工科</a>
            <a href="http://colleges.gaokao.com/schlist/c3/">农业</a>
            <a href="http://colleges.gaokao.com/schlist/c4/">师范</a>
            <a href="http://colleges.gaokao.com/schlist/c5/">民族</a>
            <a href="http://colleges.gaokao.com/schlist/c6/">林业</a>
            <a href="http://colleges.gaokao.com/schlist/c7/">医药</a>
            <a href="http://colleges.gaokao.com/schlist/c8/">语言</a>
            <a href="http://colleges.gaokao.com/schlist/c9/">财经</a>
            <a href="http://colleges.gaokao.com/schlist/c10/">体育</a>
            <a href="http://colleges.gaokao.com/schlist/c11/">艺术</a>
            <a href="http://colleges.gaokao.com/schlist/c12/">政法</a>
            <a href="http://colleges.gaokao.com/schlist/c13/">军事</a>
        </p>
        <p>
            <strong>高校特色：</strong>
            <a class="on" href="http://colleges.gaokao.com/schlist/">全部</a>
            <a href="http://colleges.gaokao.com/schlist/t211/">211高校</a>
            <a href="http://colleges.gaokao.com/schlist/t985/">985高校</a>
        </p>
        <p>
            <strong>学历层次：</strong>
            <a class="on" href="http://colleges.gaokao.com/schlist/">全部</a>
            <a href="http://colleges.gaokao.com/schlist/s1/">本科</a>
            <a href="http://colleges.gaokao.com/schlist/s2/">高职专科</a>
            <a href="http://colleges.gaokao.com/schlist/s3/">独立学院</a>
            <a href="http://colleges.gaokao.com/schlist/s4/">教育部直属</a>
            <a href="http://colleges.gaokao.com/schlist/s7/">其它</a>
        </p>
    </div>
    <div class="ment_Cto">
        <a href="javascript:void(0);" onclick="javascript:$('.menufix').toggle();if($(this).html()=='收起选项'){ $(this).html('展开选项');$(this).addClass('down'); }else{ $(this).html('收起选项');$(this).removeClass('down'); }">收起选项</a></div>
    <div class="hr_10"></div>
    <div class="scores_List">
            <div class="letter_Box">
                <strong class="ft14 c_blue rightMargin10">按学校名称</strong>
                拼音字母排序：
                <span class="letter_Con">
                    <a class="letter_Active" href="javascript:void(0);">全部</a>
                </span>
            </div>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/1/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/1.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="北京大学" /></a><strong title="北京大学" class="blue"><a href="http://colleges.gaokao.com/school/1/" target="_blank">北京大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('1','北京大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/1/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：北京</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.pku.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/2/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/2.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="中国人民大学" /></a><strong title="中国人民大学" class="blue"><a href="http://colleges.gaokao.com/school/2/" target="_blank">中国人民大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('2','中国人民大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/2/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：北京</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.ruc.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/3/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/3.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="清华大学" /></a><strong title="清华大学" class="blue"><a href="http://colleges.gaokao.com/school/3/" target="_blank">清华大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('3','清华大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/3/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：北京</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.tsinghua.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/4/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/4.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="北京航空航天大学" /></a><strong title="北京航空航天大学" class="blue"><a href="http://colleges.gaokao.com/school/4/" target="_blank">北京航空航天</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('4','北京航空航天大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/4/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：北京</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：工业与信息化部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.buaa.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/5/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/5.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="北京理工大学" /></a><strong title="北京理工大学" class="blue"><a href="http://colleges.gaokao.com/school/5/" target="_blank">北京理工大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('5','北京理工大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/5/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：北京</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：工业与信息化部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.bit.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/6/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/6.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="中国农业大学" /></a><strong title="中国农业大学" class="blue"><a href="http://colleges.gaokao.com/school/6/" target="_blank">中国农业大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('6','中国农业大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/6/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：北京</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：农业</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：http://www.cau.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/7/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/7.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="北京师范大学" /></a><strong title="北京师范大学" class="blue"><a href="http://colleges.gaokao.com/school/7/" target="_blank">北京师范大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('7','北京师范大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/7/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：北京</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：师范</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.bnu.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/8/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/8.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="中央民族大学" /></a><strong title="中央民族大学" class="blue"><a href="http://colleges.gaokao.com/school/8/" target="_blank">中央民族大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('8','中央民族大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/8/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：北京</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：民族</li>
                        <li>高校隶属：国家民族事务委员会</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.muc.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/9/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/9.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="南开大学" /></a><strong title="南开大学" class="blue"><a href="http://colleges.gaokao.com/school/9/" target="_blank">南开大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('9','南开大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/9/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：天津</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.nankai.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/10/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/10.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="天津大学" /></a><strong title="天津大学" class="blue"><a href="http://colleges.gaokao.com/school/10/" target="_blank">天津大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('10','天津大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/10/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：天津</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：——</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/11/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/11.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="大连理工大学" /></a><strong title="大连理工大学" class="blue"><a href="http://colleges.gaokao.com/school/11/" target="_blank">大连理工大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('11','大连理工大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/11/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：辽宁</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：——</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/12/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/12.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="东北大学" /></a><strong title="东北大学" class="blue"><a href="http://colleges.gaokao.com/school/12/" target="_blank">东北大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('12','东北大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/12/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：辽宁</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.neu.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/13/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/13.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="吉林大学" /></a><strong title="吉林大学" class="blue"><a href="http://colleges.gaokao.com/school/13/" target="_blank">吉林大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('13','吉林大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/13/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：吉林</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.jlu.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/14/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/14.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="哈尔滨工业大学" /></a><strong title="哈尔滨工业大学" class="blue"><a href="http://colleges.gaokao.com/school/14/" target="_blank">哈尔滨工业大</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('14','哈尔滨工业大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/14/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：黑龙江</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：工业与信息化部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：http://www.hit.edu.cn/</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/15/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/15.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="复旦大学" /></a><strong title="复旦大学" class="blue"><a href="http://colleges.gaokao.com/school/15/" target="_blank">复旦大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('15','复旦大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/15/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：上海</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：http://www.fudan.edu.cn/</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/16/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/16.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="同济大学" /></a><strong title="同济大学" class="blue"><a href="http://colleges.gaokao.com/school/16/" target="_blank">同济大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('16','同济大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/16/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：上海</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.tongji.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/17/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/17.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="上海交通大学" /></a><strong title="上海交通大学" class="blue"><a href="http://colleges.gaokao.com/school/17/" target="_blank">上海交通大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('17','上海交通大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/17/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：上海</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.sjtu.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/18/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/18.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="华东师范大学" /></a><strong title="华东师范大学" class="blue"><a href="http://colleges.gaokao.com/school/18/" target="_blank">华东师范大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('18','华东师范大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/18/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：上海</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：师范</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.ecnu.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/19/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/19.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="南京大学" /></a><strong title="南京大学" class="blue"><a href="http://colleges.gaokao.com/school/19/" target="_blank">南京大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('19','南京大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/19/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：江苏</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.nju.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/20/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/20.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="东南大学" /></a><strong title="东南大学" class="blue"><a href="http://colleges.gaokao.com/school/20/" target="_blank">东南大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('20','东南大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/20/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：江苏</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.seu.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/21/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/21.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="中国矿业大学(徐州)" /></a><strong title="中国矿业大学(徐州)" class="blue"><a href="http://colleges.gaokao.com/school/21/" target="_blank">中国矿业大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('21','中国矿业大学(徐州)');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/21/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：江苏</li>
                        <li>院校特色：<span class="c211 rm5">211</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：http://www.cumt.edu.cn/</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/22/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/22.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="浙江大学" /></a><strong title="浙江大学" class="blue"><a href="http://colleges.gaokao.com/school/22/" target="_blank">浙江大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('22','浙江大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/22/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：浙江</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.zju.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/23/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/23.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="中国科学技术大学" /></a><strong title="中国科学技术大学" class="blue"><a href="http://colleges.gaokao.com/school/23/" target="_blank">中国科学技术</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('23','中国科学技术大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/23/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：安徽</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：工科</li>
                        <li>高校隶属：中国科学院</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.ustc.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/24/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/24.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="厦门大学" /></a><strong title="厦门大学" class="blue"><a href="http://colleges.gaokao.com/school/24/" target="_blank">厦门大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('24','厦门大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/24/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：福建</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：http://www.xmu.edu.cn</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://colleges.gaokao.com/school/25/" target="_blank"><img src="http://colleges.gaokao.com/style/colleges/images/icon/25.png" onerror="this.src='http://colleges.gaokao.com/style/colleges/images/icon_default.png'" width="63" height="63" alt="山东大学" /></a><strong title="山东大学" class="blue"><a href="http://colleges.gaokao.com/school/25/" target="_blank">山东大学</a></strong>                    </dt>
                <dd>
                    <div class="right">
                        <p><a class="org" href="javascript:void(0);" onclick="javascript:setpk('25','山东大学');">+高校对比</a></p>
                        <p class="topMargin20"><a class="btn_gary" href="http://colleges.gaokao.com/school/25/" target="_blank">进入主页</a></p>
                    </div>
                    <ul>
                        <li>高校所在地：山东</li>
                        <li>院校特色：<span class="c211 rm5">211</span><span class="c985">985</span></li>
                        <li>高校类型：综合</li>
                        <li>高校隶属：教育部</li>
                        <li>高校性质：本科</li>
                        <li>学校网址：www.bkzs.sdu.edu.cn</li>
                    </ul>
                </dd>
            </dl>
        </div>
    <div class="hr_10"></div>
    <div>
            <ul class="fany">
                <li>首页</li>
                <li><< 上一页</li>
                <li><a href="http://colleges.gaokao.com/schlist/p2/">下一页 >></a></li>
                <li><a href="http://colleges.gaokao.com/schlist/p107/">末页</a></li>
                <li id="qx">1/107页 第<input id="pagenum" type="text" />页 <input id="pagego" type="image" src="http://colleges.gaokao.com/style/colleges/images/go.jpg" width="31" height="20" /></li>
            </ul>
        </div>
    <div class="hr_10"></div>
    <div class="wrapper wj_bk">
        <p>高考院校库分数线统计时包含了特长生分数，因此最低分和平均分可能与院校公布数据不一致，请以各高校正式公布数据为准。</p>
        <p>如果您发现网页当中的任何错误，欢迎发送邮件,与我们联系，我们会及时更正，谢谢! </p>
    </div>
</div>
</body>
</html>
