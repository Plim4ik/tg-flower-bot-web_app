let quantities = [0, 0, 0, 0, 0, 0];

for(let i = 1; i <= 6; i++) {
    let addButton = document.getElementById('btn' + i);
    let subtractButton = document.getElementById('subtract-btn' + i);
    let increaseButton = document.getElementById('add-btn' + i);
    let quantityContainer = document.getElementById('quantity-container' + i);
    let quantityDisplay = document.getElementById('quantity' + i);

    addButton.addEventListener('click', function() {
        quantities[i-1]++;
        quantityDisplay.innerText = quantities[i-1];
        addButton.style.display = 'none';
        quantityContainer.style.display = 'inline';
    });

    subtractButton.addEventListener('click', function() {
        if (quantities[i-1]
