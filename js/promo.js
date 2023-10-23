document.addEventListener('DOMContentLoaded', function () {
    const applyPromoButton = document.getElementById('applyPromoButton');

    applyPromoButton.addEventListener('click', function () {
        // Получение значения промокода из поля ввода
        const promoInput = document.getElementById('promo');
        const promocode = promoInput.value;

        if (promocode.trim() === '') {
            alert('Поле промокода не должно быть пустым.');
            return; // Прекратить выполнение функции
        }

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

        const url = 'https://plimrecords.com:8443/shop/calculate-cart-total';
        const requestData = {
            items: bouquets,
            tgid: '463863956',
            promocode: promocode,
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json()
                .then(data => {
                    const requestDataServer = data;
                    console.log(requestDataServer);

                    // Обновление информации на веб-странице
                    const totalBeforeDiscount = requestDataServer.total_price_before_discount;
                    const totalAfterDiscount = requestDataServer.total_price;
                    const promocodeApplied = requestDataServer.promocode_applied;
                    console.log(totalAfterDiscount);
                    console.log(totalBeforeDiscount);

                })
                .catch(error => {
                    console.log('Ошибка при обработке ответа:', error);
                });
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    });
});
