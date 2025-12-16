// Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand();

// Простой список кнопок
let brands = ['toyota', 'bmw', 'mercedes', 'audi', 'honda', 'ford', 'volkswagen', 'nissan', 'hyundai', 'kia'];

let container = document.getElementById('cars-container');

brands.forEach(brand => {
    let btn = document.createElement('button');
    btn.textContent = brand.toUpperCase();
    btn.style.cssText = 'padding:15px; margin:5px; background:#2cab37; color:white; border:none; border-radius:8px;';
    
    btn.onclick = function() {
        console.log('Отправляю:', brand);
        tg.sendData(brand);
        tg.close();
    };
    
    container.appendChild(btn);
});
