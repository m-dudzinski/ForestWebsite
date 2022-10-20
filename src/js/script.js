const cookiesContainer = document.querySelector('.cookies-container');
const cookiesBtn = document.querySelector('.cookies-btn');
const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const navItemMobile = document.querySelectorAll('.nav-mobile-item');
const footerYear = document.querySelector('.footer-year');
const section = document.querySelectorAll('section');
const navItemDesktop = document.querySelectorAll('.nav-desktop-item');
const navContainer = document.querySelector('.navbar-container');
const activePage = window.location.pathname;

const checkCookies = () => {
  const cookiesAccepted = localStorage.getItem('cookies');
  if (cookiesAccepted) {
    cookiesContainer.classList.add('cookies-hide');
  }
};
checkCookies();

const handleCookiesContainer = () => {
  localStorage.setItem('cookies', 'true');
  cookiesContainer.classList.add('cookies-hide');
};

window.onscroll = () => {
  if (activePage !== '/oferta.html' && activePage !== '/kontakt.html') {
    section.forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - navContainer.offsetHeight - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navItemDesktop.forEach((item) => {
          item.classList.remove('active');
          document.querySelector('.nav-desktop-item[href*=' + id + ']').classList.add('active');
        });
      } else if (top <= 300) {
        navItemDesktop.forEach((item) => {
          item.classList.remove('active');
          navItemDesktop[0].classList.add('active');
        });
      }
    });
  } else if (activePage == '/kontakt.html') {
    navItemDesktop[3].classList.add('active');
  }
};

const handleNav = () => {
  document.body.classList.toggle('no-scroll');
  navMobile.classList.toggle('nav-mobile--active');
  navItemMobile.forEach((item) => {
    item.addEventListener('click', () => {
      navMobile.classList.remove('nav-mobile--active');
    });
  });
};

const homeButtonAction = () => {
  if (activePage.includes('/index.html')) {
    navItemDesktop[0].setAttribute('href', '#');
  }
};
homeButtonAction();

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();

burgerBtn.addEventListener('click', handleNav);
cookiesBtn.addEventListener('click', handleCookiesContainer);
