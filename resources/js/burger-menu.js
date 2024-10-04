document.getElementById('burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('burger-menu').classList.toggle('active');

});

window.addEventListener('scroll', function() {
    const burger = document.getElementById('burger');
    const burgerMenu = document.getElementById('burger-menu');

    if (window.scrollY > 0) {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    }
});