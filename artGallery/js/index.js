//title animation
$(function() {
    setTimeout(function() {
        $('.flyInText').removeClass('hidden');
    }, 500);

	$('#navBtn').click(function() {
        var toggleWidth = $('#navContent').width() == 650 ? "0" : "650px";
		$('#navContent').animate({width: toggleWidth }, 1000);
	});

});
