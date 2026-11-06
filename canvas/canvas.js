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
