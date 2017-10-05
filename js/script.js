
/*RUBRIC

1.event.preventDefault() function - done
2. $.ready() function - done
3. select DOM elements with CSS selectors upon a user's click of the $.click() handler
*/

$("#blog-one").click(slidedown);

function slidedown(){
	$("#first-read-more-text").show()
}

/*4. Hide the relevant "Read More" link using $.hide()*/

function hideblog1link(){
	$("#blog-one").hide()
}

$("#blog-one").click(hideblog1link);

function replaceWith(){
	$(".replace").show()
}
$("#blog-one").click(replaceWith)

/*5. Show the second blog paragraph using slidedown and show.*/

$("#blog-two").click(slideDown);

function slideDown(){
	$("#second-read-more-text").show()
}

/*6. Hide the relevant "Read More" link using $.hide() */

function hideblog2link(){
	$("#blog-two").hide()
}
$("#blog-two").click(hideblog2link);

function replacewith(){
	$(".replace").show()
}
$("#blog-two").click(replacewith)

/*7. Have the first blog text slide up andd hide the 'read less' link using $.slideUp() and $.hide()
*/




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



// $("#blogtwo-show").click()




