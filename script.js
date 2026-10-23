// Данные о работах
const works = [
    { 
        id: 1, 
        title: "Задания по теме: основы JavaScript", 
        desc: "Работа с объектно-ориентированным сценарным языком программирования.", 
        icon: "",
        url: "js/theory_js.html"
    },
    { 
        id: 2, 
        title: "Практическая работа №1: JavaScript", 
        desc: "Практическая проверка полученных знаний по JavaScript", 
        icon: "",
        url: "js/practice_js.html"
    },
    { 
        id: 3, 
        title: "Задания по теме: Формы", 
        desc: "Работа с элементом HTML, позволяющий передавать информацию на web-сервер, где информация будет обработана", 
        icon: "",
        url: "forms/theory_form.html"
    },
    { 
        id: 4, 
        title: "Практическая работа №2: Формы", 
        desc: "Практическая проверка полученных знаний по Формам", 
        icon: "",
        url: "forms/practice_form.html"
    },
    { 
        id: 5, 
        title: "Диаграммы UML",
        desc: "UML (Unified Modeling Language) — это стандартизированный графический язык для объектного моделирования программных систем, бизнес-процессов и проектирования архитектуры", 
        icon: "",
        url: "uml/theory_uml.html"
    },
    { 
        id: 6, 
        title: "Анимация на CSS",
        desc: "CSS позволяет создавать простые анимации без использования JavaScript. JavaScript может быть использован для управления такими CSS-анимациями. Это позволяет делать более сложные анимации, используя небольшие кусочки кода", 
        icon: "",
        url: "annimation/theory_annimation.html" 
    },
    { 
        id: 7, 
        title: "Практическая работа №3: Анимация на CSS", 
        desc: "Практическая проверка полученных знаний по анимации на CSS", 
        icon: "",
        url: "annimation/practice_annimation.html"
    },
    { 
        id: 8, 
        title: "SVG Аннимация", 
        desc: "SVG используется для создания масштабируемой векторной графики, в первую очередь в веб-дизайне, для таких элементов, как логотипы, иконки, иллюстрации, инфографика, анимация и интерактивные элементы пользовательских интерфейсов", 
        icon: "",
        url: "svg/svg.html"
    },
    { 
        id: 9, 
        title: "Сайт Luman по метологии БЭМ", 
        desc: "БЭМ (Блок, Элемент, Модификатор) — это компонентный подход и методология организации кода в веб-разработке", 
        icon: "",
        url: "lumen/lumen.html"
    },
    { 
        id: 10, 
        title: "Верстка сайта 'Нарушений.Нет' на время", 
        desc: "За 1:30 минут нужно было сверстать сайт в два модуля", 
        icon: "",
        url: "noviolations/no_violations.html"
    }
];

// Хранилище оценок (в памяти браузера)
let grades = JSON.parse(localStorage.getItem('grades')) || {};

// Функция отрисовки карточек
function renderCards() {
    const container = document.getElementById('cards-container');
    if(!container) return; // Защита от ошибки, если контейнера нет на странице

    container.innerHTML = '';

    works.forEach(work => {
        const isGraded = grades[work.id] !== undefined;
        const statusBadge = isGraded 
            ? `<span class="status-badge graded">Оценено: ${grades[work.id].score}/5</span>`
            : `<span class="status-badge pending">Ожидает проверки</span>`;

        const card = document.createElement('div');
        card.className = 'card';
        
        // Переход на страницу работы
        card.onclick = () => {
            window.location.href = work.url;
        };
        card.innerHTML = `
            <h3>${work.title}</h3>
            <p>${work.desc}</p>
            ${statusBadge}
            <button class="btn" style="margin-top: 15px;">Перейти к работе</button>
        `;
        container.appendChild(card);
    });
}

// Инициализация
renderCards();