
// by default, blog one is expanded

$(document).ready(function(){
	$("#blogone-hide").click(function(){
		$("#blogone-paragraph").slideToggle();
	});
});
// by default, blog two is collapsed

$(document).ready(function(){
	$("#blogtwo-show").click(function(){
		$("#blogtwo-extend").slideToggle();
	});
});

// when user clicks on the first 'read less' then the respective article collpases and the 'read more' link changes to 'read less'


// when user clicks on the second 'read more' then the respective article collpases and the 'read less' link changes to 'read more'


