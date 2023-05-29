// Сначала определим общее количество товаров
const totalItems = 6;

for(let i = 1; i <= totalItems; i++) {
    document.getElementById(`add-btn${i}`).addEventListener('click', function() {
        const quantityElement = document.getElementById(`quantity${i}`);
        let currentQuantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = ++currentQuantity;
    });

    document.getElementById(`subtract-btn${i}`).addEventListener('click', function() {
        const quantityElement = document.getElementById(`quantity${i}`);
        let currentQuantity = parseInt(quantityElement.innerText);
        if (currentQuantity > 0) {
            quantityElement.innerText = --currentQuantity;
        }
    });
}
