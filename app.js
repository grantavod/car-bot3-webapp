// Telegram Web App
let tg = window.Telegram.WebApp;

// Раскрываем на весь экран
tg.expand();

console.log('✅ Web App запущен в Telegram');

// База автомобилей
const cars = [
    { key: 'toyota', name: 'Toyota', emoji: '🚗' },
    { key: 'bmw', name: 'BMW', emoji: '🏎️' },
    { key: 'mercedes', name: 'Mercedes', emoji: '⭐' },
    { key: 'audi', name: 'Audi', emoji: '🔧' },
    { key: 'honda', name: 'Honda', emoji: '🇯🇵' },
    { key: 'ford', name: 'Ford', emoji: '🇺🇸' },
    { key: 'volkswagen', name: 'Volkswagen', emoji: '🇩🇪' },
    { key: 'nissan', name: 'Nissan', emoji: '⚡' },
    { key: 'hyundai', name: 'Hyundai', emoji: '🇰🇷' },
    { key: 'kia', name: 'Kia', emoji: '🌀' }
];

// Создаем кнопки
function createButtons() {
    const container = document.getElementById('cars-container');
    container.innerHTML = ''; // Очищаем
    
    cars.forEach(car => {
        const btn = document.createElement('button');
        btn.className = 'car-btn';
        btn.innerHTML = `
            <span class="car-emoji">${car.emoji}</span>
            <span class="car-name">${car.name}</span>
        `;
        
        // Обработчик клика
        btn.onclick = function() {
            console.log('Нажата:', car.key);
            
            // Отправляем данные в бот
            tg.sendData(car.key);
            
            // Закрываем Web App через 0.5 секунды
            setTimeout(() => {
                tg.close();
            }, 500);
        };
        
        container.appendChild(btn);
    });
    
    console.log('Создано кнопок:', cars.length);
}

// Запускаем при загрузке
document.addEventListener('DOMContentLoaded', createButtons);
