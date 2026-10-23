// Задания 1, 2, 3, 4
// При загрузке страницы выводится текст в блок (вместо document.write)
window.addEventListener('DOMContentLoaded', () => {
    const task1Box = document.getElementById('task1-result');
    if (task1Box) {
        task1Box.innerHTML = "Вывод текста: <b>Привет!</b>";
    }
    
    // Инициализация остальных задач при загрузке
    drawPyramids();
    generateTable();
});

function runTasks1to4() {
    // Задание 3
    alert("Привет, мир!");
    
    // Задание 4
    let name = prompt("Ваше имя?");
    if (name) {
        alert(`Привет, ${name}!`);
    }
}

// Задание 6 (Калькулятор) 
function runTask6() {
    let a = prompt("Введите число 1:");
    let b = prompt("Введите число 2:");
    
    const resultBox = document.getElementById('calc-result');
    resultBox.style.display = 'block';
    
    if (a !== null && b !== null) {
        let sum = Number(a) + Number(b);
        resultBox.innerHTML = `Сумма чисел ${a} и ${b} = <b>${sum}</b>`;
    } else {
        resultBox.innerHTML = "Вы отменили ввод.";
    }
}

//  Задания 7 и 8 (Пирамидки) 
function drawPyramids() {
    let upContainer = document.getElementById('pyramid-up');
    let downContainer = document.getElementById('pyramid-down');
    if (!upContainer || !downContainer) return;
    
    let upHtml = "";
    let downHtml = "";

    // Задание 7
    for (let i = 1; i <= 10; i++) {
        upHtml += `<hr width="${i * 10}%">`;
    }

    // Задание 8
    for (let i = 10; i >= 1; i--) {
        downHtml += `<hr width="${i * 10}%">`;
    }

    upContainer.innerHTML = upHtml;
    downContainer.innerHTML = downHtml;
}

// Задания 10 и 11 (Таблица)
function generateTable() {
    let tableContainer = document.getElementById('numbers-table');
    if (!tableContainer) return;
    
    let tableHtml = "<table class='num-table'>";
    
    // Делаем сетку 10x10
    for (let row = 1; row <= 10; row++) {
        tableHtml += "<tr>";
        for (let col = 1; col <= 10; col++) {
            let num = (row - 1) * 10 + col;
            tableHtml += `<td>${num}</td>`;
        }
        tableHtml += "</tr>";
    }
    
    tableHtml += "</table>";
    tableContainer.innerHTML = tableHtml;
}

// Задание 12 (Таблица умножения)
function runTask12() {
    let a = prompt("Введите число для таблицы умножения:");
    const resultBox = document.getElementById('mult-table-result');
    resultBox.style.display = 'block';
    
    if (a === null || a.trim() === "") return;

    let resultHtml = "";
    let i = 1;
    
    while (i <= 10) {
        resultHtml += `${a} × ${i} = ${a * i}<br>`;
        i++;
    }
    
    resultBox.innerHTML = resultHtml;
}

// Задание 13 (Функция)
function multiply(num1, num2) {
    return num1 * num2;
}

function runTask13() {
    let a = prompt("Число 1:");
    let b = prompt("Число 2:");
    const resultBox = document.getElementById('multiply-result');
    resultBox.style.display = 'block';
    
    if (a !== null && b !== null) {
        let result = multiply(Number(a), Number(b));
        resultBox.innerHTML = `${a} × ${b} = <b>${result}</b>`;
    }
}

// Задание 14 (Тренажер)
function runTask14() {
    let a = Math.floor(1 + 10 * Math.random());
    let b = Math.floor(1 + 10 * Math.random());
    
    let userAnswer = prompt(`${a} + ${b} = ?`);
    let resultBox = document.getElementById('math-trainer-result');
    resultBox.style.display = 'block';
    
    if (userAnswer === null) {
        resultBox.innerHTML = "Тренировка отменена.";
        return;
    }

    if (Number(userAnswer) === (a + b)) {
        resultBox.innerHTML = `Пример: ${a} + ${b} = ${a+b}<br><b style="color: green;">+++++</b> (Верно!)`;
    } else {
        resultBox.innerHTML = `Пример: ${a} + ${b} = ${a+b}<br><b style="color: red;">-----</b> (Ошибка! Вы ввели ${userAnswer})`;
    }
}