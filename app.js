let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFF";
tg.MainButton.color = "#2CAB37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});
btn4.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});
btn5.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});
btn6.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
	tg.sendData(item);
});


// Получаем все кнопки фильтра
const filterButtons = document.querySelectorAll('.filter-btn');

// Получаем все блоки item
const items = document.querySelectorAll('.item');

// Добавляем обработчик событий для каждой кнопки фильтра
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tag = button.dataset.tag; // Получаем значение тега из data-атрибута кнопки

    // Удаляем класс 'active' у всех кнопок
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Добавляем класс 'active' к нажатой кнопке
    button.classList.add('active');

    // Показываем только блоки item с соответствующим тегом или скрываем все блоки item при отсутствии тега
    items.forEach(item => {
      const itemTags = item.dataset.tags; // Получаем значение тегов из data-атрибута блока item
      if (itemTags.includes(tag)) {
        item.style.display = 'block'; // Отображаем блок item
      } else {
        item.style.display = 'none'; // Скрываем блок item
      }
    });
  });
});
