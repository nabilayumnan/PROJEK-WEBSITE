
const navButton = document.getElementById("navButton");
const menu = document.getElementById("menu");
const exit = document.getElementById("exit");


function showMenuBtn() {
    menu.classList.toggle("hidden");
};

const articlePhone = document.getElementById('articlePhone');
const moreArticlePhone = document.getElementById('moreArticlePhone'); 


function showArticleBtn() {
    articlePhone.classList.toggle("hidden");
};

function hideMoreArticle(){
    moreArticlePhone.classList.toggle('hidden')
};

function selengkapnyaa(){
    showArticleBtn();
    hideMoreArticle();
};

const articleLaptop = document.getElementById('articleLaptop');
const moreArticleLaptop = document.getElementById('moreArticleLaptop'); 


function showArticleLaptopBtn() {
    articleLaptop.classList.toggle("hidden");
};

function hideMoreArticleLaptop(){
    moreArticleLaptop.classList.toggle('hidden')
};

function selengkapnyaaLaptop(){
    showArticleLaptopBtn();
    hideMoreArticleLaptop();
};

// Get the modal
var modal = document.getElementById('id01');
const login = document.getElementById('login');
const form = document.getElementById('form')

function showform(){
    login.classList.toggle('form')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "webdev") {
        alert("You have successfully logged in.");
        location.reload();
    } 
    else {
        alert("You input the wrong E-mail / Password.");
        
    }
})
