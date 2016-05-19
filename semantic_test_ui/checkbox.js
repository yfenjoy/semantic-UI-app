$(document).ready(function() {
	// body...
    //$('.ui.checkbox').checkbox();
    //行为(Behavior)使用方法
   // $('.ui.checkbox').checkbox('toggle');
    //$('.ui.checkbox').checkbox('check');
    //$('.ui.checkbox').checkbox('set indeterminate');
    /*
    $('.ui.checkbox').checkbox('set determinate');
    $('.ui.checkbox').checkbox('attach events', '.toggle.button');
	$('.ui.checkbox').checkbox('attach events', '.check.button', 'check');
	$('.ui.checkbox').checkbox('attach events', '.uncheck.button', 'uncheck');
	*/
	/*
	$('.ui.checkbox').checkbox({
		//uncheckable:true
		uncheckable:false
	});*/
	/*
    $('.ui.checkbox').checkbox({
		onChange:function(){
			alert('onChange');
		}	
	});*/

	 $('.ui.checkbox').checkbox({
		beforeChecked:function(){
			alert('beforeChecked');
			return false
		}	
	});
});