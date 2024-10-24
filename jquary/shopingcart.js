$(document).ready(function() {

    // Update Total Price when Quantity Changes
    function updateTotalPrice() {
        let total = 0;

        // Loop through each product row and update the total price
        $('.table_row').each(function() {
            const price = parseFloat($(this).find('.column-3').text().replace('₹', '').trim());
            const quantity = parseInt($(this).find('.num-product').val());
            const productTotal = price * quantity;

            // Update the total price for this product
            $(this).find('.column-5').text('₹ ' + productTotal.toFixed(2));

            // Add to the grand total
            total += productTotal;
        });

        // Update the grand total on the page
        $('#grand-total').text('₹ ' + total.toFixed(2));
    }

    // Increment Quantity
    $('.btn-num-product-up').on('click', function() {
        let quantityInput = $(this).siblings('.num-product');
        let newQuantity = parseInt(quantityInput.val()) + 1;
        quantityInput.val(newQuantity);
        updateTotalPrice();
    });

    // Decrement Quantity
    $('.btn-num-product-down').on('click', function() {
        let quantityInput = $(this).siblings('.num-product');
        let newQuantity = parseInt(quantityInput.val()) - 1;
        if (newQuantity >= 1) {
            quantityInput.val(newQuantity);
            updateTotalPrice();
        }
    });

    // Apply Coupon Code (Sample Logic)
    $('.apply-coupon').on('click', function() {
        const couponCode = $('input[name="coupon"]').val().trim();
        let grandTotal = parseFloat($('#grand-total').text().replace('₹', '').trim());

        // Example coupon: "DISCOUNT10" gives 10% off
        if (couponCode === "DISCOUNT10") {
            const discount = grandTotal * 0.1;
            grandTotal -= discount;
            $('#grand-total').text('₹ ' + grandTotal.toFixed(2));
            alert("Coupon applied! You received 10% off.");
        } else {
            alert("Invalid coupon code.");
        }
    });

    // Checkout process
    $('.checkout').on('click', function() {
        // Gather cart data
        let cartItems = [];
        $('.table_row').each(function() {
            const productName = $(this).find('.column-2').text().trim();
            const price = parseFloat($(this).find('.column-3').text().replace('₹', '').trim());
            const quantity = parseInt($(this).find('.num-product').val());
            const total = parseFloat($(this).find('.column-5').text().replace('₹', '').trim());

            // Add item data to the cartItems array
            cartItems.push({
                productName: productName,
                price: price,
                quantity: quantity,
                total: total
            });
        });

        // Calculate Grand Total
        let grandTotal = $('#grand-total').text().replace('₹', '').trim();

        // Store cart data and grand total in localStorage to pass it to process_checkout.html
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('grandTotal', grandTotal);

        // Redirect to process_checkout.html
        window.location.href = 'process_checkout.html';
    });

    // Initial Calculation of Total Price
    updateTotalPrice();

});


const products = [
            { id: 1, name: "Product 1", price: 1000, image: "/png/product-01.jpg" },
            { id: 1, name: "Product 1", price: 1000, image: "/png/product-01.jpg" },
            { id: 2, name: "Product 2", price: 1500, image: "/png/product-02.jpg" }
        ];

        function renderCart() {
            const table = $('#cart-table');

            products.forEach(product => {
                const row = `
                    <tr class="table_row">
                        <td class="column-1">
                            <div class="how-itemcart1">
                                <img src="${product.image}" alt="IMG">
                            </div>
                        </td>
                        <td class="column-2 text-truncate p-r-11" style="max-width: 150px;">${product.name}</td>
                        <td class="column-3">₹ ${product.price}</td>
                        <td class="column-4">
                            <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onclick="updateQuantity(${product.id}, -1)">
                                    <i class='bx bx-minus'></i>
                                </div>
                                <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product${product.id}" value="1" min="1" onchange="updateTotal(${product.id}, this.value)">
                                <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onclick="updateQuantity(${product.id}, 1)">
                                    <i class='bx bx-plus'></i>
                                </div>
                            </div>
                        </td>
                        <td class="column-5" id="total-${product.id}">₹ ${product.price}</td>
                    </tr>
                `;
                table.append(row);
            });
            updateGrandTotal();
        }

        function updateQuantity(productId, change) {
            const input = $(`input[name='num-product${productId}']`);
            let currentQuantity = parseInt(input.val());
            currentQuantity = Math.max(1, currentQuantity + change);
            input.val(currentQuantity);
            updateTotal(productId, currentQuantity);
        }

        function updateTotal(productId, quantity) {
            const product = products.find(p => p.id === productId);
            const total = product.price * quantity;
            $(`#total-${productId}`).text(`₹ ${total}`);
            updateGrandTotal();
        }

        function updateGrandTotal() {
            let grandTotal = 0;
            products.forEach(product => {
                const quantity = parseInt($(`input[name='num-product${product.id}']`).val());
                grandTotal += product.price * quantity;
            });
            $('#grand-total').text(`₹ ${grandTotal}`);
        }

        $(document).ready(function() {
            renderCart();
        });