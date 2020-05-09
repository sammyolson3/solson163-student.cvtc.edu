$(document).ready(function(){
	$('.navBtn').click(function(){
		$(this).toggleClass('open');
	});
});

function show() {
    document.getElementById('sideNav').classList.toggle('active');
}

