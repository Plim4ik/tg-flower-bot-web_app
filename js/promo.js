document.addEventListener('DOMContentLoaded', function () {
    const applyPromoButton = document.getElementById('applyPromoButton');

    applyPromoButton.addEventListener('click', function () {
        const promoInput = document.getElementById('promo');
        const promocode = promoInput.value;


        const cartItems = document.querySelector("#cart-items");
        cartItems.querySelectorAll("h3").forEach(function (element) {
            element.remove();
        });

        // Получение значения tgid из скрытого поля на странице cart.html
        const tgidInput = document.querySelector("input[name='tgid']");
        const tgid = tgidInput.value;

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
            tgid: tgid, // Используем значение tgid из скрытого поля
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

                    if (promocode.trim() === '') {
                        alert('Поле промокода не должно быть пустым.');
                        const h3Total = document.createElement("h3");
                        h3Total.innerHTML = `Итого: ${totalAfterDiscount} руб`;
                        cartItems.appendChild(h3Total);
                        return;
                    }

                    if (promocodeApplied) {
                        const h3Total = document.createElement("h3");
                        h3Total.innerHTML = `Итого: ${totalAfterDiscount} руб`;
                        cartItems.appendChild(h3Total);
                    
                        const h3Discount = document.createElement("h3");
                        h3Discount.innerHTML = `Цена до скидки: ${totalBeforeDiscount} руб`;
                        h3Discount.style.textDecoration = "line-through";
                        cartItems.appendChild(h3Discount);    
                    } else {
                        const h3Total = document.createElement("h3");
                        h3Total.innerHTML = `Итого: ${totalAfterDiscount} руб`;
                        cartItems.appendChild(h3Total);
                    }

                    if (promocodeApplied) {
                        alert("Промокод применен.");
                    } else {
                        alert("Промокод недействителен или не существует.");
                    }
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