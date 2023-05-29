// Обновляем видимость кнопки корзины
function updateCartButton() {
  const cartBtn = document.getElementById('cartBtn');
  cartBtn.style.display = cart.length > 0 ? 'block' : 'none';
}

// Функция для добавления товара в корзину
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCartButton();
}

// Обработчик события для кнопки корзины
document.getElementById('cartBtn').addEventListener('click', () => {
  // Сохраняем корзину в localStorage для доступа на странице корзины
  localStorage.setItem('cart', JSON.stringify(cart));
  // Переход на страницу корзины
  window.location.href = 'cart.html';
});
