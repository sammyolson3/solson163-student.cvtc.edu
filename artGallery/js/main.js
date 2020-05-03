//nav animation
$(function() {
	$('#navBtn').click(function() {
        var toggleWidth = $('#navContent').width() == 0 ? "650px" : "0px";
		$('#navContent').animate({width: toggleWidth }, 1000);
	});

});
