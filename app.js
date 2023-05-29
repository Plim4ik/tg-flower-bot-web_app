let cart = [];

btn1.addEventListener("click", function () {
    addToCart({ name: 'Flower 1', price: 1200 });
    tg.MainButton.setText("Вы выбрали товар 1!");
    tg.MainButton.show();
});

// Аналогично для остальных кнопок...

function addToCart(item) {
    cart.push(item);
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(JSON.stringify(cart));
});
