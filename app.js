// Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand();

// База данных автомобилей
let cars = [
    { key: 'toyota', name: 'Toyota', emoji: '🚗' },
    { key: 'bmw', name: 'BMW', emoji: '🏎' },
    { key: 'mercedes', name: 'Mercedes', emoji: '⭐' },
    { key: 'audi', name: 'Audi', emoji: '🔧' },
    { key: 'honda', name: 'Honda', emoji: '🚙' },
    { key: 'ford', name: 'Ford', emoji: '🚘' },
    { key: 'volkswagen', name: 'Volkswagen', emoji: '🚐' },
    { key: 'nissan', name: 'Nissan', emoji: '⚡' },
    { key: 'hyundai', name: 'Hyundai', emoji: '🚙' },
    { key: 'kia', name: 'Kia', emoji: '🌀' }
];

// Получаем контейнер для кнопок
let container = document.getElementById('cars-container');

// Создаем кнопки
cars.forEach(car => {
    let button = document.createElement('button');
    button.className = 'car-btn';
    button.innerHTML = `
        <div class="emoji">${car.emoji}</div>
        <div class="name">${car.name}</div>
    `;
    
    // Обработчик клика
    button.addEventListener('click', function() {
        // Отправляем ключ в бот
        tg.sendData(car.key);
        // Закрываем Web App
        tg.close();
    });
    
    container.appendChild(button);
});
