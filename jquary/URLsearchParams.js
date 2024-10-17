$(document).ready(function() {
    $('.card-link').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        const card = $(this).closest('.card');
        const productId = card.data('id');
        const productTitle = card.data('title');
        const productPrice = card.data('price');
        
        // Create URLSearchParams
        const params = new URLSearchParams({
            id: productId,
            title: productTitle,
            price: productPrice
        });

        // Redirect to product details page
        window.location.href = `product-details.html?${params.toString()}`;
    });
});
