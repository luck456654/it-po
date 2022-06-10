const modalWindow = document.querySelector(".modal")
const modalOpen=document.querySelector(".header__button")
const modalCancel=document.querySelector(".modal__cancel")
const input=document.querySelector(".modal__input")
const signin=document.querySelector(".modal__signin")
let text=document.querySelector(".header__name")
let currency=document.querySelector(".header__curr")

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

var myHeaders = new Headers();
myHeaders.append("apikey", "vkK3Aqyr0PBNhl5Q6Mm991KSsJxaxvgU");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/currency_data/change", requestOptions)
.then(response => response.json())
.then(response => {
    currency.innerHTML=response.quotes.USDRUB.end_rate

})
.catch(error => console.log('error', error.message))
