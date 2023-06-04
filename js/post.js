document.querySelector('#checkout-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращает перезагрузку страницы

  // Выполняем POST-запрос с данными формы
  fetch('https://hiblakk.github.io/cart.html', {
    method: 'POST',
    body: new FormData(event.target), // event.target ссылается на форму
  })
  .then(function(response) {
    // Проверяем, что запрос успешно выполнен
    if (response.ok) {
      // Перенаправляем пользователя на страницу success.html
      window.location = 'success.html';
    } else {
      throw new Error('Request failed: ' + response.status);
    }
  })
  .catch(function(error) {
    console.error(error);
  });
});
