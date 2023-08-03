// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll('.animated');

if (animatedItems.length) {
    function fadeInOnScroll() {
        for (i = 0; i < animatedItems.length; i++) {
            let animatedItem = animatedItems[i];
            let animatedItemHeight = animatedItem.offsetHeight;
            let animatedItemOffset = offset(animatedItem).top;
            let animationStart = 2;

            let animatedItemPoint = window.innerHeight - animatedItemHeight / animationStart;

            if (animatedItemHeight > window.innerHeight) {
                animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > animatedItemOffset - animatedItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add('fade-in');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

window.addEventListener('scroll', fadeInOnScroll);

// STICKY HEADER
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// RANGE SLIDER
let slider = document.querySelector(".investment-input");
let output = document.querySelector(".invest-value-number");
let profit = document.querySelector(".profit-value-number");
let progressLine = document.querySelector(".input-progress-line");
output.innerText = slider.value;

slider.oninput = function () {
    output.innerText = this.value;
    profit.innerText = Math.ceil(this.value * 2.09);
    progressLine.style.width = 'calc(' + Math.ceil((this.value - 250) / 7.5) + '% - 20px)';
}                         

// NUMBERS
const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
document.querySelector('.on-page-number').innerHTML = randomInt(116, 486);
document.querySelector('.places-number').innerHTML = randomInt(11, 23);
                            

// MODAL
const licenseModalCall = document.querySelectorAll(".license-modal-call");
const licenseModalClose = document.querySelector(".close-icon");
const licenseModal = document.querySelector(".license-modal");
const modalContent = document.querySelector(".modal-content");

function openModal() {
    licenseModal.classList.add('active');
}

function closeModal() {
    if (licenseModal.classList.contains('active')) {
        licenseModal.classList.remove('active');
    }
}

licenseModalCall.forEach(el => el.addEventListener('click', openModal));

licenseModalClose.addEventListener('click', closeModal);

licenseModal.addEventListener('click', closeModal);

modalContent.addEventListener('click', e => e.stopPropagation());

// YEAR
document.querySelector('.year').innerText = new Date().getFullYear();
                            
// NAVIGATION
const scrollToElem = (elem) => {
    document.querySelector(elem).scrollIntoView({behavior:"smooth"});
}

// Form Submission
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let phoneValue = document.querySelector('.phone');
let requiredFields = document.querySelectorAll('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '' && phoneValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.forEach((e) => {
            e.classList.add('visible');
        })
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email, .phone');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        requiredFields.forEach((e) => {
            if (e.classList.contains('visible')) {
                e.classList.remove('visible');
            }
        })
    });
}
                                                       
                            
                            
