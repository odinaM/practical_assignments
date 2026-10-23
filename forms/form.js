document.addEventListener('DOMContentLoaded', () => {
    const screenSetup = document.getElementById('screen-setup');
    const screenGame = document.getElementById('screen-game');
    const screenWin = document.getElementById('screen-win');

    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');
    const backBtn = document.getElementById('backBtn');

    const guessForm = document.getElementById('guessForm');
    const userGuess = document.getElementById('userGuess');
    const resultMessage = document.getElementById('resultMessage');
    const attemptsCount = document.getElementById('attemptsCount');
    const rangeText = document.getElementById('rangeText');

    const finalAttempts = document.getElementById('finalAttempts');
    const resultForm = document.getElementById('resultForm');
    const userName = document.getElementById('userName');
    const restartBtn = document.getElementById('restartBtn');

    const errorMessage = document.getElementById('errorMessage');
    const saveMessage = document.getElementById('saveMessage');
    const resultsList = document.getElementById('results-list');

    const game = {
        min: 0,
        max: 100,
        target: 0,
        attempts: 0,
        lastDistance: null,
        isActive: false,
        isSaved: false
    };

    function showScreen(screen) {
        screenSetup.classList.add('hidden');
        screenGame.classList.add('hidden');
        screenWin.classList.add('hidden');

        screen.classList.remove('hidden');
    }

    function showError(message) {
        errorMessage.textContent = message;
    }

    function clearError() {
        errorMessage.textContent = '';
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    clearBtn.addEventListener('click', () => {
        num1.value = '';
        num2.value = '';

        clearError();

        num1.focus();
    });

    saveBtn.addEventListener('click', () => {
        clearError();

        const min = num1.value.trim() === ''
            ? NaN
            : Number(num1.value);

        const max = num2.value.trim() === ''
            ? NaN
            : Number(num2.value);

        if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
            showError('Введите оба целых числа.');
            return;
        }

        if (min >= max) {
            showError('Число «от» должно быть меньше числа «до».');
            return;
        }

        if (max - min < 3) {
            showError('Диапазон должен содержать хотя бы 4 целых числа.');
            return;
        }

        game.min = min;
        game.max = max;
        game.target = randomInt(min, max);
        game.attempts = 0;
        game.lastDistance = null;
        game.isActive = true;
        game.isSaved = false;

        attemptsCount.textContent = '0';
        rangeText.textContent = `${min}–${max}`;

        userGuess.value = '';
        resultMessage.textContent = 'Удачи! Попробуйте угадать число.';
        resultMessage.className = 'game-result';

        showScreen(screenGame);
        userGuess.focus();
    });

    guessForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!game.isActive) {
            return;
        }

        if (userGuess.value.trim() === '') {
            resultMessage.textContent = 'Сначала введите число.';
            resultMessage.className = 'game-result cold';
            userGuess.focus();
            return;
        }

        const guess = Number(userGuess.value);

        if (!Number.isSafeInteger(guess)) {
            resultMessage.textContent = 'Введите целое число.';
            resultMessage.className = 'game-result cold';
            userGuess.focus();
            return;
        }

        if (guess < game.min || guess > game.max) {
            resultMessage.textContent =
                `Введите число от ${game.min} до ${game.max}.`;
            resultMessage.className = 'game-result cold';
            userGuess.focus();
            return;
        }

        game.attempts++;
        attemptsCount.textContent = String(game.attempts);

        // Если число угадано
        if (guess === game.target) {
            showWinScreen();
            return;
        }

        // Расстояние до загаданного числа
        const distance = Math.abs(game.target - guess);

        // Определяем подсказку
        if (distance <= 3) {
            resultMessage.textContent = '🔥 Горячо! Вы совсем близко!';
            resultMessage.className = 'game-result hot';
        } else if (game.lastDistance === null) {
            resultMessage.textContent = '❄️ Холодно! Попробуйте ещё.';
            resultMessage.className = 'game-result cold';
        } else if (distance < game.lastDistance) {
            resultMessage.textContent = '🌡️ Теплее! Вы приближаетесь.';
            resultMessage.className = 'game-result warm';
        } else if (distance > game.lastDistance) {
            resultMessage.textContent = '🥶 Холоднее! Вы удаляетесь.';
            resultMessage.className = 'game-result cold';
        } else {
            resultMessage.textContent = 'Расстояние не изменилось. Попробуйте ещё!';
            resultMessage.className = 'game-result cold';
        }

        game.lastDistance = distance;

        userGuess.value = '';
        userGuess.focus();
    });

    function showWinScreen() {
        game.isActive = false;

        finalAttempts.textContent = String(game.attempts);
        userName.value = '';
        saveMessage.textContent = '';

        showScreen(screenWin);
        renderResults();

        userName.focus();
    }


    function getResults() {
        try {
            const data = localStorage.getItem('guessResults');
            const results = data ? JSON.parse(data) : [];

            return Array.isArray(results) ? results : [];
        } catch (error) {
            return [];
        }
    }

    function renderResults() {
        resultsList.replaceChildren();

        const results = getResults()
            .slice(-5)
            .reverse();

        if (results.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'Пока нет сохранённых результатов.';
            resultsList.appendChild(li);
            return;
        }

        results.forEach((result) => {
            const li = document.createElement('li');

            const name = document.createElement('span');
            name.className = 'res-name';
            name.textContent = result.name;

            const attempts = document.createElement('span');
            attempts.className = 'res-attempts';
            attempts.textContent =
                `${result.attempts} ${getAttemptWord(result.attempts)} · ${result.range}`;

            li.append(name, attempts);
            resultsList.appendChild(li);
        });
    }

    function getAttemptWord(number) {
        const lastTwo = number % 100;
        const lastOne = number % 10;

        if (lastTwo >= 11 && lastTwo <= 14) {
            return 'попыток';
        }

        if (lastOne === 1) {
            return 'попытка';
        }

        if (lastOne >= 2 && lastOne <= 4) {
            return 'попытки';
        }

        return 'попыток';
    }

    resultForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (game.isSaved) {
            saveMessage.textContent = 'Результат уже сохранён.';
            return;
        }

        const name = userName.value.trim();

        if (!name) {
            saveMessage.textContent = 'Введите своё имя.';
            userName.focus();
            return;
        }

        const results = getResults();

        results.push({
            name: name,
            attempts: game.attempts,
            range: `${game.min}–${game.max}`,
            date: new Date().toISOString()
        });

        try {
            localStorage.setItem('guessResults', JSON.stringify(results));
        } catch (error) {
            saveMessage.textContent =
                'Не удалось сохранить результат. Проверьте настройки браузера.';
            return;
        }

        game.isSaved = true;

        saveMessage.textContent = 'Результат успешно сохранён!';
        renderResults();
    });

    restartBtn.addEventListener('click', () => {
        game.isActive = false;

        num1.value = String(game.min);
        num2.value = String(game.max);

        clearError();
        showScreen(screenSetup);

        num1.focus();
    });

    backBtn.addEventListener('click', () => {
        game.isActive = false;

        clearError();
        showScreen(screenSetup);

        num1.focus();
    });

    renderResults();
});