const lang_flag_imgs = document.querySelectorAll('.lang-flag');
const lang_flag_containers = document.querySelectorAll('.lang-flag-container');
const navLinks = document.querySelectorAll('.nav-link');
const bioText = document.getElementById('card-txt-bio');

const expTexts = {
    pg:     document.getElementById('card-txt-exp-pg'),
    intel:  document.getElementById('card-txt-exp-intl'),
};

const imgSrc = [
    'resources/images/poland.png',
    'resources/images/united-kingdom.png',
];

lang_flag_imgs.forEach((img) => {
    img.src = imgSrc[0];
});


const loadContent = (language) => {
    fetch('resources/data/lang-content.json')
        .then(response => response.json())
        .then(data => {
            const content = data[language];

            for (let i=0; i<8; i++) {
                if (i%4==0) navLinks[i].textContent = content.navigation.bio;
                else if (i%4==1) navLinks[i].textContent = content.navigation.job;
                else if (i%4==2) navLinks[i].textContent = content.navigation.projects;
                else navLinks[i].textContent = content.navigation.contact;
            }

            bioText.innerHTML = content.bio_section;

            for (let id in expTexts) {
                expTexts[id].innerHTML = content.experience_section[id];
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

loadContent('english');

lang_flag_containers.forEach((container) => {
    container.addEventListener('click', () => {
        const newLang = lang_flag_imgs[0].src.includes(imgSrc[0]) ? 'polish' : 'english';
        lang_flag_imgs.forEach((img) => {
            img.src = img.src.includes(imgSrc[0]) ? imgSrc[1] : imgSrc[0];
        });
        
        loadContent(newLang);
    })
})



