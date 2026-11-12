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

// практическая работа 4
var draggedElement = null;

function dragStart(ev) {
  draggedElement = ev.target;
  ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));
  ev.dataTransfer.effectAllowed = "move";
  return true;
}

function dragOver(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
  if (ev.target.classList.contains("cell")) {
    ev.target.classList.add("hovered");
  }
  return false;
}

function dragLeave(ev) {
  if (ev.target.classList.contains("cell")) {
    ev.target.classList.remove("hovered");
  }
  return true;
}

function dragDrop(ev) {
  ev.preventDefault();
  ev.stopPropagation();

  if (ev.target.classList.contains("cell")) {
    ev.target.classList.remove("hovered");
  }

  var idelt = ev.dataTransfer.getData("Text");
  var element = document.getElementById(idelt);
  var targetCell = ev.target.closest(".cell");

  // Если бросили мимо ячейки — возвращаем в левый контейнер
  if (!targetCell || !element) {
    document.getElementById("source").appendChild(element);
    return false;
  }

  // Если ячейка уже занята, возвращаем старую карточку в источник
  if (targetCell.children.length > 0) {
    var existingChild = targetCell.children[0];
    document.getElementById("source").appendChild(existingChild);
  }

  // Ставим новую карточку в ячейку
  targetCell.appendChild(element);

  // Сбрасываем стили проверки, если они были
  targetCell.classList.remove("wrong", "correct");

  return false;
}

// функция проверки (по кнопке)
function checkAll() {
  var cells = document.querySelectorAll(".cell");
  var allCorrect = true;
  var placedCount = 0;

  // Проверяем, все ли карточки расставлены
  cells.forEach(function (cell) {
    if (cell.children.length > 0) {
      placedCount++;
    }
  });

  var resultEl = document.getElementById("flow-result");

  if (placedCount < cells.length) {
    showModal(
      "error",
      "Не все блоки расставлены!",
      "Пожалуйста, перетащите все карточки из левого контейнера в сетку.",
    );
    resultEl.innerText = "Не все блоки расставлены!";
    resultEl.style.color = "#AA0000";
    return;
  }

  // Проверка правильности
  cells.forEach(function (cell) {
    var correctId = cell.getAttribute("data-correct");
    var placedId = cell.children[0]
      ? cell.children[0].getAttribute("id")
      : null;

    if (placedId !== correctId) {
      allCorrect = false;
      cell.classList.add("wrong");
      cell.classList.remove("correct");
    } else {
      cell.classList.add("correct");
      cell.classList.remove("wrong");
    }
  });

  if (allCorrect) {
    showModal("success", "Победа!", "Вы правильно собрали блок-схему!");
    resultEl.innerText = "🎉 Победа! Блок-схема собрана верно.";
    resultEl.style.color = "#498b49";
    triggerConfetti();
  } else {
    showModal(
      "error",
      "Есть ошибки",
      "Некоторые блоки стоят не на своих местах. Попробуйте еще раз!",
    );
    resultEl.innerText = "Есть ошибки. Проверьте расстановку блоков.";
    resultEl.style.color = "#930909";
  }
}

function showModal(type, title, text) {
  var modal = document.getElementById("resultModal");
  var icon = document.getElementById("modalIcon");
  var titleEl = document.getElementById("modalTitle");
  var textEl = document.getElementById("modalText");

  if (type === "success") {
    icon.innerHTML = '<div class="success-icon">🎉</div>';
    titleEl.style.color = "#498b49";
  } else {
    icon.innerHTML = '<div class="error-icon">❌</div>';
    titleEl.style.color = "#930909";
  }

  titleEl.innerText = title;
  textEl.innerText = text;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("resultModal").style.display = "none";
}

function triggerConfetti() {
  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.zIndex = "9999";
    confetti.style.borderRadius = "50%";
    confetti.style.animation = `fall ${Math.random() * 2 + 1.5}s linear forwards`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}
