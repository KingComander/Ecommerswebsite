$(document).ready(function() {
    // Example jQuery code to handle pagination click
    $('.how-pagination1').on('click', function(e) {
        e.preventDefault();
        $('.how-pagination1').removeClass('active-pagination1');
        $(this).addClass('active-pagination1');
    });

    // Example: Search function (dummy function)
    $(".size-122").click(function() {
        const query = $(".stext-103").val();
        alert("Searching for: " + query);
    });
});