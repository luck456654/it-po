const modalWindow = document.querySelector(".modal")
const modalOpen=document.querySelector(".header__button")
const modalCancel=document.querySelector(".modal__cancel")
const input=document.querySelector(".modal__input")
const signin=document.querySelector(".modal__signin")
let text=document.querySelector(".header__name")

modalOpen.addEventListener("click",showModal)
modalCancel.addEventListener("click",closeModal)
signin.addEventListener("click",signName)


function showModal(){
    modalWindow.style="display:flex";
}
function closeModal(){
    input.value='';
    modalWindow.style="display:none";
}
function signName() {
    text.style="display:block";
    modalOpen.style="display:none";
    text.innerHTML=input.value;
    modalWindow.style="display:none";
}
