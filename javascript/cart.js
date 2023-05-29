// Получаем корзину из localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для обновления отображения корзины
function updateCartDisplay() {
  const cartItemsDiv = document.getElementById('cartItems');
  cartItemsDiv.innerHTML = '';  // Очищаем текущее содержимое
  
  cart.forEach((item, index) => {
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <p>${item.name} - ${item.price} RUB</p>
        <button class="button" onclick="removeFromCart(${index})">Удалить</button>
      </div>
    `;
  });
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Обновляем отображение корзины при загрузке страницы
updateCartDisplay();
