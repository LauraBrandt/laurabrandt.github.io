/********** Navbar toggle **********/
let open = false;
const toggleNavButton = document.querySelector('.toggle-nav');
const navList = document.querySelector('nav ul');

toggleNavButton.addEventListener('click', e => {
  e.preventDefault();

  if (open) {
    toggleNavButton.classList.remove('close');
    navList.classList.remove('open');
  } else {
    toggleNavButton.classList.add('close');
    navList.classList.add('open');
  }

  open = !open;
});

document.addEventListener('click', e => {
  const classList = e.target.classList;
  if (open && !(classList.contains('lines') || classList.contains('toggle-nav'))) {
    open = false;
    toggleNavButton.classList.remove('close');
    navList.classList.remove('open');
  }
});


/********** Portfolio link from home **********/
const linkPortfolioButton = document.querySelector('.link-portfolio');
linkPortfolioButton.addEventListener('click', e => {
  document.getElementById('portfolio').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
});


/********** Portfolio Items **********/
requirejs(["portfolioItems"], ({ portfolioItems }) => {
  let portfolioHtml = '';
  portfolioItems.forEach(item => {
    portfolioHtml += `
      <div class="card">
        <div class="card-img">
          <img class="img1" src="${item.imageUrl1}" alt="${item.name} screenshot">
          <img class="img2" src="${item.imageUrl2}" alt="${item.name} screenshot">
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
        </div>
        <div class="card-overlay">
          <div class="card-overlay-content">
            <h5 class="card-overlay-title">${item.name}</h5>
            <div class="card-overlay-tools">
              <ul>
                ${item.tools.map(tool => `<li>${tool}</li>`).join('')}
              </ul>
            </div>
            <div class="card-overlay-buttons">
              <a class="card-button" href="${item.liveUrl}"><i class="fas fa-external-link-alt"></i> View Project</a>
              <a class="card-button" href="${item.githubUrl}"><i class="fab fa-github"></i> Repository</a>
            </div>
          </div> 
        </div>
      </div>
    `
  });
  const portfolioContainer = document.querySelector('.portfolio-items');
  portfolioContainer.innerHTML = portfolioHtml;

  slideInPortfolioItems();
});


/********** On scroll functions **********/
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const navBar = document.querySelector('nav');
const navLinks = navBar.querySelectorAll('a');
const headers = document.querySelectorAll('.title h2');

function checkNav() {
  if (window.scrollY > window.innerHeight - navBar.offsetHeight) {
    if (window.innerWidth > 500) {
      navBar.classList.add('dark');
    }
  } else {
    navBar.classList.remove('dark');
  }
}

function checkActiveNav() {
  navLinks.forEach(link => {
    const id = link.getAttribute("href").slice(1);
    const refElement = document.getElementById(id);
    if (refElement &&
        refElement.offsetTop <= window.scrollY + 1.5*navBar.offsetHeight && 
        refElement.offsetTop + refElement.offsetHeight > window.scrollY + 1.5*navBar.offsetHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function checkTitle() {
  for (let i=0; i < headers.length; i++) {
    const slideInAt = window.scrollY + window.innerHeight;
    let isShown = slideInAt > headers[i].offsetTop && window.scrollY < headers[i].offsetTop;
    const sectionPosition = window.getComputedStyle(headers[i].parentNode.parentNode, null).position;
    if (sectionPosition !== 'static') {
      isShown = slideInAt > (headers[i].offsetTop + headers[i].parentNode.parentNode.offsetTop) 
                && window.scrollY < (headers[i].offsetTop + headers[i].parentNode.parentNode.offsetTop);
    }
    if (isShown) {
      headers[i].classList.add('line-showing');
    } else {
      headers[i].classList.remove('line-showing');
    }
  }
}

function slideInPortfolioItems() {
  const portfolioItems = document.querySelectorAll('.card');
  portfolioItems.forEach(card => {
    const slideInAt = (window.scrollY + window.innerHeight) - card.offsetHeight / 2;
    const isHalfShown = slideInAt > card.offsetTop;
    if (isHalfShown) {
      card.classList.add('showing');
    }
  });
}

function handleScroll() {
  checkNav();
  checkActiveNav();
  checkTitle();
  slideInPortfolioItems();
}

window.addEventListener('scroll', debounce(handleScroll));
window.addEventListener('load', handleScroll);
