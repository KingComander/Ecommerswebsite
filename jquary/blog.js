$(document).ready(function() {
    // Example jQuery code to handle pagination click
    $('.how-pagination1').on('click', function(e) {
        e.preventDefault();
        $('.how-pagination1').removeClass('active-pagination1');
        $(this).addClass('active-pagination1');
    });
});