$('#about .nav-item .nav-link').click(function(event) {
    event.preventDefault();
    if ($(this).hasClass('active')) return;

    $('#about .nav-item .nav-link').each(function(i) {
        $(this).removeClass('active');
    })
    var number = $('#about .nav-item .nav-link').toArray().indexOf(this);
    $(this).addClass('active');

    $('#about .card-body .card-body-section').each(function() {
        $(this).hide();
    })

    $($('#about .card-body .card-body-section')[number]).fadeIn('slow');
})

$("#mainNav a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 400);
    
 $(".navbar-collapse").collapse("hide");

});

