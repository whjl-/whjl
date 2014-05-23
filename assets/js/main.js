$(document).ready(function(){
	$(".box").one("mouseover", function() {
		$(".box").addClass('keyframeRun');
		$(".country").fadeOut("3s");
		$(".country").fadeOut('slow', function() {
			$(".country").text("China");
			$(".country").fadeIn("3s");
		});
		$(".cross").fadeIn("3s");
	});
});