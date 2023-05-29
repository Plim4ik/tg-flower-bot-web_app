// Сначала определим общее количество товаров
const totalItems = 6;

for(let i = 1; i <= totalItems; i++) {
    const addButton = document.getElementById(`btn${i}`);
    const subtractButton = document.getElementById(`subtract-btn${i}`);
    const quantityElement = document.getElementById(`quantity${i}`);

    addButton.addEventListener('click', function() {
        addButton.style.display = 'none';
        subtractButton.style.display = 'inline-block';
        quantityElement.innerText = 1;
        quantityElement.style.display = 'inline-block';
    });

    subtractButton.addEventListener('click', function() {
        let currentQuantity = parseInt(quantityElement.innerText);
        if (currentQuantity > 1) {
            quantityElement.innerText = --currentQuantity;
        } else {
            addButton.style.display = 'inline-block';
            subtractButton.style.display = 'none';
            quantityElement.style.display = 'none';
        }
    });
}
