const header = document.getElementById("header-container");

header.addEventListener("mouseover", () => {
    header.style.opacity = "1";
});

header.addEventListener("mouseout", () => {
    const scrollValue = document.documentElement.scrollTop;
    const opacityValue = 1 - (scrollValue * 0.001);
    header.style.opacity = opacityValue.toString();
});

window.onscroll = () => {
    if (document.documentElement.scrollTop <= 50) {
        header.style.opacity = "1";
    } else {
        const scrollValue = document.documentElement.scrollTop;
        const opacityValue = 1 - (scrollValue * 0.001);
        header.style.opacity = opacityValue.toString();
    }
};

window.onload = function() {
    Particles.init({
      selector: '.background'
    });
  };

