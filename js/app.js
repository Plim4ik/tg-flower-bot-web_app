// Add event listener for cart button
document.getElementById('cartButton').addEventListener('click', function() {
    // Redirect to cart page
    window.location.href = 'cart.html';
});

let cart = [];

// Add event listeners to "Add" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Get parent product element
        let product = button.parentElement;
        let productId = product.id;

        // Hide "Add" button and show item counter
        button.style.display = 'none';
        let itemCounter = product.querySelector('.item-counter');
        itemCounter.style.display = 'block';

        // Initialize quantity to 1
        let quantityElement = itemCounter.querySelector('.quantity');
        quantityElement.textContent = '1';

        // Add product to cart
        cart.push({
            id: productId,
            quantity: 1
        });

        // Show cart button if hidden
        let cartButton = document.getElementById('cartButton');
        if (cartButton.style.display === 'none') {
            cartButton.style.display = 'block';
        }
    });
});

// Add event listeners to "+" buttons
document.querySelectorAll('.item-counter .add').forEach(button => {
    button.addEventListener('click', function() {
        // Increase quantity
        let quantityElement = button.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = (quantity + 1).toString();

        // Update quantity in cart
        let productId = button.parentElement.parentElement.id;
        let cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        }
    });
});

// Add event listeners to "-" buttons
document.querySelectorAll('.item-counter .subtract').forEach(button => {
    button.addEventListener('click', function() {
        // Decrease quantity
        let quantityElement = button.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = (quantity - 1).toString();

            // Update quantity in cart
            let productId = button.parentElement.parentElement.id;
            let cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity--;
            }
        } else {
            // Hide item counter and show "Add" button
            let product = button.parentElement.parentElement;
            button.parentElement.style.display = 'none';
            product.querySelector('.add-to-cart').style.display = 'block';

            // Remove product from cart
            let productId = product.id;
            cart = cart.filter(item => item.id !== productId);

            // Hide cart button if cart is empty
            if (cart.length === 0) {
                document.getElementById('cartButton').style.display = 'none';
            }
        }
    });
});



