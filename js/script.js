(function () {
  const burgerMenu = document.querySelector('.header__burger')
  const bodyElement = document.querySelector('.body')
  const listElement = document.querySelector('.nav__link')

  bodyElement.addEventListener('click', event => {
    if (event.target && event.target.closest('.header__burger') || event.target.closest('.nav__link') && bodyElement.closest('.nav__menu-open')) {
console.log('yes');

      bodyElement.classList.toggle('nav__menu-open');

    }
  })
})()