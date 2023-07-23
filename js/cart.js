window.addEventListener('load', function (e) {
    const cartItems = document.querySelector('#cart-items');


    if (JSON.parse(localStorage.getItem('items')) !== null) {
        let no = 0
        let fullPrice = 0
        const h3 = document.createElement('h3')
        JSON.parse(localStorage.getItem('items')).map(data => {
            no = no + data.no
            fullPrice = Number(fullPrice) + Number(data.price * data.no)
            const cartProduct = document.createElement('div')
            const ImageProduct = document.createElement('div')
            const productTitle = document.createElement('div')
            const qu = document.createElement('div')
            const deleteBtn = document.createElement('button')
            const h4 = document.createElement('h4')
            const img = document.createElement('img')
            img.src = data.img
            cartProduct.className = "cart-product"
            ImageProduct.className = "image-product"
            productTitle.className = "product-title"
            deleteBtn.className = "deleteBtn"
            deleteBtn.innerHTML = "DELETE"
            deleteBtn.id = data.id
            h4.innerHTML = data.name
            h3.innerHTML = `Итого: ${fullPrice} руб`
            qu.innerHTML = data.no + " шт"
            productTitle.appendChild(h4)
            ImageProduct.appendChild(img)
            cartProduct.appendChild(ImageProduct)
            cartProduct.appendChild(productTitle)
            cartProduct.appendChild(qu)
            cartProduct.appendChild(deleteBtn)
            cartItems.appendChild(cartProduct)
            cartItems.appendChild(h3)

            deleteBtn.addEventListener("click", function (e) {
                deleteFunc(e.target.id);
            })
            function deleteFunc(e) {
                let items = []
                JSON.parse(localStorage.getItem('items')).map(data => {
                    if (data.id != e) {
                        items.push(data)
                    }
                })
                localStorage.setItem('items', JSON.stringify(items))
                window.location.reload()
            }
        })
        if (!JSON.parse(localStorage.getItem('items')).length) {
            const h1 = document.createElement('h1')
            h1.innerHTML = "Корзина пуста"
            cartItems.appendChild(h1)
        }
    } else {
        const h1 = document.createElement('h1')
        h1.innerHTML = "Корзина пуста"
        cartItems.appendChild(h1)
    };
    JSON.parse(localStorage.getItem('items')).map((data, index) => {
          // Ваш код для добавления товаров на страницу...

          // Теперь добавим информацию о товаре в скрытые поля формы
          const itemsInfo = document.querySelector('#items-info');

          const idInput = document.createElement('input');
          idInput.type = 'hidden';
          idInput.name = `items[${index}][id]`;
          idInput.value = data.id;
          itemsInfo.appendChild(idInput);

          const imgInput = document.createElement('input');
          imgInput.type = 'hidden';
          imgInput.name = `items[${index}][img]`;
          imgInput.value = data.img;
          itemsInfo.appendChild(imgInput);

          const nameInput = document.createElement('input');
          nameInput.type = 'hidden';
          nameInput.name = `items[${index}][name]`;
          nameInput.value = data.name;
          itemsInfo.appendChild(nameInput);

          const priceInput = document.createElement('input');
          priceInput.type = 'hidden';
          priceInput.name = `items[${index}][price]`;
          priceInput.value = data.price;
              itemsInfo.appendChild(priceInput);

          const noInput = document.createElement('input');
          noInput.type = 'hidden';
          noInput.name = `items[${index}][no]`;
          noInput.value = data.no;
          itemsInfo.appendChild(noInput);
        });
});
