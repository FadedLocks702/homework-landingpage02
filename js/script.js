

$( document ).ready(function() {
        console.log( "document loaded" );
    });

/////**The initial sliding down **//////

$("#blog-one").click(function(){
	$("#first-read-more-text").slideDown("fast");
});

///** Hiding the link after it goes down **//////////

function hideblog1link(){
	$("#blog-one").hide()
}

$("#blog-one").click(hideblog1link);

/////** Replacing the now hidden link with the new text **/////

function replaceWith(){
	$("#replace-1").show()
}
$("#blog-one").click(replaceWith)

//////** Repeating the same with the second blog entry **///////

$("#blog-two").click(function(){
	$("#second-read-more-text").slideDown("fast");
});

function hideblog2link(){
	$("#blog-two").hide()
}
$("#blog-two").click(hideblog2link);

function replacewith(){
	$("#replace-2").show()
}
$("#blog-two").click(replacewith)


$("#replace-1").click(function(){
	$("#first-read-more-text").slideUp("fast");
});

function replaceWith001(){
	$("#blog-one").show()
}
$("#replace-1").click(replaceWith001)

function hidereplace1link(){
	$("#replace-1").hide()
}
$("#replace-1").click(hidereplace1link)

$("#replace-2").click(function(){
	$("#second-read-more-text").slideUp("fast");
});

function replaceWith002(){
	$("#blog-two").show()
}
$("#replace-2").click(replaceWith002)

function hidereplace2link(){
	$("#replace-2").hide()
}
$("#replace-2").click(hidereplace2link)


// This was the initial assignment of what I was going to send after giving up on the assignment. Feel free to share thoughts on this older code. //
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




