// Add event listener for cart button


let cart = [];

// Add event listeners to "Add" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        // Get parent product element
        let product = button.parentElement;
        let productId = product.id;

        // Hide "Add" button and show item counter
        button.style.display = 'none';
        let itemCounter = product.querySelector('.item-counter');
        itemCounter.style.display = 'block';

        // Initialize quantity to 1
        let quantityElement = itemCounter.querySelector('.quantity');
        quantityElement.textContent = '1';

        // Add product to cart
        cart.push({
            id: productId,
            quantity: 1
        });

        // Show cart button if hidden
        let cartButton = document.getElementById('cartButton');
        if (cartButton.style.display === 'none') {
            cartButton.style.display = 'block';
        }
    });
});

// Add event listeners to "+" buttons
document.querySelectorAll('.item-counter .add').forEach(button => {
    button.addEventListener('click', function () {
        // Increase quantity
        let quantityElement = button.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = (quantity + 1).toString();

        // Update quantity in cart
        let productId = button.parentElement.parentElement.id;
        let cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        }
    });
});

// Add event listeners to "-" buttons
document.querySelectorAll('.item-counter .subtract').forEach(button => {
    button.addEventListener('click', function () {
        // Decrease quantity
        let quantityElement = button.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = (quantity - 1).toString();

            // Update quantity in cart
            let productId = button.parentElement.parentElement.id;
            let cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity--;
            }
        } else {
            // Hide item counter and show "Add" button
            let product = button.parentElement.parentElement;
            button.parentElement.style.display = 'none';
            product.querySelector('.add-to-cart').style.display = 'block';

            // Remove product from cart
            let productId = product.id;
            cart = cart.filter(item => item.id !== productId);

            // Hide cart button if cart is empty
            if (cart.length === 0) {
                document.getElementById('cartButton').style.display = 'none';
            }
        }
    });
});


const GetProductToLocalStorage = JSON.parse(localStorage.getItem('items'))


const addToCartBtn = this.document.getElementsByClassName('addToCart')

const GoToCart = document.querySelector('#go-to-cart');
const btnQuon = document.querySelector('.btnQuon');

if (localStorage.getItem("items") !== null) {
    GoToCart.style.display = "block"
} else {
    GoToCart.style.display = "none"
}
let items = []

for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', function (e) {
        if (typeof (Storage) !== 'undefined') {
            let item = {
                id: i + 1,
                name: e.target.parentElement.children[1].textContent.split(" ")[0],
                price: e.target.parentElement.children[1].textContent.split(" ")[2],
                no: 1,
                img: e.target.parentElement.children[0].src
            }


            if (GetProductToLocalStorage === null) {
                items.push(item)
                localStorage.setItem("items", JSON.stringify(items))
                window.location.reload()
            } else {
                const localItems = GetProductToLocalStorage
                localItems.map(data => {
                    if (item.id == data.id) {
                        item.no = data.no + 1
                    } else {
                        items.push(data)
                    }
                })
                items.push(item)
                localStorage.setItem('items', JSON.stringify(items))
                window.location.reload()

            }

        } else {
            alert('storage is not working on your browser');
        }
    })
}

if (GetProductToLocalStorage !== null) {
    let no = 0
    let fullPrice = 0
    GetProductToLocalStorage.map(data => {
        no = no + data.no
        fullPrice = fullPrice + data.price
    })

    btnQuon.innerHTML = no
}

const itemDivs = document.querySelectorAll('.item');

for (let i = 0; i < itemDivs.length; i++) {
    if (GetProductToLocalStorage !== null) {
        GetProductToLocalStorage.map(data => {
            const idFind = itemDivs[i].children[2].id
            const idFinded = Number(itemDivs[i].children[2].id.split('')[idFind.length - 1])
            if (data.id == idFinded) {
                if (data.no > 0) {
                    itemDivs[i].children[2].style.display = "none";
                    itemDivs[i].children[3].style.display = "flex";
                }

                itemDivs[i].children[3].children[1].innerHTML = data.no
            }
        })
    }
}

const BtnMinus = document.querySelectorAll('.btnMinus');
const btnPlus = document.querySelectorAll('.btnPlus');


for (let i = 0; i < BtnMinus.length; i++) {
    BtnMinus[i].addEventListener('click', function (e) {
        if (typeof (Storage) !== 'undefined') {

            const findId = e.target.parentElement.parentElement.children[2].id

            const FINED = e.target.parentElement.parentElement.children[2].id[findId.length - 1];
            let item = {
                id: i + 1,
                name: e.target.parentElement.parentElement.children[1].textContent.split(" ")[0],
                price: e.target.parentElement.parentElement.children[1].textContent.split(" ")[2],
                no: 1,
                img: e.target.parentElement.parentElement.children[0].src
            }

            let booleanF = true

            const localItems = GetProductToLocalStorage
            localItems.map(data => {
                if (item.id == data.id) {
                    if (data.no == 1) {
                        deleteFunc(FINED)
                        booleanF = false
                    } else {
                        item.no = data.no - 1
                    }
                } else {
                    items.push(data)
                }
            })
            if (booleanF) {
                items.push(item)
                localStorage.setItem('items', JSON.stringify(items))
                window.location.reload()
            }
        } else {
            alert('storage is not working on your browser');
        }
    })
}


function deleteFunc(e) {
    let asdasdasd = []
    JSON.parse(localStorage.getItem('items')).map(data => {
        if (data.id != e) {
            asdasdasd.push(data)
        }
        localStorage.setItem('items', JSON.stringify(asdasdasd))
        window.location.reload()
    })
}

for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener('click', function (e) {
        if (typeof (Storage) !== 'undefined') {
            let item = {
                id: i + 1,
                name: e.target.parentElement.parentElement.children[1].textContent.split(" ")[0],
                price: e.target.parentElement.parentElement.children[1].textContent.split(" ")[2],
                no: 1,
                img: e.target.parentElement.parentElement.children[0].src
            }

            if (GetProductToLocalStorage === null) {
                items.push(item)
                localStorage.setItem("items", JSON.stringify(items))
                window.location.reload()
            } else {
                const localItems = GetProductToLocalStorage
                localItems.map(data => {
                    if (item.id == data.id) {
                        item.no = data.no + 1
                    } else {
                        items.push(data)
                    }
                })
                items.push(item)
                localStorage.setItem('items', JSON.stringify(items))
                window.location.reload()
            }

        } else {
            alert('storage is not working on your browser');
        }
    })
}