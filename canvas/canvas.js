function createImage() {
  var canvas = document.getElementById("canvas-1");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(100, 0);
  ctx.lineTo(200, 100);
  ctx.lineTo(150, 200);
  ctx.lineTo(50, 200);
  ctx.lineTo(0, 100);
  ctx.stroke();
}
function createImageArc() {
  var canvas = document.getElementById("canvas-2");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 100, 75, 1.2 * Math.PI, 1.8 * Math.PI, false);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.stroke();
}
function createImageBezier() {
  var canvas = document.getElementById("canvas-3");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(10, 15);
  ctx.bezierCurveTo(75, 55, 175, 20, 250, 15);
  ctx.moveTo(10, 15);
  ctx.quadraticCurveTo(100, 100, 250, 15);
  ctx.stroke();
}
function createImageLiner() {
  var canvas = document.getElementById("canvas-4");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.lineCap = "butt";
  ctx.moveTo(20, 20);
  ctx.lineTo(180, 20);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.moveTo(20, 40);
  ctx.lineTo(180, 40);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineCap = "square";
  ctx.moveTo(20, 60);
  ctx.lineTo(180, 60);
  ctx.stroke();
}

//задание 1
function drawSquares() {
  const canvas = document.getElementById("canvas-squares");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст

  // Настройки
  const startX = 30;
  const startY = 30;
  const sizes = [30, 50, 70, 90]; // Размеры квадратов
  const spacing = 20; // Расстояние между квадратами

  let currentX = startX;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "#333";

  sizes.forEach((size) => {
    ctx.strokeRect(currentX, startY, size, size);
    ctx.fillStyle = "#777";
    ctx.font = "12px Nunito";
    ctx.textAlign = "center";
    ctx.fillText(`${size}x${size}`, currentX + size / 2, startY + size + 20);
    currentX += size + spacing;
  });
}

// задание 2
// Функция для отрисовки одного дома
function drawOneHouse(ctx) {
  // 1. Основание дома (стена)
  ctx.fillStyle = "#F4A460"; // Оранжево-коричневый
  ctx.fillRect(-40, -20, 80, 60);
  ctx.strokeRect(-40, -20, 80, 60);

  // 2. Крыша (треугольник)
  ctx.beginPath();
  ctx.moveTo(-50, -20);
  ctx.lineTo(0, -60);
  ctx.lineTo(50, -20);
  ctx.closePath();
  ctx.fillStyle = "#d9534f"; // Красный
  ctx.fill();
  ctx.stroke();

  // 3. Дверь
  ctx.fillStyle = "#8B4513"; // Коричневый
  ctx.fillRect(-15, 5, 20, 35);
  ctx.strokeRect(-15, 5, 20, 35);

  // 4. Окно
  ctx.fillStyle = "#87CEEB"; // Голубой
  ctx.fillRect(10, -5, 20, 20);
  ctx.strokeRect(10, -5, 20, 20);

  // Рама окна (крестик)
  ctx.beginPath();
  ctx.moveTo(20, -5);
  ctx.lineTo(20, 15); // Вертикальная линия
  ctx.moveTo(10, 5);
  ctx.lineTo(30, 5); // Горизонтальная линия
  ctx.stroke();

  // 5. Труба
  ctx.fillStyle = "#d9534f";
  ctx.fillRect(20, -60, 15, 25);
  ctx.strokeRect(20, -60, 15, 25);
}

function drawHouses() {
  // Дом 1: Масштаб 1:1
  const ctx1 = document.getElementById("canvas-house-1").getContext("2d");
  ctx1.clearRect(0, 0, 150, 150);
  ctx1.save();
  ctx1.translate(75, 90);
  drawOneHouse(ctx1);
  ctx1.restore();

  // Дом 2: Уменьшенный в 2 раза (1:2)
  const ctx2 = document.getElementById("canvas-house-2").getContext("2d");
  ctx2.clearRect(0, 0, 150, 150);
  ctx2.save();
  ctx2.translate(75, 90);
  ctx2.scale(0.5, 0.5);
  drawOneHouse(ctx2);
  ctx2.restore();

  // Дом 3: Увеличенный в 2 раза (2:1)
  const ctx3 = document.getElementById("canvas-house-3").getContext("2d");
  ctx3.clearRect(0, 0, 150, 150);
  ctx3.save();
  ctx3.translate(75, 90);
  ctx3.scale(2, 2);
  drawOneHouse(ctx3);
  ctx3.restore();
}

function drawSquares() {
  const canvas = document.getElementById("canvas-squares");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const startX = 30,
    startY = 30,
    sizes = [30, 50, 70, 90],
    spacing = 20;
  let currentX = startX;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "#333";

  sizes.forEach((size) => {
    ctx.strokeRect(currentX, startY, size, size);
    ctx.fillStyle = "#777";
    ctx.font = "12px Nunito";
    ctx.textAlign = "center";
    ctx.fillText(`${size}x${size}`, currentX + size / 2, startY + size + 20);
    currentX += size + spacing;
  });
}

function drawOneHouse(ctx) {
  ctx.fillStyle = "#F4A460";
  ctx.fillRect(-40, -20, 80, 60);
  ctx.strokeRect(-40, -20, 80, 60);
  ctx.beginPath();
  ctx.moveTo(-50, -20);
  ctx.lineTo(0, -60);
  ctx.lineTo(50, -20);
  ctx.closePath();
  ctx.fillStyle = "#d9534f";
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(-15, 5, 20, 35);
  ctx.strokeRect(-15, 5, 20, 35);
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(10, -5, 20, 20);
  ctx.strokeRect(10, -5, 20, 20);
  ctx.beginPath();
  ctx.moveTo(20, -5);
  ctx.lineTo(20, 15);
  ctx.moveTo(10, 5);
  ctx.lineTo(30, 5);
  ctx.stroke();
  ctx.fillStyle = "#d9534f";
  ctx.fillRect(20, -60, 15, 25);
  ctx.strokeRect(20, -60, 15, 25);
}

function drawHouses() {
  const scales = [1, 0.5, 2];
  const canvases = ["canvas-house-1", "canvas-house-2", "canvas-house-3"];

  canvases.forEach((id, index) => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 150, 150);
    ctx.save();
    ctx.translate(75, 90);
    ctx.scale(scales[index], scales[index]);
    drawOneHouse(ctx);
    ctx.restore();
  });
}

//работа с изображением
// Создаем объект картинки
const img = new Image();
img.src = "../img/tree.png";

// Задание 7: Просто разместить
function drawExternalImage() {
  const ctx = document.getElementById("canvas-img-1").getContext("2d");
  ctx.clearRect(0, 0, 300, 200);
  // drawImage(картинка, x, y, ширина, высота)
  ctx.drawImage(img, 0, 0, 300, 200);
}

// Задание 8: Замостить холст (Мозаика)
function drawMosaic() {
  const ctx = document.getElementById("canvas-img-2").getContext("2d");
  ctx.clearRect(0, 0, 400, 300);

  const tileWidth = 100;
  const tileHeight = 75;

  // Циклы для создания сетки (4 колонки, 4 ряда)
  for (let h = 0; h < 4; h++) {
    for (let w = 0; w < 4; w++) {
      ctx.drawImage(img, w * tileWidth, h * tileHeight, tileWidth, tileHeight);
    }
  }
}

// Задание 9: Вырезать часть
function drawCroppedImage() {
  const ctx = document.getElementById("canvas-img-3").getContext("2d");
  ctx.clearRect(0, 0, 200, 300);
  const srcX = 300; // отступ слева
  const srcY = 150; // отступ сверху
  const srcW = 150; // ширина вырезаемого куска
  const srcH = 250; // высота вырезаемого куска

  // drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH)
  ctx.drawImage(
    img,
    srcX,
    srcY,
    srcW,
    srcH, // Что вырезаем из оригинала
    0,
    0,
    200,
    300, // Куда вставляем и какого размера
  );
}
// задание 10
const canvas = document.getElementById("capture-canvas");
const context = canvas.getContext("2d");
const video = document.getElementById("myVideo");
const snapBtn = document.getElementById("snap-btn");

// При клике на кнопку берем текущий кадр из видео и рисуем его на холсте
snapBtn.onclick = () => {
  // Очищаем холст перед новым снимком
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Главная магия: передаем видео в качестве источника изображения
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Добавляем эффект белой вспышки для красоты
  context.fillStyle = "rgba(255, 255, 255, 0.5)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Убираем вспышку через 100 миллисекунд
  setTimeout(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  }, 100);
};

let anim1Id,
  anim2Id,
  anim2X = 0;

//  Задание 11: Движение
function startAnim1() {
  const canvas = document.getElementById("canvas-anim-1");
  const ctx = canvas.getContext("2d");
  let x = 0;

  if (anim1Id) cancelAnimationFrame(anim1Id); // Останавливаем предыдущую, если была

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#F4A460";
    ctx.beginPath();
    ctx.arc(x, 50, 10, 0, Math.PI * 2);
    ctx.fill();

    x += 2;
    if (x > canvas.width + 10) x = -10;

    anim1Id = requestAnimationFrame(animate);
  }
  animate();
}

// Задание 12: График Синус/Косинус
function startAnim2() {
  const canvas = document.getElementById("canvas-anim-2");
  const ctx = canvas.getContext("2d");
  anim2X = 0;

  if (anim2Id) cancelAnimationFrame(anim2Id);

  function animate() {
    // Не очищаем холст полностью, чтобы график "рисовался" по мере движения
    if (anim2X === 0) ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Синус (синий)
    ctx.fillStyle = "blue";
    ctx.fillRect(anim2X, Math.sin(anim2X * 0.05) * 50 + 100, 3, 3);

    // Косинус (красный)
    ctx.fillStyle = "red";
    ctx.fillRect(anim2X, Math.cos(anim2X * 0.05) * 50 + 100, 3, 3);

    anim2X += 1;

    if (anim2X <= canvas.width) {
      anim2Id = requestAnimationFrame(animate);
    }
  }
  animate();
}

// Задание 13: График Параболы
function drawParabola() {
  const canvas = document.getElementById("canvas-graph");
  const ctx = canvas.getContext("2d");

  // Получаем значения из полей
  const a = Number(document.getElementById("input-a").value);
  const b = Number(document.getElementById("input-b").value);
  const c = Number(document.getElementById("input-c").value);
  const xMin = Number(document.getElementById("input-xmin").value);
  const xMax = Number(document.getElementById("input-xmax").value);
  const yMin = Number(document.getElementById("input-ymin").value);
  const yMax = Number(document.getElementById("input-ymax").value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Масштабирование и центрирование
  // Переносим начало координат в центр холста (с учетом границ)
  const scaleX = canvas.width / (xMax - xMin);
  const scaleY = canvas.height / (yMax - yMin);

  // Функция перевода координат математических в экранные
  function toScreenX(x) {
    return (x - xMin) * scaleX;
  }
  // В Canvas ось Y идет вниз, поэтому инвертируем
  function toScreenY(y) {
    return canvas.height - (y - yMin) * scaleY;
  }

  // 1. Рисуем сетку
  ctx.strokeStyle = "#e0e0e0";
  ctx.lineWidth = 1;
  ctx.beginPath();
  // Вертикальные линии
  for (let x = Math.ceil(xMin); x <= xMax; x++) {
    ctx.moveTo(toScreenX(x), 0);
    ctx.lineTo(toScreenX(x), canvas.height);
  }
  // Горизонтальные линии
  for (let y = Math.ceil(yMin); y <= yMax; y++) {
    ctx.moveTo(0, toScreenY(y));
    ctx.lineTo(canvas.width, toScreenY(y));
  }
  ctx.stroke();

  // 2. Рисуем оси
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  // Ось X
  if (yMin <= 0 && yMax >= 0) {
    ctx.moveTo(0, toScreenY(0));
    ctx.lineTo(canvas.width, toScreenY(0));
  }
  // Ось Y
  if (xMin <= 0 && xMax >= 0) {
    ctx.moveTo(toScreenX(0), 0);
    ctx.lineTo(toScreenX(0), canvas.height);
  }
  ctx.stroke();

  // Подписи осей
  ctx.fillStyle = "#000";
  ctx.font = "12px Nunito";
  if (xMin <= 0 && xMax >= 0) {
    ctx.fillText("0", toScreenX(0) + 5, toScreenY(0) + 15);
  }

  // 3. Рисуем сам график
  ctx.beginPath();
  ctx.strokeStyle = "#d9534f"; // Красный цвет как на скрине
  ctx.lineWidth = 2;

  let isFirst = true;
  // Шаг для плавности
  const step = (xMax - xMin) / 500;

  for (let x = xMin; x <= xMax; x += step) {
    const y = a * x * x + b * x + c;

    // Ограничиваем рисование, чтобы не вылезать за пределы сильно
    if (y >= yMin - 10 && y <= yMax + 10) {
      if (isFirst) {
        ctx.moveTo(toScreenX(x), toScreenY(y));
        isFirst = false;
      } else {
        ctx.lineTo(toScreenX(x), toScreenY(y));
      }
    } else {
      isFirst = true; // Если вышли за границу, начинаем новую линию при возвращении
    }
  }
  ctx.stroke();
}

function clearParabola() {
  const canvas = document.getElementById("canvas-graph");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Задание 14: Столбчатая диаграмма
function drawBars() {
  const canvas = document.getElementById("canvas-bars");
  const ctx = canvas.getContext("2d");

  const valJS = Number(document.getElementById("js-val").value);
  const valPHP = Number(document.getElementById("php-val").value);
  const valPython = Number(document.getElementById("python-val").value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Фон как на картинке
  ctx.fillStyle = "#2b2b36";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Рамка вокруг графика
  ctx.strokeStyle = "#444";
  ctx.lineWidth = 1;
  ctx.strokeRect(50, 20, 320, 200);

  // Данные для столбцов
  const data = [
    { label: "JAVASCRIPT", value: valJS, color: "#aebdf2" },
    { label: "PHP", value: valPHP, color: "#8cd8cf" },
    { label: "PYTHON", value: valPython, color: "#f2e291" },
  ];

  const barWidth = 40;
  const maxBarHeight = 160;
  const startX = 100;
  const bottomY = 220;

  data.forEach((item, index) => {
    // Ограничиваем максимум 100%
    const percent = Math.min(item.value, 100);
    const barHeight = (percent / 100) * maxBarHeight;
    const x = startX + index * 90;

    // Рисуем столбец
    ctx.fillStyle = item.color;
    ctx.fillRect(x, bottomY - barHeight, barWidth, barHeight);

    // Рисуем подпись (вертикально)
    ctx.save();
    ctx.translate(x + barWidth / 2, bottomY - 10);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = "#fff";
    ctx.font = "12px Nunito";
    ctx.textAlign = "left";
    ctx.fillText(item.label, 0, 5);
    ctx.restore();
  });
}
