$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('#navbar_top').css({ 'background-color': '#161616', opacity: '100%' });
    } else {
        $('#navbar_top').css({ 'background-color': 'rgba(0, 0, 0, 0)' });
    }
});
