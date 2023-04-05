const comfim = document.querySelector('.js-login-cfm')
const users = document.querySelector('.js-login')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container') 

function showBuyTickets() {
    modal.classList.add('open')  
}

function hideShowBuyTickets() {
    modal.classList.remove('open')  
}

users.addEventListener('click', showBuyTickets)

modalClose.addEventListener('click', hideShowBuyTickets)
comfim.addEventListener('click', hideShowBuyTickets)
modal.addEventListener('click', hideShowBuyTickets)
modalContainer.addEventListener('click' ,function (event) {
    event.stopPropagation()
} )