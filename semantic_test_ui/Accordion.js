$(document).ready(function(){	
	//初始化
	//$('.ui.accordion').accordion();
	//refresh几乎没用，和默认差不多
    //$('.ui.accordion').accordion('refresh');
    //打开索引对应的折叠控件open对应title项数
    //$('.ui.accordion').accordion('open',1);
    //开关效果
    //$('.ui.accordion').accordion('toggle'，1);
    //同一时间只能打开一节可以多个折叠项打开
   /* $('.ui.accordion').accordion({
        exclusive:false
    });*/
    /*允许活跃的节折叠起来,无开关效果
    $('.ui.accordion').accordion({
        collapsible:false
    });*/
    /*默认没什么用
    $('.ui.accordion').accordion({
        on:'click'
    });*/
    /*可以实现点击调用方法
    var handler ={
    	do1:function(){
    		alert('do1');
    	},
    	do2:function(){
    		alert('do2');
    	}
    }
    $('.ui.accordion').on('click',handler.do1)
     */
    /*动画时间
    $('.ui.accordion').accordion({
        duration:3000
    });*/
    /*回调函数
    $('.ui.accordion').accordion({
        onChange:function(){
        	alert('onChange');
        }
    });*/
    //特殊使用规则：点击icon出效果
    $('.ui.accordion').accordion({
            selector:{
            	trigger:'.title .icon'
        },
        debug:true//调试
    });
})