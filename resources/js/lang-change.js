const lang_flag_img = document.getElementById('lang-flag');
const lang_flag_container = document.getElementById('lang-flag-container');
const navLinks = document.querySelectorAll('.nav-link');
const bioText = document.getElementById('card-txt-bio');
const jobText = document.getElementById('card-txt-exp-intl');

const imgSrc = ['resources/images/united-kingdom.png', 'resources/images/poland.png'];

lang_flag_img.src = imgSrc[0];

const loadContent = (language) => {
    fetch('resources/data/lang-content.json')
        .then(response => response.json())
        .then(data => {
            const content = data[language];
            navLinks[0].textContent = content.navigation.bio;
            navLinks[1].textContent = content.navigation.job;
            navLinks[2].textContent = content.navigation.projects;
            navLinks[3].textContent = content.navigation.contact;

            bioText.innerHTML = content['card-txt-bio'];
            jobText.innerHTML = content['card-txt-exp-intl'];
        })
        .catch(error => console.error('Error loading content:', error));
}

loadContent('polish');

lang_flag_container.addEventListener('click', () => {
    const newLang = lang_flag_img.src.includes(imgSrc[0]) ? 'english' : 'polish';
    lang_flag_img.src = lang_flag_img.src.includes(imgSrc[0]) ? imgSrc[1] : imgSrc[0];
    loadContent(newLang);
});

