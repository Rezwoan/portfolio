const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls')
const secBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')


function PageTransitions() {
    // Button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.className = currentBtn.className.replace('active-btn', '');
            }
            this.className += ' active-btn';
        });
    }
}

PageTransitions();

