$(document).ready(function(){

	//$('.ui.progress').progress();//随机默认
	/*
	$('.ui.progress').progress({
		percent:22,//默认22%
		total:10,  //分成10段
		text:{
			active:'Adding {left} of {total} photos',
			success:'{left} Photos Uploaded!',
			percent:'百分之：{percent}'
		}
	});*/
	/*
	{percent} Current percentage
	{value} Current value
	{total} Total value
	{left} Distance to total,or%progress left
	*/
	$('.ui.progress').progress({
	//autoSuccess:false//100%时无渐变效果
	precision:1//精度默认0
	});

	//回调函数使用
	$('.ui.progress').progress({
		total:10,
		onChange:function(percent,value,total){
			alert(percent);
			alert(value);
			alert(total);
		}
	});

	$('.ui.increment.button').on('click',function(){
		$('.ui.progress').progress('increment');
	});

	$('.ui.decrement.button').on('click',function(){
		$('.ui.progress').progress('decrement');
	});
});