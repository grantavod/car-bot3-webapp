// Telegram Web App
let tg = window.Telegram.WebApp;

// Раскрываем на весь экран
tg.expand();

console.log('✅ Web App загружен!');
console.log('🤖 Telegram WebApp API доступен:', tg);

// База данных автомобилей
let cars = [
    { key: 'toyota', name: 'Toyota' },
    { key: 'bmw', name: 'BMW' },
    { key: 'mercedes', name: 'Mercedes' },
    { key: 'audi', name: 'Audi' },
    { key: 'honda', name: 'Honda' },
    { key: 'ford', name: 'Ford' },
    { key: 'volkswagen', name: 'Volkswagen' },
    { key: 'nissan', name: 'Nissan' },
    { key: 'hyundai', name: 'Hyundai' },
    { key: 'kia', name: 'Kia' }
];

// Получаем контейнер
let container = document.getElementById('cars-container');

// Создаем кнопки
for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    
    let button = document.createElement('button');
    button.className = 'car-btn';
    button.innerHTML = car.name;
    
    // Обработчик клика
    button.addEventListener('click', function() {
        console.log('🔘 Нажата кнопка:', car.key);
        console.log('📤 Отправляю данные в бот...');
        
        try {
            // Отправляем данные
            tg.sendData(car.key);
            console.log('✅ Данные отправлены:', car.key);
        } catch (error) {
            console.error('❌ Ошибка при отправке:', error);
        }
        
        // Закрываем Web App
        setTimeout(function() {
            tg.close();
            console.log('📱 Web App закрыт');
        }, 300);
    });
    
    container.appendChild(button);
}

console.log('✅ Создано кнопок:', cars.length);
