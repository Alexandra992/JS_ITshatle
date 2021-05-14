let header = document.getElementById('header');
let btnFormHeaderSignIn = document.querySelector("#form-header-signin");
let btnFormHeaderCheckIn = document.querySelector("#form-header-checkin");

let btnSignIn = document.querySelector('#sign-in-submit');
let btnCheckIn = document.querySelector('#check-in-submit');

let formSignIn = document.querySelector('#sign-in-form');
let formCheckIn = document.querySelector('#check-in-form');

let checkInInputs = document.querySelectorAll('.check-in');
let signInInputs = document.querySelectorAll('.sign-in');

let regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
let user = {};
let users = [];

window.onload = () => {
    formCheckIn.hidden = true;
    header.style.opacity = '0';
    btnSignIn.disabled = true;
    btnCheckIn.disabled = true;

}


// Переключение между формами регистрации и входа


function activeBtnSign(e) {
    e.preventDefault();
    btnFormHeaderSignIn.style.borderBottom = 'solid 3px #7B68EE';
    btnFormHeaderSignIn.style.fontWeight = '600';
    formSignIn.hidden = false;


    btnFormHeaderCheckIn.style.borderBottom = 'none';
    btnFormHeaderCheckIn.style.fontWeight = '300';
    formCheckIn.hidden = true;
}


function activeBtnCheck(e) {
    e.preventDefault();
    btnFormHeaderCheckIn.style.borderBottom = 'solid 3px #7B68EE';
    btnFormHeaderCheckIn.style.fontWeight = '600';
    formCheckIn.hidden = false;

    btnFormHeaderSignIn.style.borderBottom = 'none';
    btnFormHeaderSignIn.style.fontWeight = '300';
    formSignIn.hidden = true;

}

btnFormHeaderSignIn.addEventListener('click', activeBtnSign);
btnFormHeaderCheckIn.addEventListener('click', activeBtnCheck);





//Регистрация

checkInInputs.forEach(element => {
    element.addEventListener('change', toVerifyInput);
    element.addEventListener('input', toCleanErr);
    element.addEventListener('blur', toCheckForm);

})

    //проверяю поля формы на соответствие, вывожу сообщения об ошибках
function toVerifyInput() {

    for (let elem of checkInInputs) {
        if (elem.value === '') {
            elem.nextElementSibling.textContent = "Данное поле не заполнено";
        } else if (elem.name === 'email') {
            if (regExpEmail.test(elem.value)) {
                elem.nextElementSibling.textContent = ""
            } else {
                elem.nextElementSibling.textContent = "Некорректный e-mail";
            }
        } else if (elem.name === 'repeat-password') {
            let pass = document.getElementById('check-in-pass').value;
            if (elem.value !== pass) {
                elem.nextElementSibling.textContent = "Пароли не совпадают";
            }
        } else {
            elem.nextElementSibling.textContent = "";
        }
    }

}

//скрываю сообщения об ошибке на инпут
function toCleanErr() {
    for (let elem of checkInInputs) {
        elem.nextElementSibling.textContent = "";
    }
}


//вот тут пытаюсь сделать кнопку снова активной, но не получается((
function toCheckForm() {
        let email = document.getElementById('check-in-email');
        let pass = document.getElementById('check-in-pass');
        let repeatPass = document.getElementById('repeat-pass');
        if ((email.nextElementSibling.textContent && pass.nextElementSibling.textContent && repeatPass.nextElementSibling.textContent) === "") {
            btnCheckIn.disabled = false;
        } else {
            btnCheckIn.disabled = true;
        }
    
}



//запись нового пользователя
/* checkInInputs.forEach(element => {
    if (element.name === 'email') {
        user.email = element.value;
    } else if (element.name === 'password') {
        user.pass = element.value;
    }
});
console.log(user); */




/* formCheckIn.addEventListener('submit', (event) => {
    toVerifyInput(formCheckIn)
}); */



//Вход

/* 
formSignIn.addEventListener('submit', (event) => {
    toVerifyInput(formSignIn)
}); */