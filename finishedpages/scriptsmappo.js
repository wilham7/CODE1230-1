
/*
var el = document.getElementById();

function fadeIn(el) {
  el.style.opacity = 0;

  
  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.01;
    

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}

fadeIn(el);
*/

/*
$(document).ready(function() {

	function fadeIn() {
		$("body").fadeIn()
	}

	function prevPage(page) {
		// Does animation stuff and goes to prev page
		$("body").fadeOut();
	}

	function nextPage(page) {
		// Does animation stuff and goes to next page
		$("body").fadeOut();
	}
}
*/

$(document).ready(function() {
    $('#body').fadeIn(300);
	$(".arrow").click(function(){
        $("body").fadeOut(300);
		var location = $(this).attr("alt");
		setTimeout(function() {
			$("body").fadeOut(300);
			console.log("hey");
			console.log(location);
			console.log("there");
			window.location.href = location;
		}, 300);
    });
});