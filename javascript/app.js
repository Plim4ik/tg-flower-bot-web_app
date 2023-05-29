// Первым делом получаем все кнопки "Add" и кнопку корзины
let addButtons = document.querySelectorAll('.btn');
let cartButton = document.getElementById('cartButton');

// Затем проходимся по всем кнопкам "Add" и добавляем обработчики событий
addButtons.forEach((button) => {
  button.addEventListener('click', function () {
    // Получаем информацию о товаре
    let item = button.parentElement;
    let itemName = item.querySelector('span').textContent;

    // Сохраняем информацию о товаре в localStorage
    localStorage.setItem(itemName, itemName);

    // Обновляем состояние кнопки корзины
    updateCartButton();
  });
});

// Функция для обновления состояния кнопки корзины
function updateCartButton() {
  let items = Object.keys(localStorage);
  if (items.length > 0) {
    cartButton.style.display = 'block';
  } else {
    cartButton.style.display = 'none';
  }
}

// Обновляем состояние кнопки корзины при загрузке страницы
updateCartButton();
