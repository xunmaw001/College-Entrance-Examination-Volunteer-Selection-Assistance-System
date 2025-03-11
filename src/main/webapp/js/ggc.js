//20140409-yingyu baidu id
var _gaq = _gaq || [],_gcc =[{domain:'none',key:'UA-15078816-1',baidu:''},{domain:'jzb.com',key:'UA-25393064-1',baidu:'bdbcf2456ef01cf5400acb08575a5c7a'},{domain:'eduu.com',key:'UA-25393064-1',baidu:'0cfa71e057214ba5958c4a66fb67ef0c'},{domain:'aoshu.com',key:'UA-25434559-1',baidu:'097b4d986b1bd8a9bffe2dd3212a9975'},{domain:'youjiao.com',key:'UA-25435844-1',baidu:'e4ac2777566a27d6799c9c53047c4ea5'},{domain:'zhongkao.com',key:'UA-25437150-1',baidu:'6ee9ac718f06597da50c6f2290c89d86'},{domain:'gaokao.com',key:'UA-25437151-1',baidu:'aa27487f630124a75eaf9c8ac900811c'},{domain:'yingyu.com',key:'UA-25432568-1',baidu:'30e25e836fffe65ee926e0c1bd62b889'},{domain:'zuowen.com',key:'UA-25432568-2',baidu:'05d39f4d0b6d45b03bf3bb358aba968a'},{domain:'yuer.com',key:'UA-25435844-2',baidu:'709e127c0fcb0536c9e195b12c55dc3d'},{domain:'liuxue.com',key:'UA-25432568-3',baidu:'7678fbba9e2d1080665e0811f7d68b2d'},{domain:'eduuu.com',key:'UA-25432568-4',baidu:'a45844418622204e04ccc883c5ff1741'}],gccHost;

//var _gaq = _gaq || [],_gcc =[{domain:'none',key:'UA-15078816-1',baidu:''},{domain:'jzb.com',key:'UA-25393064-1',baidu:'346432060f80d4483dfa0233bc2277ee'},{domain:'eduu.com',key:'UA-25393064-1',baidu:'0cfa71e057214ba5958c4a66fb67ef0c'},{domain:'aoshu.com',key:'UA-25434559-1',baidu:'346432060f80d4483dfa0233bc2277ee'},{domain:'youjiao.com',key:'UA-25435844-1',baidu:'346432060f80d4483dfa0233bc2277ee'},{domain:'zhongkao.com',key:'UA-25437150-1',baidu:'346432060f80d4483dfa0233bc2277ee'},{domain:'gaokao.com',key:'UA-25437151-1',baidu:'346432060f80d4483dfa0233bc2277ee'},{domain:'yingyu.com',key:'UA-25432568-1',baidu:'c2f205de388aa277b06fa54aff6dbe82'},{domain:'zuowen.com',key:'UA-25432568-2',baidu:'346432060f80d4483dfa0233bc2277ee'},{domain:'yuer.com',key:'UA-25435844-2',baidu:'346432060f80d4483dfa0233bc2277ee'},{domain:'liuxue.com',key:'UA-25432568-3',baidu:'346432060f80d4483dfa0233bc2277ee'},{domain:'eduuu.com',key:'UA-25432568-4',baidu:'346432060f80d4483dfa0233bc2277ee'}],gccHost;


function getDomain(){var match = window.location.href.match(/.*\:\/\/([^\/]*).*/);if(typeof match != "undefined" && null != match){return match[1];}return null;}gccHost=!document.domain ? getDomain() : document.domain;if (null!==gccHost){var p = gccHost.indexOf('.');
    var gccArray=[];
    if(p > 0){
        gccArray=gccHost.split(".");
        gccHost = gccArray.length>2 ?
            gccArray[gccArray.length-2]+"."+gccArray[gccArray.length-1]:gccHost;
    }
}for (var _k in _gcc ){if (_gcc[_k].domain==gccHost){gccHost=_gcc[_k];break;}};if(typeof gccHost !='object'){gccHost=_gcc[0];}
_gaq.push(['_setAccount', gccHost.key]);
_gaq.push(['_setDomainName', '.'+gccHost.domain]);
_gaq.push(['_addOrganic', 'm.baidu', 'word']);
_gaq.push(['_addOrganic', 'baidu', 'word']);
_gaq.push(['_addOrganic', 'google', 'q']);
_gaq.push(['_addOrganic', 'soso', 'w']);
_gaq.push(['_addOrganic', 'soso', 'query']);
_gaq.push(['_addOrganic', '3721', 'name']);
_gaq.push(['_addOrganic', 'youdao', 'q']);
_gaq.push(['_addOrganic', '118114', 'kw']);
_gaq.push(['_addOrganic', 'vnet', 'kw']);
_gaq.push(['_addOrganic', 'so.360', 'q']);
_gaq.push(['_addOrganic', 'sogou', 'query']);
_gaq.push(['_addOrganic', 'm.so', 'q']);
_gaq.push(['_addOrganic', 'so', 'q']);
_gaq.push(['_addOrganic', 'm.yisou', 'q']);
_gaq.push(['_addOrganic', 'yisou', 'q']);
var preg = '/e/([0-9]+)/';
var dstr = document.URL.toLowerCase().match(preg);
if(dstr!=null){
    _gaq.push(['_setCustomVar',5,'Time',dstr[1],3]);
}
if(document.URL.toLowerCase().search('/e/') >0) {var List='_page';}else{var List='';};
if(typeof(EDUU_GRADE) != 'undefined') { _gaq.push(['_setCustomVar',4,'UserType',EDUU_GRADE,1]); }
if(typeof(EDUU_UIN) != 'undefined') { _gaq.push(['_setCustomVar',3,UIN,EDUU_UIN,2]); }
if(typeof(EDUU_PAGE) != 'undefined') { _gaq.push(['_setCustomVar',5,'BBSPAGE',EDUU_PAGE,3]); }
_gaq.push(['_trackPageview', (typeof EDUU_GKEY == 'undefined' ? '' : EDUU_GKEY+List)]);

//ref
//if(window.parent.document.referrer!=""){var refurl=window.parent.document.referrer;}else{var refurl='noref'}
//if(window.location.href!=""){var curl=window.location.href;}else{var curl='nourl'}
//_gaq.push(['_trackEvent', 'ref_cur', refurl,curl,0,true]);





//function
jQuery(function($){
    jQuery('#eduuTopNav a').click(function(){ _gaq.push(['_trackEvent', 'nav', $(this).text() , document.domain]); });
    jQuery('.other-tj a').click(function(){ _gaq.push(['_trackEvent', 'seo-related', document.domain]); });

    jQuery('a').bind("click", function(){baiduAD(this);});
    jQuery("iframe").each(function(){
        if(this.id.indexOf('baidu_clb_slot_iframe') >= 0){
            try{
                jQuery(this).dcontents().find('a').bind("click", function(){
                    baiduAD(this);
                });
            }catch(e){}
        }
    });

    //Track Events
    jQuery('[xga]').click( function(){ _gaq.push(['_trackEvent', 'BBS_User ',jQuery(this).attr('xga')]); } );

    function baiduAD(o){
        if(o.href.indexOf('http://deliver.eduu.com/main') >= 0){
            var adurl=o.href
            if(adurl.match(/db.+&/g)!=null){var adstr=adurl.match(/db.+&/g);}else{var adstr="none"}
            var _gkey = (typeof EDUU_GKEY == 'undefined' ? '/empty' : EDUU_GKEY);
            _gkey = (_gkey.indexOf('/') == 0) ? '/AD'+_gkey : '/AD/'+_gkey;
            _gaq.push(['_trackEvent','AD','adm',adstr[0]]);

        }else if (o.href.indexOf('http://www.baidu.com/cpro.php') >= 0){
            var _gkey = (typeof EDUU_GKEY == 'undefined' ? '/empty' : EDUU_GKEY);
            _gkey = (_gkey.indexOf('/') == 0) ? '/AD'+_gkey : '/AD/'+_gkey;
            _gaq.push(['_trackEvent','AD','union',_gkey ]);
        }
    }
});


(function(){var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src='http://img.eduuu.com/edu/js/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();

//Baidu JScode
if (gccHost.baidu.length==32){
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?"+gccHost.baidu;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}

// var _hmt = _hmt || [];
// 	(function() {
// 	var hm = document.createElement("script");
// 	hm.src = "//hm.baidu.com/hm.js?346432060f80d4483dfa0233bc2277ee";
// 	var s = document.getElementsByTagName("script")[0];
// 	s.parentNode.insertBefore(hm, s);
// 	})();