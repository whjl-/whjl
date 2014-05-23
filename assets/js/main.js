$(document).ready(function(){
	$(".box").one("mouseover", function() {
		$(".box").addClass('keyframeRun');
		$(".country").fadeOut("1s");
		$(".country").text("China");
		$(".country").fadeIn("1s");
	});
});