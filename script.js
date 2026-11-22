// Находим кнопку и контейнер для анимации
const partyButton = document.getElementById("partyButton");
const partyContainer = document.getElementById("party-container");

// Праздничные символы
const partySymbols = ["✦", "♡", "★", "✧", "🎉", "✿", "♥"];

// Поздравления, которые будут летать по экрану
const partyMessages = [
    "HAPPY BIRTHDAY!",
    "19 YEARS!",
    "С ПРАЗДНИКОМ!",
    "ЭТО ТВОЙ ДЕНЬ!",
    "HEY, МОШЕННИЦА!"
];

// Запускаем праздник по нажатию
partyButton.addEventListener("click", function () {
        // Меняем надпись на кнопке
    partyButton.textContent = "УРАААААААААААА! ✦";

    // Создаём 65 праздничных элементов
    for (let i = 0; i < 65; i++) {

        const confetti = document.createElement("span");

        // Случайно выбираем символ
        confetti.classList.add("confetti");
        confetti.textContent =
            partySymbols[Math.floor(Math.random() * partySymbols.length)];

        // Случайная позиция и скорость падения
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
        confetti.style.animationDelay = Math.random() * 1.5 + "s";

        partyContainer.appendChild(confetti);

        // Удаляем элемент после завершения анимации
        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }

    // Показываем праздничные надписи
    for (let i = 0; i < 5; i++) {

        const message = document.createElement("span");

        message.classList.add("confetti");
        message.textContent =
            partyMessages[Math.floor(Math.random() * partyMessages.length)];

        message.style.left = Math.random() * 70 + "vw";
        message.style.fontSize = "14px";
        message.style.fontWeight = "bold";
        message.style.animationDuration = "4s";

        partyContainer.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 5000);
    }

});
// Находим фон для падающего конфетти
const backgroundConfetti = document.getElementById("background-confetti");

// Символы для украшения
const backgroundSymbols = ["✦", "♡", "✧", "★", "✿"];

// Создаём 25 частичек
for (let i = 0; i < 25; i++) {

    const piece = document.createElement("span");

    piece.classList.add("background-piece");
    piece.textContent =
        backgroundSymbols[Math.floor(Math.random() * backgroundSymbols.length)];

    // Случайное расположение по горизонтали
    piece.style.left = Math.random() * 100 + "vw";

    // Разная скорость падения
    piece.style.animationDuration = (7 + Math.random() * 10) + "s";

    // Разное время начала анимации
    piece.style.animationDelay = (-Math.random() * 15) + "s";

    // Разный размер
    piece.style.fontSize = (10 + Math.random() * 15) + "px";

    backgroundConfetti.appendChild(piece);
}
// Создаём фольгированные цифры 1 и 9
["1", "9"].forEach((number, index) => {

    const balloon = document.createElement("span");

    balloon.classList.add("number-balloon");
    balloon.textContent = number;

    // Добавляем ленточку
    const string = document.createElement("span");
    string.classList.add("balloon-string");
    balloon.appendChild(string);

    // Располагаем цифры рядом друг с другом
    balloon.style.left = index === 0 ? "35%" : "55%";

    // Небольшая разница во времени запуска
    balloon.style.animationDelay = index * 0.3 + "s";
    // Разный угол наклона для каждой цифры
balloon.style.marginLeft = index === 0 ? "-10px" : "10px";

    partyContainer.appendChild(balloon);

    // Удаляем шарик после анимации
    setTimeout(() => {
        balloon.remove();
    }, 7500);
});