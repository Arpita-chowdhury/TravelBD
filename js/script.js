//-----search bar opener

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


//-----login form opener 

let formBtn = document.querySelector('#login-btn'); 
let loginForm = document.querySelector('.login-form-container');

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});


//-----login form closer

let formClose = document.querySelector('#form-close');

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});



//------cover img controler
let imgBtn = document.querySelectorAll('.img-btn');

imgBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        document.querySelector('#img-slider').src = src;
    });
});