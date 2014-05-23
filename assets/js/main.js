$(document).ready(function(){
	$(".box").one("mouseover", function() {
		$(".box").addClass('keyframeRun');
		$(".country").fadeIn().text("China");
	});
});