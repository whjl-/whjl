$(document).ready(function(){
	$(".box").one("mouseover", function() {
		$(".box").addClass('keyframeRun');
		$(".country").fadeOut('slow', function() {
			$(".country").text("China");
			$(".country").fadeIn("3s");
		});
	});
});