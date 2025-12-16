// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем на весь экран

// База данных автомобилей (должна соответствовать боту)
let cars = [
    { key: 'toyota', name: 'Toyota', emoji: '🚗' },
    { key: 'bmw', name: 'BMW', emoji: '🏎' },
    { key: 'mercedes', name: 'Mercedes', emoji: '⭐' },
    { key: 'audi', name: 'Audi', emoji: '🔧' },
    { key: 'honda', name: 'Honda', emoji: '🚙' }, // вместо 🇯🇵
    { key: 'ford', name: 'Ford', emoji: '🚘' },   // вместо 🇺🇸
    { key: 'volkswagen', name: 'Volkswagen', emoji: '🚐' }, // вместо 🇩🇪
    { key: 'nissan', name: 'Nissan', emoji: '⚡' },
    { key: 'hyundai', name: 'Hyundai', emoji: '🚙' }, // вместо 🇰🇷
    { key: 'kia', name: 'Kia', emoji: '🌀' }
];

// Получаем контейнер для кнопок
let container = document.getElementById('cars-container');

// Создаем кнопки для каждого автомобиля
cars.forEach(car => {
    let button = document.createElement('button');
    button.className = 'car-btn';
    button.innerHTML = `
        <div class="emoji">${car.emoji}</div>
        <div class="name">${car.name}</div>
    `;
    
    // Обработчик клика
    button.addEventListener('click', function() {
        // Отправляем ключ автомобиля в бот
        tg.sendData(car.key);
        // Закрываем Web App
        tg.close();
    });
    
    container.appendChild(button);
});

// Меняем цвет кнопки "Назад" в Telegram
tg.BackButton.onClick(function() {
    tg.close();
});
