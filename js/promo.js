document.addEventListener('DOMContentLoaded', function () {
    const applyPromoButton = document.getElementById('applyPromoButton');

    applyPromoButton.addEventListener('click', function () {
        // Получение значения промокода из поля ввода
        const promoInput = document.getElementById('promo');
        const promocode = promoInput.value;

        // Получение информации о букетах из скрытых полей формы
        const itemsInfo = document.querySelector("#items-info");
        const bouquetInputs = itemsInfo.querySelectorAll("input[name$='[name]']");
        const noInputs = itemsInfo.querySelectorAll("input[name$='[no]']");
        const bouquets = [];

        bouquetInputs.forEach((input, index) => {
            const name = input.value.trim();
            const amount = parseInt(noInputs[index].value); 
            if (!isNaN(amount)) {
                bouquets.push({ bouquete: name, amount: amount });
            }
        });

        // Пример отправки POST-запроса
        const url = 'https://plimrecords.com:8443/shop/calculate-cart-total';
        const requestData = {
            items: bouquets,
            tgid: '324123',
            promocode: promocode,
        };
        // Не трогать, проверка JSON
        console.log(requestData);

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
