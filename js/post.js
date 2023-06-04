window.addEventListener('DOMContentLoaded', function() {
  const checkoutForm = document.querySelector('#checkout-form');

  checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let items = JSON.parse(localStorage.getItem('items') || '[]');

    let form_data = new FormData(checkoutForm);

    // Предполагая, что на сервере ожидается параметр 'items' в виде JSON-строки
    form_data.append('items', JSON.stringify(items));

    fetch('https://hiblakk.github.io/submit', {
      method: 'POST',
      body: form_data
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Если сервер успешно принял данные, перенаправляем на страницу 'success.html'
      window.location.href = 'https://hiblakk.github.io/success.html';
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  });
});
