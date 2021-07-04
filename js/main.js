// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventdefault();

        const hash = this.hash;

        $('html, body').animate(
        {
            scrolltop: $(hash).offset().top - 0
        },
        1000
        );
    }
});