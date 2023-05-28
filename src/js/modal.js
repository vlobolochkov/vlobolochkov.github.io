let feedbackBtn = document.querySelector('.header__nav__info__btn--chat')
let feedbackBlock = document.querySelector('.feedback-modal')
let feedbackCloseBtn = document.querySelector('.feedback-modal__menu-burger')
feedbackBtn.addEventListener('click', () => {
  feedbackBlock.style.visibility = 'visible'
  document.querySelector('.header__menu-burger').style = 'z-index: 0;'
})
feedbackCloseBtn.addEventListener('click', () => {
  feedbackBlock.style.visibility = 'hidden'
  document.querySelector('.header__menu-burger').style = 'z-index: 2;'
})

let callBtn = document.querySelector('.header__nav__info__btn--call')
let callBlock = document.querySelector('.call-modal')
let callCloseBtn = document.querySelector('.call-modal__menu-burger')
callBtn.addEventListener('click', () => {
  callBlock.style.visibility = 'visible'
  document.querySelector('.header__menu-burger').style = 'z-index: 0;'
})
callCloseBtn.addEventListener('click', () => {
  callBlock.style.visibility = 'hidden'
  document.querySelector('.header__menu-burger').style = 'z-index: 2;'
})
