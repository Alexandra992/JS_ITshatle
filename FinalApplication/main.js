
let header = document.getElementById('header');
let btnFormHeaderSignIn = document.querySelector("#form-header-signin");
let btnFormHeaderCheckIn = document.querySelector("#form-header-checkin");
let btnSignIn = document.querySelector('#sign-in-submit');
let btnCheckIn = document.querySelector('#check-in-submit');
let formSignIn = document.querySelector('#sign-in-form');
let formCheckIn = document.querySelector('#check-in-form');
let users = [];

window.onload = () => {
    formCheckIn.hidden = true;
    header.style.opacity = '0';
    //btnSignIn.disabled = true;

}

function activeBtnSign(e){
    e.preventDefault();
    btnFormHeaderSignIn.style.borderBottom = 'solid 3px #7B68EE';
    btnFormHeaderSignIn.style.fontWeight = '600';
    formSignIn.hidden = false;

    
    btnFormHeaderCheckIn.style.borderBottom = 'none';
    btnFormHeaderCheckIn.style.fontWeight = '300';
    formCheckIn.hidden = true;
}


function activeBtnCheck(e){
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




function toVerifyInput(form){
    event.preventDefault();
    for (let elem of form.elements) {
        if (elem.classList.contains('form-control') && 
        elem.tagName !== 'BUTTON'
        ){
            if (elem.value === ''){
                elem.nextElementSibling.textContent = "Данное поле не заполнено";
            } else {
                elem.nextElementSibling.textContent = "";
            }
        }
    }
}

//Вход
/* formSignIn.addEventListener('submit', (event)=>{
    event.preventDefault();
    for (let elem of formSignIn.elements) {
        if (elem.classList.contains('form-control') && 
        elem.tagName !== 'BUTTON'
        ){
            if (elem.value === ''){
                elem.nextElementSibling.textContent = "Данное поле не заполнено";
            } else {
                elem.nextElementSibling.textContent = "";
            }
        }
    }
}) */

formSignIn.addEventListener('submit', (event)=>{toVerifyInput(formSignIn)});




//Регистрация

/* formCheckIn.addEventListener('submit', (event)=>{
    event.preventDefault();
    for (let elem of formCheckIn.elements) {
        if (elem.classList.contains('form-control') && 
        elem.tagName !== 'BUTTON'
        ){
            if (elem.value === ''){
                elem.nextElementSibling.textContent = "Данное поле не заполнено";
            } else {
                elem.nextElementSibling.textContent = "";
            }
        }
    }
}) */

formCheckIn.addEventListener('submit', (event)=>{toVerifyInput(formCheckIn)});

