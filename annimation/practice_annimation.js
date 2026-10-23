const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];
const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const foundEl = document.getElementById('found');
const winMsg = document.getElementById('winMsg');
const results = document.getElementById('results');

let first = null, lock = false, moves = 0, found = 0;

// Надежное перемешивание (Фишер-Йетс)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Старт / Сброс
function initGame() {
  const deck = shuffle([...NUMBERS, ...NUMBERS]);
  [first, lock, moves, found] = [null, false, 0, 0];

  movesEl.textContent = 0;
  foundEl.textContent = 0;
  winMsg.textContent = '';

  board.innerHTML = deck.map(num => `<div class="card" data-num="${num}">${num}</div>`).join('');
}

// Клик по карточке (Делегирование событий)
board.onclick = ({ target }) => {
  const card = target.closest('.card');
  if (!card || lock || card.classList.contains('open') || card.classList.contains('matched')) return;

  card.classList.add('open');

  if (!first) {
    first = card;
    return;
  }

  // Вторая карточка
  movesEl.textContent = ++moves;

  if (first.dataset.num === card.dataset.num) {
    first.classList.add('matched');
    card.classList.add('matched');
    foundEl.textContent = ++found;
    first = null;

    if (found === NUMBERS.length) {
      winMsg.textContent = `Победа! Ходов: ${moves}`;
      saveResult(moves);
    }
  } else {
    lock = true;
    const a = first;
    a.classList.add('wrong');
    card.classList.add('wrong');

    setTimeout(() => {
      a.classList.remove('open', 'wrong');
      card.classList.remove('open', 'wrong');
      lock = false;
    }, 800);
    first = null;
  }
};

if (found === NUMBERS.length) {
    winMsg.textContent = `Победа! Ходов: ${moves}`;
    saveResult(moves);
    
    setTimeout(() => {
        nextStep('step-results'); 
    }, 1500); 
}

// Запись результата
function saveResult(m) {
  const row = results.insertRow(0);
  const date = new Date().toLocaleString('ru-RU');
  row.innerHTML = `<td>${results.rows.length}</td><td>${date}</td><td>${m}</td>`;
}

initGame();
