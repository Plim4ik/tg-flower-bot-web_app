window.onload = function() {
    const cartItems = document.getElementById('cart-items');

    for(let i = 0; i < localStorage.length; i++) {
        let productName = localStorage.key(i);
        let product = JSON.parse(localStorage.getItem(productName));

        let productElement = document.createElement('div');
        productElement.classList.add('product');

        let productImage = document.createElement('img');
        productImage.src = product.img;
        productImage.alt = product.name;

        let productTitle = document.createElement('span');
        productTitle.innerText = `${product.name} • ${product.price} RUB`;

        productElement.appendChild(productImage);
        productElement.appendChild(productTitle);
        cartItems.appendChild(productElement);
    }
};
