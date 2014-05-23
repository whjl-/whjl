$(document).ready(function(){
	$(".box").one("mouseover", function() {
		$(".box").addClass('keyframeRun');
		$(".country").fadeOut("3s");
		$(".country").text("China");
		$(".country").fadeIn("3s");
	});
});