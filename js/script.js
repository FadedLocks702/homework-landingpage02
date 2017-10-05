
// by default, blog one is expanded



// $(document).ready(function(){
// 	$("#blogone-hide").click(function(){
// 		event.preventDefault();

// 		var $this = $(this);
// 		$this.toggleClass("#blogone-hide");
// 		if($this.hasClass("#blogone-hide")){
// 			$this.text('Read more');

// 		} else {
// 			$this.text('Read less');
// 		}

// 		$("#first-read-more-text").slideToggle();
// 	});
// });
// // by default, blog two is collapsed

// $(document).ready(function(){
// 	$("#blogtwo-show").click(function(){
// 		event.preventDefault();

// 		var $this = $(this);
// 		$this.toggleClass("#blogtwo-show");
// 		if($this.hasClass("#blogtwo-show")){
// 			$this.text('Read less');

// 		} else {
// 			$this.text('Read more');
// 		}

// 		$("#second-read-more-text").slideToggle();
// 	});
// });

/*RUBRIC

1.event.preventDefault() function - done
2. $.ready() function - done
3. select DOM elements with CSS selectors upon a user's click of the $.click() handler
*/

$("#blogone-hide").click(slideDown);

function slideDown(){
	$("#first-read-more-text").show()
}

function hideblog1text(){
	$("#blogone-hide").hide()
}

$("#blogone-hide").click(hideblog1text);

// $("#blogtwo-show").click()




