
/*

1.event.preventDefault() function - done
2. $.ready() function - done
3. select DOM elements with CSS selectors upon a user's click of the $.click() handler
*/
$( document ).ready(function() {
        console.log( "document loaded" );
    });

$("#blog-one").click(function(){
	$("#first-read-more-text").slideDown("fast");
});

function hideblog1link(){
	$("#blog-one").hide()
}

$("#blog-one").click(hideblog1link);

function replaceWith(){
	$("#replace-1").show()
}
$("#blog-one").click(replaceWith)

/*5. Show the second blog paragraph using slidedown and show.*/

$("#blog-two").click(function(){
	$("#second-read-more-text").slideDown("fast");
});

/*6. Hide the relevant "Read More" link using $.hide() */

function hideblog2link(){
	$("#blog-two").hide()
}
$("#blog-two").click(hideblog2link);

function replacewith(){
	$("#replace-2").show()
}
$("#blog-two").click(replacewith)

/** 7. Have the first blog text slide up and hide the 'read less' link using $.slideUp() and $.hide()
**/

$("#replace-1").click(function(){
	$("#first-read-more-text").slideUp();
});

/**8. Show the relevant read more link using $.show() */
function replaceWith001(){
	$("#blog-one").show()
}
$("#replace-1").click(replaceWith001)

function hidereplace1link(){
	$("#replace-1").hide()
}
$("#replace-1").click(hidereplace1link)

/**9. and 10. Repeat for the second blog.**/
$("#replace-2").click(function(){
	$("#second-read-more-text").slideUp();
});

function replaceWith002(){
	$("#blog-two").show()
}
$("#replace-2").click(replaceWith002)

function hidereplace2link(){
	$("#replace-2").hide()
}
$("#replace-2").click(hidereplace2link)



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




