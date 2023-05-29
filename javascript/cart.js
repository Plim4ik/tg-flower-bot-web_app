// Получаем контейнер, в котором будут отображаться товары
let cartContainer = document.getElementById('cartContainer');

// Получаем все товары из localStorage
let items = Object.keys(localStorage);

// Для каждого товара создаем HTML-элемент и добавляем его в контейнер
items.forEach((item) => {
  let itemElement = document.createElement('div');
  itemElement.textContent = item;
  cartContainer.appendChild(itemElement);
});
