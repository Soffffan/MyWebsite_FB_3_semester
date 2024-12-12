//11
// const h2 = document.querySelector('h2');
// h2.textContent = "Добро пожаловать на сайт)";
// h2.style.color = "red";

// const first_p1 = document.getElementById("text");
// first_p1.textContent = "Это новый текст параграфа."

// const video = document.getElementById("video");
// video.style.display = "none";


var modal = document.getElementById("myModal");

var btn1 = document.getElementById("openFormButton1");
var btn2 = document.getElementById("openFormButton2");
var btn3 = document.getElementById("openFormButton3");
var btn4 = document.getElementById("openFormButton4");
var btn5 = document.getElementById("openFormButton5");
var btn6 = document.getElementById("openFormButton6");

var span = document.getElementsByClassName("close")[0];

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

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let formData = {
    name: '',
    email: '',
    number: '',
    date: '',
    comment: '',
    printData: function() {
        console.log("Имя:", this.name);
        console.log("E-mail:", this.email);
        console.log("Телефон:", this.number);
        console.log("Дата:", this.date);
        console.log("Комментарий:", this.comment);
    }
}

function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let comment = document.getElementById("comment").value;

    if (!name || !email || !comment) {
        alert("Поля 'ФИО', 'E-mail' и 'Комментарий' обязательны для заполнения.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Некорректный формат e-mail.");
        return;
    }

    let phonePattern = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
    if (!phonePattern.test(phone)) {
        alert("Некорректный формат номера телефона.");
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.number = phone;
    formData.date = date;
    formData.comment = comment;

    formData.printData();

    document.getElementById("successMessage").style.display = "block";

    document.getElementById("contactForm").reset();

    setTimeout(function() {
        document.getElementById("myModal").style.display = "none";
    }, 2000);
}

document.getElementById("contactForm").addEventListener("submit", submitForm);


//12
function showMessage (text){
    console.log(text);
}

function changeBackgroundColor (color){
    document.body.style.backgroundColor = color;
}

function toggleVisibility (item){
    item = document.getElementById(item);
    if (item.style.display == "none"){
        item.style.display = "block";
    }
    else{
        item.style.display = "none";
    }
}

function changeText() {
    var urlParams = new URLSearchParams(window.location.search);
    var utmTerm = urlParams.get('utm_term');

    if (utmTerm) {
        document.getElementById('text').textContent = utmTerm;
    }
}

window.onload = changeText;


function logCurrentTime(){
    const currentTime = new Date(); 
    console.log(currentTime.toLocaleTimeString());
}

function resetBackgroundColor(){
    document.body.style.backgroundColor = "white";
}