// Rakamlar dizisi
const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Sayfayı yüklediğimizde captcha oluştur
document.addEventListener('DOMContentLoaded', createCaptcha);

// Doğrulamayı kontrol etmek için kullanıcının girdiği rakamları sakla
let userDigits = '';

// Doğrulama yapılacak rakamları karıştır ve ekrana bastır
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

// Rakamları rastgele karıştırmak için kullanılacak yardımcı fonksiyon
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Kullanıcının girdiği rakamları doğrulama için saklayan fonksiyon
function addToUserDigits(digit) {
    userDigits += digit;

    // Eğer kullanıcı doğru sırayla tıklarsa, 1234 gibi beklenen bir dizi elde ederiz
    if (userDigits.length === digits.length) {
        if (userDigits === digits.join('')) {
            alert('Doğrulama başarılı!'); // Doğrulama başarılı mesajı
            createCaptcha(); // Yeni bir captcha oluştur
        } else {
            alert('Doğrulama başarısız! Tekrar deneyin.'); // Doğrulama başarısız mesajı
            userDigits = ''; // Kullanıcının girdiği rakamları sıfırla
        }
    }
}