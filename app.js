// Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand();

console.log('✅ Web App загружен');

// Создаем простые кнопки
let cars = ['toyota', 'bmw', 'mercedes', 'audi', 'honda', 
            'ford', 'volkswagen', 'nissan', 'hyundai', 'kia'];

let container = document.getElementById('cars-container');

// Простые названия для кнопок
let carNames = {
    'toyota': '🚗 Toyota',
    'bmw': '🏎 BMW', 
    'mercedes': '⭐ Mercedes',
    'audi': '🔧 Audi',
    'honda': '🇯🇵 Honda',
    'ford': '🇺🇸 Ford',
    'volkswagen': '🇩🇪 Volkswagen',
    'nissan': '⚡ Nissan',
    'hyundai': '🇰🇷 Hyundai',
    'kia': '🌀 Kia'
};

// Создаем кнопки
cars.forEach(key => {
    let btn = document.createElement('button');
    btn.textContent = carNames[key];
    btn.style.cssText = `
        padding: 15px;
        margin: 8px;
        background: #2cab37;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        width: 160px;
        height: 70px;
    `;
    
    btn.onclick = function() {
        console.log('🔘 Нажата кнопка:', key);
        console.log('📤 Отправляю данные:', key);
        
        // Отправляем данные
        tg.sendData(key);
        
        console.log('✅ Данные отправлены');
        
        // Закрываем Web App
        setTimeout(() => {
            tg.close();
            console.log('📱 Web App закрыт');
        }, 500);
    };
    
    container.appendChild(btn);
});

console.log(`✅ Создано ${cars.length} кнопок`);
