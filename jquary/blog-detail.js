$(document).ready(function() {
    // Example jQuery code to handle tags click
    $('.hov-tag1').on('click', function(e) {
        e.preventDefault();
        // Toggle active class or perform any other action
        $(this).toggleClass('active-tag');
    });

    // Example jQuery code for smooth scroll to top
    $('.scroll-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});