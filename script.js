// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем кнопки, которые открывают модальное окно
var btn1 = document.getElementById("openFormButton1");
var btn2 = document.getElementById("openFormButton2");
var btn3 = document.getElementById("openFormButton3");
var btn4 = document.getElementById("openFormButton4");
var btn5 = document.getElementById("openFormButton5");
var btn6 = document.getElementById("openFormButton6");

// Получаем элемент <span> для закрытия модального окна
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открывается модальное окно
btn1.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

btn3.onclick = function() {
    modal.style.display = "block";
}

btn4.onclick = function() {
    modal.style.display = "block";
}

btn5.onclick = function() {
    modal.style.display = "block";
}

btn6.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрывается модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает вне модального окна, оно закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    // Показываем сообщение об успешной отправке
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    successMessage.classList.add("animate");

    // Очищаем поля формы (необязательно)
    document.getElementById("contactForm").reset();

    // Закрытие модального окна после 2 секунд (необязательно)
    setTimeout(function() {
        successMessage.classList.remove("animate");
        setTimeout(function() {
            modal.style.display = "none";
        }, 900); // Задержка для завершения анимации
    }, 2000);
});
