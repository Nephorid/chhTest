const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

document.addEventListener('DOMContentLoaded', createCaptcha);

let userDigits = '';

function createCaptcha() {
    userDigits = '';
    const captchaContainer = document.getElementById('captcha');
    const shuffledDigits = shuffleArray(digits);

    shuffledDigits.forEach(digit => {
        const button = document.createElement('button');
        button.classList.add('button');
        button.innerText = digit;
        button.addEventListener('click', () => addToUserDigits(digit));
        captchaContainer.appendChild(button);
    });
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function addToUserDigits(digit) {
    userDigits += digit;

  
    if (userDigits.length === digits.length) {
        if (userDigits === digits.join('')) {
            alert('Doğrulama başarılı!'); 
            createCaptcha(); 
        } else {
            alert('Doğrulama başarısız! Tekrar deneyin.'); 
            userDigits = ''; 
        }
    }
}
