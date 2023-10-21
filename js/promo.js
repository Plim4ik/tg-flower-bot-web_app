document.addEventListener('DOMContentLoaded', function () {
    const applyPromoButton = document.getElementById('applyPromoButton');

    applyPromoButton.addEventListener('click', function () {
        // Получение значения промокода из поля ввода
        const promoInput = document.getElementById('promo');
        const promocode = promoInput.value;

        // Пример отправки POST-запроса
        const url = 'http://212.109.194.133:8888/shop/calculate-cart-total';
        const requestData = {
            items: [
                { bouquete: 'Васаби', amount: 2 },
                { bouquete: 'Вуаяж', amount: 1 },
            ],
            tgid: '463863956',
            promocode: promocode, 
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(`Ошибка: ${response.status}`);
            }
        })
        .then(result => {
            const totalPrice = result.total_price;
            console.log(`Общая стоимость: ${totalPrice}`);
        })
        .catch(error => {
            console.error(error);
        });
    });
});
