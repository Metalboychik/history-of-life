document.addEventListener('DOMContentLoaded', function() {
    const storyText = document.querySelectorAll('p');
    storyText.forEach(paragraph => {
        if (paragraph.textContent.includes('я її сильно кохаю')) {
            const button = document.createElement('button');
            button.textContent = 'Класна кнопка';
            button.style.cssText = `
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            `;
            paragraph.appendChild(button);
        }
    });
});