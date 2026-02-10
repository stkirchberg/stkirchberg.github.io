const links = document.querySelectorAll('.nav-link');
const activeInd = document.querySelector('.nav-indicator-active');
const hoverInd = document.querySelector('.nav-indicator-hover');
const sections = document.querySelectorAll('section');

function moveIndicator(element, indicator) {
    if (element) {
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.left = `${element.offsetLeft}px`;
    }
}

links.forEach(link => {
    link.addEventListener('mouseenter', () => moveIndicator(link, hoverInd));
});

window.addEventListener('scroll', () => {
    let current = "about";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
            moveIndicator(link, activeInd);
        }
    });
});

window.addEventListener('load', () => {
    const initialActive = document.querySelector('.nav-link.active');
    moveIndicator(initialActive, activeInd);
});

document.querySelector('.whatsapp-link').addEventListener('click', (e) => {
    e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});