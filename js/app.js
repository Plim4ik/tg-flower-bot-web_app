window.onload = function() {
    const cartButton = document.getElementById('go-to-cart');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', function() {
            let item = this.parentElement;
            let product = {
                name: item.getAttribute('data-name'),
                price: item.getAttribute('data-price'),
                img: item.getAttribute('data-img')
            };
            localStorage.setItem(product.name, JSON.stringify(product));
            cartButton.style.display = 'block';
        });
    });

    cartButton.addEventListener('click', function() {
        window.location.href = 'cart.html';
    });
};
