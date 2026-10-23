
function validate_form() {
    let valid = true;
    if (document.contact_form.contact_name.value === "") {
        alert("Пожалуйста заполните поле 'Ваше имя'.");
        valid = false;
    }
    return valid;
}

function check() {
    if (document.calc.ancwer.value == "4") {
        alert("Правильно!");
    } else {
        alert("Неправильно!");
    }
}

function beg() {
    const elem = document.getElementById("btn");
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos >= 200) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

function dvig() {
    alert("Поймал");
}

const WORK_ID = 1;
let grades = JSON.parse(localStorage.getItem('grades')) || {};
let currentScore = 0;

// Инициализация звезд
const stars = document.querySelectorAll('.star');
const commentBox = document.getElementById('comment-box');

// Если оценка уже есть — показываем
if (grades[WORK_ID]) {
    currentScore = grades[WORK_ID].score;
    commentBox.value = grades[WORK_ID].comment || '';
    stars.forEach(s => {
        if (parseInt(s.dataset.value) <= currentScore) {
            s.classList.add('active');
        }
    });
}

// Клик по звезде
stars.forEach(star => {
    star.addEventListener('click', () => {
        currentScore = parseInt(star.dataset.value);
        stars.forEach(s => {
            s.classList.toggle('active', parseInt(s.dataset.value) <= currentScore);
        });
    });
});

// Сохранение оценки
function saveGrade() {
    if (currentScore === 0) {
        alert('Пожалуйста, выберите оценку (звезды)!');
        return;
    }

    grades[WORK_ID] = {
        score: currentScore,
        comment: commentBox.value
    };

    localStorage.setItem('grades', JSON.stringify(grades));
    alert('Оценка сохранена!');
    window.location.href = 'index.html'; // Возврат на главную
};