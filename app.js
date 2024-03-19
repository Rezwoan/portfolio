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

    allSections.forEach((section) => {
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if (id) {
                // Remove active from all buttons first
                secBtns.forEach((btn) => btn.classList.remove("active"));
                e.target.classList.add("active");

                // Hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                });

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    });

}

PageTransitions();

