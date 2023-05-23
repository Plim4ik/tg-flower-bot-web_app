// Получаем все кнопки фильтра
const filterButtons = document.querySelectorAll('.filter-btn');

// Получаем все блоки item
const items = document.querySelectorAll('.item');

// Добавляем обработчик событий для каждой кнопки фильтра
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tag = button.dataset.tag; // Получаем значение тега из data-атрибута кнопки

    // Удаляем класс 'active' у всех кнопок
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Добавляем класс 'active' к нажатой кнопке
    button.classList.add('active');

    // Показываем только блоки item с соответствующим тегом или скрываем все блоки item при отсутствии тега
    items.forEach(item => {
      const itemTags = item.dataset.tags; // Получаем значение тегов из data-атрибута блока item
      if (itemTags.includes(tag)) {
        item.style.display = 'block'; // Отображаем блок item
      } else {
        item.style.display = 'none'; // Скрываем блок item
      }
    });
  });
});
