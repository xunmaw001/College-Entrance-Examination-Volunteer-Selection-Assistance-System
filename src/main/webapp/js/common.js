// JavaScript Document

function tabs(tabTit,tabCon,on){
	var _on=$(tabTit).find('.'+on);
	var _i=$(tabTit).children().index(_on[0]);
	$(tabCon).each(function(){
		$(this).children().eq(_i).show().siblings().hide();
	});
	$(tabTit).children().hover(function(){
		$(this).addClass(on).siblings().removeClass(on);
		var index = $(tabTit).children().index(this);
		$(tabCon).children().eq(index).show().siblings().hide();
	});	
}



function Hover(hoverDiv,showDiv,on){
	$(showDiv).each(function(){$(this).hide()});
	$(hoverDiv).children().hover(function(){
		$(this).addClass(on);
		$(this).find(showDiv).show();
	},function(){
		$(this).removeClass(on);
		$(this).find(showDiv).hide();
	});
}

function tabsC(tabTit,tabCon,on){
	var _on=$(tabTit).find('.'+on);
	var _i=$(tabTit).children().index(_on[0]);
	$(tabCon).each(function(){
		$(this).children().eq(_i).show();
	});
	$(tabTit).children().click(function(){
		$(this).addClass(on).siblings().removeClass(on);
		var index = $(tabTit).children().index(this);
		$(tabCon).children().eq(index).show().siblings().hide();
	});	
}

function Focus(focusBox,focusPic,focusTxt,focusNum,focusOn,delay){
	var delayT=delay==undefined?5000:delay;
	$(focusPic).children('li').eq(0).show();
	$(focusTxt).children().eq(0).show();
	var len = $(focusNum).children().length;
	var index= 0;

	$(focusNum).children().mouseover(function(){
		index = $(focusNum).children().index(this);
		showImg(index);
	});

	$(focusBox).hover(function(){
		if(palyImg){
			clearInterval(palyImg);
		}
	},function(){
		palyImg = setInterval(function(){
			showImg(index);
			index++;
			if(index==len) {index=0}
		},delayT);	
	});

	var palyImg = setInterval(function(){
		showImg(index);
		index++;
		if(index==len) {index=0}
	},delayT);
	function showImg(i){
		$(focusPic).children('li').eq(i).stop(true,true).fadeIn().siblings('li').fadeOut();
		$(focusTxt).children().eq(i).stop(true,true).fadeIn().siblings().fadeOut();
		$(focusNum).children().eq(i).addClass(focusOn).siblings().removeClass(focusOn);
	}
}

function Menu(nav){
      var $menu = $(nav);
      $menu.children('li').each(function(){
        var $this = $(this);
        var a;
        var $div = $this.children('div');
        if($(this).find("a").hasClass('hover')){
            a=$(this).index();
        };
        $this.bind('mouseenter',function(){
          $this.children().addClass('hover');
          $div.stop(true,true).hide();
          $div.stop().slideDown(300);
        }).bind('mouseleave',function(){
          $this.children().removeClass('hover');
          $menu.children('li').eq(a).addClass('hover').children('a').css({'color':'#fff'});
          $div.stop(true,true).hide();
          
        });
      });
}

function FocusBtn(focusBox,focusPic,focusTxt,focusNum,focusOn,btnNext,btnPrev){
	$(focusPic).children().eq(0).show();
	$(focusTxt).children().eq(0).show();
	var len = $(focusNum).children().length;
	var index= 0;
	
	$(focusNum).children().mouseover(function(){
		index = $(focusNum).children().index(this);
		showImg(index);
	});
	
	var palyImg = setInterval(function(){
		showImg(index);
		index++;
		if(index==len) {index=0}
	},3000);
	
	$(focusBox).hover(function(){
		if(palyImg){
			clearInterval(palyImg);
		}
	},function(){
		palyImg = setInterval(function(){
			showImg(index);
			index++;
			if(index==len) {index=0}
		},3000);	
	});
	function showImg(i){
		$(focusPic).children().eq(i).stop(true,true).fadeIn().siblings().fadeOut();
		$(focusTxt).children().eq(i).stop(true,true).fadeIn().siblings().fadeOut();
		$(focusNum).children().eq(i).addClass(focusOn).siblings().removeClass(focusOn);
	}
	$(btnNext).click(function(){
		index += 1;
		if(index == len){
			index = 0;
		}
		showImg(index);
	});
	
	$(btnPrev).click(function(){
		index -= 1;
		if(index == -1){
			index = len-1;
		}
		showImg(index);
	});
}

function changeColor(bgColor,changeBg){
	$(bgColor).children().hover(function(){
		$(this).addClass(changeBg);
	},function(){
		$(this).removeClass(changeBg);
	});
}

function dropDown(moreArea,moreOn){
	$(moreArea).hover(function(){
		$(this).addClass(moreOn);
	},function(){
		$(this).removeClass(moreOn);
	});
}

function dropDown2(moreArea2,moreOn2){
	$(moreArea2).click(function(event){
		$(moreArea2).removeClass(moreOn2);
		event.stopPropagation();
		$(this).toggleClass(moreOn2);
	});
	$(document).click(function(event){
		$(moreArea2).removeClass(moreOn2);
	});	
}

function soft(btnUp,btnDown){
	$(btnUp).click(function(){
		$(this).toggleClass(btnDown).parent().siblings().slideToggle('slow');
	});
}

function showBox(showDivTit){
	$(showDivTit).hover(function(){
		$(this).children().fadeIn();
	},function(){
		$(this).children().fadeOut();
	});
}

function closeBox(btnClose,closeDiv){
	$(btnClose).click(function(){
		$(this).parents(closeDiv).fadeOut();
	});
}

$(function($){
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }

    if (!placeholderSupport()) {   
        $('[placeholder]').focus(function() {
            var input = $(this);
           
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
        	
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    };
});

function marqueeBox(marBox,marBoxCon,marBoxConList,btnNext,btnPrev,num){
	var page = 1;
	var i = num;
	$(btnNext).click(function(){
		var $parent = $(this).parents(marBox);
		var $v_show = $parent.find(marBoxConList);
		var $v_content = $parent.find(marBoxCon);
		var v_width = $v_content.width();
		var len = $v_show.find("li").length;
		var page_count = Math.ceil(len / i);
		if( !$v_show.is(":animated")){
			if(page == page_count){
				$v_show.animate({left:'0'},"slow");
				page = 1;
			}else{
				$v_show.animate({left:'-='+v_width},"slow")	;
				page++;
			}
		}
	});	
	$(btnPrev).click(function(){
		var $parent = $(this).parents(marBox);
		var $v_show = $parent.find(marBoxConList);
		var $v_content = $parent.find(marBoxCon);
		var v_width = $v_content.width();
		var len = $v_show.find("li").length;
		var page_count = Math.ceil(len / i);
		if( !$v_show.is(":animated")){
			if(page == 1){
				$v_show.animate({left:'-='+v_width*(page_count-1)},"slow")	;
				page = page_count;
			}else{
				$v_show.animate({left:'+='+v_width},"slow")	;
				page--;
			}
		}
	});	
}

function addfavorite(sURL, sTitle)
{
   if (document.all)
   {
      window.external.addFavorite(sURL, sTitle);
   }
   else if (window.sidebar)
   {
      window.sidebar.addPanel(sTitle, sURL, "");
   }
} 

function listLine(listBox,lineLast){
	$(listBox).children('li:last').addClass(lineLast);
}

function browserRedirect(dir) {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if ((bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
	   var host=window.location.host;
	   var reHost=window.location.host+'/'+dir;
		
		url = window.location.href;
		dumpUrl=url.replace(host,reHost);
		window.location.href=dumpUrl;
	}
}

function browserRedirect_new() {
    var sUserAgent = navigator.userAgent.toLowerCase();

	if( /spider|bot|slurp/.test(sUserAgent) ){
		return;
	}

    if(/AppleWebKit.*Mobile/i.test(sUserAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/i.test(sUserAgent)) || /ipad|iphone os|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)){

       var host=window.location.host;
	   var url = window.location.href;
	   
	   if(host.substr(0,4)=='jzb.'){
			var reHost=host.replace('jzb.','m.jzb.');
	   }

       if(host.substr(0,4)=='www.'){
            var reHost=host.replace('www.','m.');
       }else{
            var frist = host.indexOf('.');
            var tmp = host.substr(0,frist);
            var reHost=host.replace(host.substr(0,frist)+'.','m.')+'/'+tmp;
       }
        dumpUrl=url.replace(host,reHost);
		if(reHost) window.location.href=dumpUrl;
    }
}


var jzb_token = "is_jzb_2c908126";
var is_jzb = (location.href.indexOf(jzb_token)>0)?1:0;
if(is_jzb == 1){
 
  var float_layer = getFloatLayer();
	var process = 0;
	var load_p = setInterval(function(){
		if(process < 80)
			process += 5;
		else if(process < 95)
			process += 0.5;
		$("#load_bar").css("width",process+"%");
	},100);
  createJsLink("http://img.eduuu.com/website/public_js/jzb/as_list.js");
}

var zhongkao_token = "is_zhongkao_2c908126";
var is_zhongkao = (location.href.indexOf(zhongkao_token)>0)?1:0;
if(is_zhongkao == 1){
	
	var float_layer = getFloatLayer();
	var process = 0;
	var load_p = setInterval(function(){
		if(process < 80)
			process += 5;
		else if(process < 95)
			process += 0.5;
		$("#load_bar").css("width",process+"%");
	},100);
	createJsLink("http://img.eduuu.com/website/public_js/jzb/zk_list.js");
}


function getFloatLayer(){
	var c_html = '<div style="position:fixed;left:0;top:0;width:100%;height:100%;background:#fff;z-index:9999;" id="load_layer">';
	c_html += '<div style="width:0%;height:2px;background:green;position:fixed;top:0;left:0;z-index:9999;" id="load_bar"></div>';
	c_html += '</div>';
	var tmp = $(c_html);
  $("html").append(tmp);
  return tmp;
}

function createJsLink(src,callback){
	(function(){
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = src;
		
		var body = document.getElementsByTagName('HEAD').item(0);
		body.appendChild(script);

		if(callback){
			script.onload = function(e){
				callback();
			}
		}
	})();
}
//
/*document.write('<style>.pub-tc{ position:fixed; z-index:99999; width:275px; padding:0 10px 10px; background:#47AFC7; right:0; bottom:0; margin:0; overflow:hidden; line-height:24px; display:none;}.pub-tc-tit{ line-height:24px; height:24px; color:#fff; font-size:14px;}.pub-tc-close img{ cursor:pointer; float:right; margin-top:8px;}.pub-tc-con{ padding:5px; overflow:hidden; zoom:1; background:#fff;}</style>');
$(function(){
	if(location.href.match(/aoshu.com/i) != null && location.href.search(/m.aoshu/i) == -1){
		$('body').append('<div class="pub-tc"><div class="pub-tc-tit"><strong></strong><span class="pub-tc-close"><img src="http://img.eduuu.com/website/public_images/tc/tc_jzb_close.gif" width="9" height="8" alt="关闭" /></span></div><div class="pub-tc-con"><img src="http://img.eduuu.com/website/public_images/tc/tc20150310.gif" width="265" height="135" /></div></div>');
		$('.pub-tc').slideDown();
		$('.pub-tc-close').click(function(){
			$('.pub-tc').slideUp();
		});
	}else if(location.href.match(/zhongkao.com/i) != null && location.href.search(/m.zhongkao/i) == -1){
		$('body').append('<div class="pub-tc"><div class="pub-tc-tit"><strong></strong><span class="pub-tc-close"><img src="http://img.eduuu.com/website/public_images/tc/tc_jzb_close.gif" width="9" height="8" alt="关闭" /></span></div><div class="pub-tc-con"><img src="http://img.eduuu.com/website/public_images/tc/tc20150310.gif" width="265" height="135" /></div></div>');
		$('.pub-tc').slideDown();
		$('.pub-tc-close').click(function(){
			$('.pub-tc').slideUp();
		});
	}
});*/