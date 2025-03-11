
//var lastTag = 'schlist_div';
//tabsC_D('.yxkTit','.yxkCon','yxkOn');
//
//function tabsC_D(tabTit,tabCon,on){
//	var _on=$(tabTit).find('.'+on);
//	var _i=$(tabTit).children().index(_on[0]);
//	$(tabCon).each(function(){
//		$(this).children().eq(_i).show();
//	});
//	$(tabTit).children().click(function(){
//		if($(this).attr('id') == lastTag){
//			var url = "http://college.gaokao.com/"+$(this).attr('id');
//			$('#newWindows').attr('action',url.substr(0,url.length-4)+'/');
//			$('#newWindows').submit();
//		}else{
//			$(this).addClass(on).siblings().removeClass(on);
//			var index = $(tabTit).children().index(this);
//			$(tabCon).children().eq(index).show().siblings().hide();
//		}
//		lastTag = $(this).attr('id');
//	});	
//}



function gotourl(type,place){

var p1='',p2='',p3='',p4='',p5='';

switch(type)
{

case 'schpoint':
	if($("#stuarea_"+place).val()!=''){
		p1 = '/a'+$("#stuarea_"+place).val();
	}
	if($("#stusub_"+place).val()!=''){
		p2 = '/s'+$("#stusub_"+place).val();
	}
	if($("#schid_"+place).val()!=''){
		p3 = '/c'+$("#schid_"+place).val();
	}
	if($("#scharea_"+place).val()!=''){
		p4 = '/b'+$("#scharea_"+place).val();
	}
	break;

case 'spepoint':
	if($("#stuarea_"+place).val()!=''){
		p1 = '/a'+$("#stuarea_"+place).val();
	}
	if($("#stusub_"+place).val()!=''){
		p2 = '/s'+$("#stusub_"+place).val();
	}
	if($("#year_"+place).val()!=''){
		p3 = '/y'+$("#year_"+place).val();
	}
	if($("#spename_"+place).val()!='' && $("#spename_"+place).val()!='רҵ����'){
		p4 = '/n'+$("#spename_"+place).val();
	}
	if($("#schname_"+place).val()!='' && $("#schname_"+place).val()!='רҵ����'){
		p5 = '/o'+$("#schname_"+place).val();
	}
	break;

case 'areapoint':
	if($("#stuarea_"+place).val()!=''){
		p1 = '/a'+$("#stuarea_"+place).val();
	}
	if($("#stusub_"+place).val()!=''){
		p2 = '/s'+$("#stusub_"+place).val();
	}
	if($("#year_"+place).val()!=''){
		p3 = '/y'+$("#year_"+place).val();
	}
	break;

case 'schlist':
	if($("#scharea_"+place).val()!=''){
		p1 = '/a'+$("#scharea_"+place).val();
	}
	if($("#schcat_"+place).val()!=''){
		p2 = '/c'+$("#schcat_"+place).val();
	}
//	if($("#schsty_"+place).val()!=''){
//		p3 = '/s'+$("#schsty_"+place).val();
//	}
//	if($("#schname_"+place).val()!='' && $("#schname_"+place).val()!='锟斤拷锟斤拷锟斤拷院校锟斤拷锟�'){
//		p4 = '/n'+$("#schname_"+place).val();
//	}
	break;

case 'spelist':
	if($("#spebig_"+place).val()!=''){
		p1 = '/b'+$("#spebig_"+place).val();
	}
	if($("#spesma_"+place).val()!=''){
		p2 = '/s'+$("#spesma_"+place).val();
	}
	if($("#spename_"+place).val()!='' && $("#spename_"+place).val()!='רҵ����'){
		p3 = '/n'+$("#spename_"+place).val();
	}
	break;
case 'scorelist':
	if($("#scharea"+place).val()!=''){
		p1 = '-city-'+$("#scharea_"+place).val();
	}
	if($("#stusub_"+place).val()!=''){
		p2 = '-type-'+$("#stusub_"+place).val();
	}
	if($("#score_"+place).val()!='' && $("#score_"+place).val()!='רҵ����'){
		p3 = '-score-'+$("#score_"+place).val();
	}
	p4='-submit-1.html';
	break;
}

var url = "http://college.gaokao.com/"+type+p1+p2+p3+p4+p5;
var urlN= "http://www.gaokaopai.com/fenshuxian-chaxun"+p1+p2+p3+p4;
	if(type!='scorelist'){
		$('#newWindows').attr('action',url);
		$('#newWindows').submit();
	}else{
		$('#newWindows').attr('action',urlN);
		$('#newWindows').submit();
	}
}

$(document).ready(function(){


$.getJSON("http://college.gaokao.com/json/area?callback=?",function(data){ 
//	$("#stuarea_l1").html(data.json);
//	$("#scharea_l1").html(data.json);
//	$("#stuarea_l2").html(data.json);
    $("#scharea_b1").html(data.json);	
    $("#scharea_b4").html(data.json);
	$("#stuarea_b4").html(data.json);
	$("#stuarea_b5").html(data.json);
	$("#stuarea_b6").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/subject?callback=?",function(data){
//	$("#stusub_l1").html(data.json);
//	$("#stusub_l2").html(data.json);
//	$("#stusub_l3").html(data.json);
	$("#stusub_b4").html(data.json);
	$("#stusub_b5").html(data.json);
    $("#stusub_b6").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/category?callback=?",function(data){ 
	$("#schcat_b1").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/style?callback=?",function(data){ 
	$("#schsty_b1").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/speciality?callback=?",function(data){ 
	$("#spebig_b2").html(data.json);
});


$("#scharea_l1").change(function(){
	$.getJSON("http://college.gaokao.com/json/school?aid="+$("#scharea_l1").val()+"&callback=?",function(data){ 
		$("#schid_l1").html(data.json);
	});
});


$('#score_b3').change(function(){
	if($(this).val()>=1000){
		alert('��������');
	}
});
$("#scharea_b4").change(function(){
	$.getJSON("http://college.gaokao.com/json/school?aid="+$("#scharea_b4").val()+"&callback=?",function(data){ 
		$("#schid_b4").html(data.json);
	});
});


$("#spebig_b2").change(function(){
	
	$.getJSON("http://college.gaokao.com/json/speciality?pid="+$("#spebig_b2").val()+"&callback=?",function(data){ 

		$("#spesma_b2").html(data.json);
	});
});





$("#schlist_b1").click(function(){
	gotourl('schlist','b1');
});
$("#spelist_b2").click(function(){
	gotourl('spelist','b2');
});

$("#scorelist_b3").click(function(){
	gotourl('scorelist','b3');
});




$("#schpoint_l1").click(function(){
	gotourl('schpoint','l1');
});
$("#spepoint_l2").click(function(){
	gotourl('spepoint','l2');
});
$("#areapoint_l3").click(function(){
	gotourl('areapoint','l3');
});



$("#schpoint_b4").click(function(){
	gotourl('schpoint','b4');
});

$("#spepoint_b5").click(function(){
	gotourl('spepoint','b5');
});


$("#areapoint_b6").click(function(){
	gotourl('areapoint','b6');
});

var lastClick = '';
var flagClick = 0;
$("body").click(function(){
	flagClick++;
});
$("#click_b1").click(function(){
	lastClick = 'b1';
	flagClick = -1;
});
$("#click_b2").click(function(){
	lastClick = 'b2';
	flagClick = -1;
});
$("#click_b3").click(function(){
	lastClick = 'b3';
	flagClick = -1;
});
$("#click_b4").click(function(){
	lastClick = 'b4';
	flagClick = -1;
});
$("#click_b5").click(function(){
	lastClick = 'b5';
	flagClick = -1;
});
$("#click_l1").click(function(){
	lastClick = 'l1';
	flagClick = -1;
});
$("#click_l2").click(function(){
	lastClick = 'l2';
	flagClick = -1;
});
$("#click_l3").click(function(){
	lastClick = 'l3';
	flagClick = -1;
});


$('body').bind('keydown', function (e) {
	var key = e.which;
	if(key==13 && flagClick<1){
		switch(lastClick){
			case 'b1':
				gotourl('schlist','b1');
				return false;
				break;
			case 'b2':
				gotourl('spelist','b2');
				return false;
				break;
			case 'b3':
				gotourl('scorelist','b3');
				return false;
				break;
			case 'b4':
				gotourl('schpoint','b4');
				return false;
				break;
			case 'b5':
				gotourl('spepoint','b5');
				return false;
				break;
			case 'b6':
				gotourl('areapoint','b6');
				return false;
				break;
			case 'l1':
				gotourl('schpoint','l1');
				return false;
				break;
			case 'l2':
				gotourl('spepoint','l2');
				return false;
				break;
			case 'l3':
				gotourl('areapoint','l3');
				return false;
				break;
			default:
				break;
		}
	}
});

});