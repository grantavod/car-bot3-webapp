// ==================== ТЕЛЕГРАМ WEB APP ИНИЦИАЛИЗАЦИЯ ====================
let tg = window.Telegram.WebApp;

// Раскрываем Web App на весь экран
tg.expand();

// Показываем кнопку "Назад"
tg.BackButton.show();
tg.BackButton.onClick(() => {
    tg.close();
});

console.log('✅ Telegram Web App инициализирован');
console.log('👤 Пользователь:', tg.initDataUnsafe.user?.first_name);
console.log('📱 Платформа:', tg.platform);

// ==================== БАЗА ДАННЫХ АВТОМОБИЛЕЙ ====================
const cars = [
    { 
        key: 'toyota', 
        name: 'Toyota', 
        emoji: '🚗',
        color: '#FF6B6B'
    },
    { 
        key: 'bmw', 
        name: 'BMW', 
        emoji: '🏎️',
        color: '#4ECDC4'
    },
    { 
        key: 'mercedes', 
        name: 'Mercedes', 
        emoji: '⭐',
        color: '#FFD166'
    },
    { 
        key: 'audi', 
        name: 'Audi', 
        emoji: '🔧',
        color: '#06D6A0'
    },
    { 
        key: 'honda', 
        name: 'Honda', 
        emoji: '🇯🇵',
        color: '#118AB2'
    },
    { 
        key: 'ford', 
        name: 'Ford', 
        emoji: '🇺🇸',
        color: '#EF476F'
    },
    { 
        key: 'volkswagen', 
        name: 'Volkswagen', 
        emoji: '🇩🇪',
        color: '#073B4C'
    },
    { 
        key: 'nissan', 
        name: 'Nissan', 
        emoji: '⚡',
        color: '#7209B7'
    },
    { 
        key: 'hyundai', 
        name: 'Hyundai', 
        emoji: '🇰🇷',
        color: '#F15BB5'
    },
    { 
        key: 'kia', 
        name: 'Kia', 
        emoji: '🌀',
        color: '#00BBF9'
    }
];

// ==================== СОЗДАНИЕ ИНТЕРФЕЙСА ====================
function createInterface() {
    const container = document.getElementById('cars-container');
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    // Создаем кнопки для каждого автомобиля
    cars.forEach(car => {
        // Создаем элемент кнопки
        const button = document.createElement('button');
        button.className = 'car-button';
        button.id = `btn-${car.key}`;
        
        // Устанавливаем цвет фона
        button.style.backgroundColor = car.color;
        
        // Создаем содержимое кнопки
        button.innerHTML = `
            <div class="car-icon">${car.emoji}</div>
            <div class="car-name">${car.name}</div>
        `;
        
        // Добавляем обработчик клика
        button.addEventListener('click', () => handleCarSelect(car));
        
        // Добавляем кнопку в контейнер
        container.appendChild(button);
        
        console.log(`✅ Создана кнопка для ${car.name} (${car.key})`);
    });
    
    console.log(`✅ Создано ${cars.length} кнопок автомобилей`);
}

// ==================== ОБРАБОТКА ВЫБОРА АВТОМОБИЛЯ ====================
function handleCarSelect(car) {
    console.log('🔘 Нажата кнопка:', car.name);
    console.log('📤 Отправляю данные боту:', car.key);
    
    // Показываем анимацию нажатия
    const button = document.getElementById(`btn-${car.key}`);
    button.style.transform = 'scale(0.95)';
    button.style.opacity = '0.8';
    
    // 1. Отправляем данные в Telegram бота
    // ВАЖНО: tg.sendData() отправляет данные обратно в бота
    try {
        tg.sendData(car.key);
        console.log('✅ Данные успешно отправлены в бота');
        
        // Показываем уведомление
        showNotification(`✅ Выбрано: ${car.name}`);
        
    } catch (error) {
        console.error('❌ Ошибка при отправке данных:', error);
        showNotification('❌ Ошибка отправки данных');
        return;
    }
    
    // 2. Закрываем Web App через 1 секунду
    setTimeout(() => {
        console.log('📱 Закрываю Web App...');
        tg.close();
    }, 1000);
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================
function showNotification(message) {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 12px 20px;
        border-radius: 10px;
        z-index: 1000;
        font-size: 14px;
        animation: fadeInOut 2s ease-in-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Удаляем уведомление через 2 секунды
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Добавляем анимацию для уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        15% { opacity: 1; transform: translateX(-50%) translateY(0); }
        85% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
    }
`;
document.head.appendChild(style);

// ==================== ЗАПУСК ПРИЛОЖЕНИЯ ====================
// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM загружен, создаю интерфейс...');
    createInterface();
    
    // Выводим информацию для отладки
    console.log('🚀 Web App готов к работе!');
    console.log('👉 Нажмите на любую кнопку автомобиля');
});
