// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;

// Раскрываем на весь экран
tg.expand();

// База данных автомобилей (ключи ДОЛЖНЫ совпадать с ботом)
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

// Создаем кнопки для каждого автомобиля
for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    
    // Создаем кнопку
    let button = document.createElement('button');
    button.className = 'car-btn';
    
    // Содержимое кнопки
    button.innerHTML = `
        <div class="emoji">${car.emoji}</div>
        <div class="name">${car.name}</div>
    `;
    
    // ⭐⭐ ВАЖНО: Обработчик клика ⭐⭐
    button.onclick = function() {
        console.log('Нажата кнопка:', car.key); // Для отладки
        
        // ⭐⭐ ОТПРАВЛЯЕМ ДАННЫЕ В БОТ ⭐⭐
        tg.sendData(car.key);
        
        // Закрываем Web App
        tg.close();
    };
    
    // Добавляем кнопку в контейнер
    container.appendChild(button);
}

// Обработчик кнопки "Назад" в Telegram
if (tg.BackButton) {
    tg.BackButton.onClick(function() {
        tg.close();
    });
}

// Для отладки: выводим в консоль при загрузке
console.log('Web App загружен! Доступные марки:');
cars.forEach(car => {
    console.log(`${car.emoji} ${car.name} -> ${car.key}`);
});
