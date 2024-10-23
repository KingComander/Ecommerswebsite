// script.js

$(document).ready(function() {
    // Sample data for cart items, in a real scenario, this would be fetched from the server
    const cartItems = [
        {
            productImg: 'item-cart-01.jpg',
            productName: 'Sample Product',
            productPrice: 100,
            quantity: 1
        },
        {
            productImg: 'item-cart-02.jpg',
            productName: 'Sample Product',
            productPrice: 200,
            quantity: 1
        },
        {
            productImg: 'item-cart-03.jpg',
            productName: 'Sample Product',
            productPrice: 100,
            quantity: 1
        },
        {
            productImg: 'item-cart-04.jpg',
            productName: 'Sample Product',
            productPrice: 200,
            quantity: 1
        },
        {
            productImg: 'item-cart-05.jpg',
            productName: 'Sample Product',
            productPrice: 200,
            quantity: 1
        },
        // Add more items as needed
    ];

// Function to render the cart dynamically
function renderCart() {
    let cartItems = $('#cart-items');
    cartItems.empty(); // Clear existing items

    cartData.forEach(item => {
        let total = item.product_price * item.quantity;
        cartItems.append(`
            <tr class="table_row">
                <td class="column-1">
                    <div class="how-itemcart1">
                        <img src="image/product/${item.product_img}" alt="IMG">
                    </div>
                </td>
                <td class="column-2 text-truncate p-r-11" style="max-width: 150px;">${item.product_name}</td>
                <td class="column-3">₹ ${item.product_price}</td>
                <td class="column-4">
                    <div class="wrap-num-product flex-w m-l-auto m-r-0">
                        <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onclick="updateQuantity(${item.id}, -1)">
                            <i class="bx bx-minus"></i>
                        </div>
                        <input class="mtext-104 cl3 txt-center num-product" type="number" value="${item.quantity}">
                        <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onclick="updateQuantity(${item.id}, 1)">
                            <i class="bx bx-plus"></i>
                        </div>
                    </td>
                <td class="column-5">₹ ${total}</td>
            </tr>
        `);
    });
}

// Function to update the quantity of products in the cart
function updateQuantity(productId, change) {
    cartData = cartData.map(item => {
        if (item.id === productId) {
            item.quantity = Math.max(1, item.quantity + change); // Ensure quantity is never less than 1
        }
        return item;
    });
    renderCart();
}

    renderCart(); // Initial render of the cart

    $('#apply-coupon').click(function () {
        let couponCode = $('#coupon-code').val();
        alert('Coupon applied: ' + couponCode);
    });

    $('#proceed-checkout').click(function () {
        alert('Proceeding to checkout...');
    });
});