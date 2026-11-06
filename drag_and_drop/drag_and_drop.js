// задание 1
// Разрешаем бросать элементы в контейнер
function allowDrop(ev) {
  ev.preventDefault();
}

// Запоминаем ID перетаскиваемого элемента
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// Обрабатываем бросание
function drop(ev, targetId) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const target = document.getElementById(targetId);

  // Добавляем перетаскиваемый элемент в новый контейнер
  target.appendChild(document.getElementById(data));
}

//собери слово

function dropLetter(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);

  // Проверяем, что в слот бросают именно букву, а не другой элемент
  if (draggedElement.classList.contains("letter")) {
    // Если в слоте уже есть буква, возвращаем её обратно в пул
    if (
      ev.target.classList.contains("slot") &&
      ev.target.children.length === 0
    ) {
      ev.target.appendChild(draggedElement);
    }
  }
}

function checkWord() {
  const slots = document.querySelectorAll(".slot");
  let word = "";

  slots.forEach((slot) => {
    if (slot.children.length > 0) {
      word += slot.children[0].innerText;
    } else {
      word += " "; // Пустой слот
    }
  });

  const resultElement = document.getElementById("word-result");

  // Правильное слово: КОНСТРУКТОР (9 букв)
  if (word === "КОНСТРУК") {
    resultElement.innerText = "Правильно! Молодец!";
    resultElement.style.color = "var(--accent-green)";
  } else {
    resultElement.innerText = "Пока не правильно. Попробуй еще!";
    resultElement.style.color = "#d9534f";
  }
}
