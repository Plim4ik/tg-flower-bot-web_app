window.addEventListener("load", function (e) {
  const cartItems = document.querySelector("#cart-items");

  if (JSON.parse(localStorage.getItem("items")) !== null) {
    let no = 0;
    let fullPrice = 0;
    const h3 = document.createElement("h3");
    JSON.parse(localStorage.getItem("items")).map((data) => {
      no = no + Number(data.no);
      fullPrice =
        Number(fullPrice) + Number(Number(data.price) * Number(data.no));
      const cartProduct = document.createElement("div");
      const ImageProduct = document.createElement("div");
      const productTitle = document.createElement("div");
      const p = document.createElement("p");
      const count = document.createElement("p");
      const qu = document.createElement("div");
      const deleteBtn = document.createElement("button");
      const h4 = document.createElement("h4");
      const img = document.createElement("img");
      img.src = data.img;
      cartProduct.className = "cart-product";
      ImageProduct.className = "image-product";
      productTitle.className = "product-title";
      qu.className = "count";
      deleteBtn.className = "deleteBtn";
      deleteBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
      deleteBtn.id = data.id;
      p.innerHTML = data.price + " RUB";
      h4.innerHTML = data.name;
      h3.innerHTML = `Итого: ${fullPrice} руб`;
      count.innerHTML = data.no + " шт";
      productTitle.appendChild(h4);
      ImageProduct.appendChild(img);
      cartProduct.appendChild(ImageProduct);
      productTitle.appendChild(p);
      cartProduct.appendChild(productTitle);
      qu.appendChild(count);
      cartProduct.appendChild(qu);
      cartProduct.appendChild(deleteBtn);
      cartItems.appendChild(cartProduct);
      cartItems.appendChild(h3);

      deleteBtn.addEventListener("click", function (e) {
        deleteFunc(data.id);
      });
      function deleteFunc(e) {
        let items = [];
        JSON.parse(localStorage.getItem("items")).map((data) => {
          if (data.id != e) {
            items.push(data);
          }
        });
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      }
    });
    if (!JSON.parse(localStorage.getItem("items")).length) {
      const h1 = document.createElement("h1");
      h1.innerHTML = "Корзина пуста";
      cartItems.appendChild(h1);
    }
  } else {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Корзина пуста";
    cartItems.appendChild(h1);
  }
});

function applyPromoCode() {
  // Получите значение промокода из поля ввода
  const promoCode = document.getElementById("promo").value;

  // Проверяем, если промокод равен "1111"
  if (promoCode === "1111") {
    // Если промокод равен "1111", уменьшаем цену на 300
    const discountAmount = 300;
    const newPrice = fullPrice - discountAmount;

    // Обновите элемент с итоговой стоимостью на странице
    const totalPriceElement = document.querySelector("#cart-items h3");
    
    totalPriceElement.innerHTML = `Старая цена: <s>${fullPrice} руб</s><br>Новая цена: <strong>${newPrice} руб</strong>`;
  } else {
    // Промокод недействителен
    alert("Неверный промокод. Пожалуйста, введите действующий промокод.");
  }
}
