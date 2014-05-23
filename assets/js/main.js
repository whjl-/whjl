$(document).ready(function(){
	$(".box").one("mouseover", function() {
		$(".box").addClass('keyframeRun');
		$(".country").fadeOut("3s");
		$(selector).fadeOut('slow', function() {
			$(".country").text("China");
			$(".country").fadeIn("3s");
		});
	});
});