$(document).ready(function() {
// Fetch wishlist count from the API
$.ajax({
    url: '/api/wishlist', // Your API endpoint that returns wishlist data
    method: 'GET',
    dataType: 'json',
    success: function(response) {
        if (response.count > 0) {
            $('#wishlist-notification').text(response.count).show();
        } else {
            $('#wishlist-notification').hide();
        }
    },
    error: function() {
        console.error("Error fetching wishlist.");
    }
});

     // Simulated data for cart
     const cartUser = "usercart"; // Simulated user cart
     const cartExists = true; // Simulated check for the cart table existence
     let cartCount = 5; // Simulated cart item count

     if (cartExists) {
         // If cart exists, update the notify attribute
         $('.icon-header-noti').attr('data-notify', cartCount);
     } else {
         // If cart doesn't exist, remove notify attribute
         $('.icon-header-noti').removeAttr('data-notify');
     }

     
    // Check if user is logged in
    var username = localStorage.getItem('username');
    if (username) {
        $('#username').text(username);
    } else {
        $('#username').text('guest');
    }

    $('#userIcon').on('click', function() {
        window.location.href = 'login.html'; // Redirect to login page
    });

    $('#hamburger-menu-1').click(function () {
                $('#collapse-1').toggleClass('active');
    });

    $('#hamburger-menu-2').click(function () {
                $('#collapse-2').toggle();
    });


    // jQuery for sticky navbar effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // Handle card click
    $('.item').on('click', function() {
        // Remove 'clicked' class from all items
        $('.item').removeClass('clicked');
        $('.item .shop-now').hide(); // Hide 'Shop Now' for all items

        // Add 'clicked' class only to the clicked item
        $(this).addClass('clicked');
        $(this).find('.shop-now').show(); // Show 'Shop Now' for clicked item
    });

    // Hover effect for images
    $('.item').hover(
        function () {
            // On mouse enter, zoom the image
            $(this).find('img').css({
                'transform': 'scale(1.2)'
            });
        },
        function () {
            // On mouse leave, if not clicked, reset the zoom
            if (!$(this).hasClass('clicked')) {
                $(this).find('img').css({
                    'transform': 'scale(1)'
                });
            }
        }
    );
  

  // Quick View modal pop-up
            $('.js-show-modal1').on('click', function(event) {
                event.preventDefault();

                // Fetch product details
                var productImage = $(this).closest('.block2').find('img').attr('src');
                var productName = $(this).closest('.block2-txt').find('.product_name').text();
                var productPrice = $(this).closest('.block2-txt').find('.stext-105').text();

                // Fill modal with product details
                $('#quickViewModal .modal-body').html(`
                    <img src="${productImage}" alt="${productName}" style="width:100%;">
                    <h2>${productName}</h2>
                    <p>${productPrice}</p>
                `);

                // Show modal
                $('#quickViewModal').fadeIn();
            });

            // Close modal on close button click
            $('.close').on('click', function() {
                $('#quickViewModal').fadeOut();
            });

            // Add to Wishlist effect
            $('.js-addwish-b2').on('click', function() {
                var heartIcon = $(this).find('.icon-heart1');
                var heartFilledIcon = $(this).find('.icon-heart2');

                if (heartIcon.is(":visible")) {
                    heartIcon.hide();
                    heartFilledIcon.show();
                } else {
                    heartFilledIcon.hide();
                    heartIcon.show();
                }

                // Optionally send AJAX request to add/remove wishlist item
                // $.post("wishlist_config.php", {wish_product: $(this).closest('form').find('input[name="wish_product"]').val()});

                return false; // prevent form submission
            });

            
            
});