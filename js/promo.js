document.addEventListener('DOMContentLoaded', function () {
    const applyPromoButton = document.getElementById('applyPromoButton');
    
    applyPromoButton.addEventListener('click', function () {
        // Получение значения промокода из поля ввода
        const promoInput = document.getElementById('promo');
        const promocode = promoInput.value;

        // Получение информации о букетах из скрытых полей формы
        const itemsInfo = document.querySelector("#items-info");
        const bouquetInputs = itemsInfo.querySelectorAll("input[name^='items']");
        const bouquets = [];

        bouquetInputs.forEach(input => {
            const name = input.value;
            const amountInput = itemsInfo.querySelector(`input[name='${input.name.replace('name', 'no')}']`);
            const amount = amountInput.value;
            bouquets.push({ bouquet: name, amount: parseInt(amount) });
        });

        // Пример отправки POST-запроса
        const url = 'https://plimrecords.com:8443/shop/calculate-cart-total';
        const requestData = {
            items: bouquets,
            tgid: '463863956',
            promocode: promocode,
        };

        // Отправка запроса с данными
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Обработка ответа от сервера
            console.log(data);
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    });
});
