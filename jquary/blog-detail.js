 $(document).ready(function() {
            // Add a smooth scroll effect for anchors
            $('a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            });

            // Toggle the search bar visibility
            $('.bx-search').on('click', function() {
                $('.bor19').toggleClass('active');
            });
        });