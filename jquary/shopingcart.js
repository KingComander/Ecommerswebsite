// script.js

$(document).ready(function() {
    // Sample data for cart items, in a real scenario, this would be fetched from the server
    const cartItems = [
        {
            productImg: 'sample-product.jpg',
            productName: 'Sample Product',
            productPrice: 100,
            quantity: 1
        },
        // Add more items as needed
    ];

    // Function to render cart items
    function renderCartItems() {
        let html = '';
        cartItems.forEach(item => {
            html += `
                <tr class="table_row">
                    <td class="column-1">
                        <div class="how-itemcart1">
                            <img src="image/product/${item.productImg}" alt="IMG">
                        </div>
                    </td>
                    <td class="column-2 text-truncate p-r-11" style="max-width: 150px;">${item.productName}</td>
                    <td class="column-3">₹ ${item.productPrice}</td>
                    <td class="column-4">
                        <div class="wrap-num-product flex-w m-l-auto m-r-0">
                            <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                <i class="fs-16 zmdi zmdi-minus"></i>
                            </div>
                            <input class="mtext-104 cl3 txt-center num-product" type="number"
                                name="num-product1" value="${item.quantity}">
                            <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                <i class="fs-16 zmdi zmdi-plus"></i>
                            </div>
                        </div>
                    </td>
                    <td class="column-5">₹ ${item.productPrice * item.quantity}</td>
                </tr>
            `;
        });
        $('#cart-items').html(html);
    }

    // Render the cart items on page load
    renderCartItems();

    // Apply coupon button click event
    $('#apply-coupon').click(function() {
        let couponCode = $('#coupon-code').val();
        if (couponCode) {
            // Handle coupon application (e.g., validate and apply discount)
            alert(`Coupon ${couponCode} applied!`);
        } else {
            alert('Please enter a coupon code.');
        }
    });

    // Proceed to checkout button click event
    $('#checkout').click(function() {
        // Handle checkout logic
        alert('Proceeding to checkout...');
    });
});
