

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

//Burger menu ==================================
let nav = document.querySelector('#nav');
let navToggle = document.querySelector('#navToggle');
navToggle.addEventListener("click",function (event){
    event.preventDefault();
    if(!nav.classList.contains("show")){
        nav.classList.add("show");
    } else{
        nav.classList.remove("show");
    }
});


//Skype========================================

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = document.querySelector('#email');

    email.addEventListener('change', function (e){
        if(reg.test(this.value) == false) {
            alert('Введите корректный e-mail');
            this.value = "";
            return false;
        }
    });

//Date =================================================
let input__select = document.querySelector('#input__select');
input__select.addEventListener('click', function (e){
    if(!input__select.classList.contains("close")){
        input__select.classList.add("close");
    } else{
        input__select.classList.remove("close");
    }
});
