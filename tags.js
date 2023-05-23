// Получаем все кнопки фильтра
const filterButtons = document.querySelectorAll('.filter-btn');

// Получаем все блоки item
const items = document.querySelectorAll('.item');

// Добавляем обработчик событий для каждой кнопки фильтра
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tag = button.dataset.tag; // Получаем значение тега из data-атрибута кнопки

    // Проверяем, активна ли уже кнопка
    const isActive = button.classList.contains('active');

    // Удаляем класс 'active' у всех кнопок
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Показываем все товары при повторном нажатии на активный тег
    if (isActive) {
      items.forEach(item => {
        item.style.display = 'block'; // Отображаем блок item
      });
    } else {
      // Добавляем класс 'active' к нажатой кнопке
      button.classList.add('active');

      // Скрываем все блоки item
      items.forEach(item => {
        item.style.display = 'none'; // Скрываем блок item
      });

      // Показываем только блоки item с соответствующим тегом
      const filteredItems = document.querySelectorAll(`.item[data-tags*="${tag}"]`);
      filteredItems.forEach(item => {
        item.style.display = 'block'; // Отображаем блок item
      });
    }
  });
});
