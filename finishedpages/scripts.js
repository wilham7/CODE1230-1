
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

window.onload = function(){ 

dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

};