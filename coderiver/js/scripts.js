let sectionsForScroll = document.querySelectorAll("section");
let arr = [...sectionsForScroll];
arr.shift();
let headerLinks = document.querySelectorAll(".nav__links li a");
let scrollStick = document.querySelectorAll(".scrollStick");
let arrowDown = document.querySelector(".leftSide__arrowDown");
let video = document.querySelectorAll("video");
let playButton = document.querySelectorAll(".buttonForplay");
let preloadImage = document.querySelectorAll(".preloadImage");
let colorButtons = document.querySelectorAll(".color__panel  button");
let giroscooter = document.querySelector(".color__giro");
let responsiveMenu = document.querySelector(".burger button");
let navPanel = document.querySelector("nav");
console.log(navPanel);
/* add class active during scrolling */
document.addEventListener("scroll", () => {
  for (let i = 0; i < headerLinks.length; i++) {
    let bigger =
      arr[i + 1] != undefined
        ? arr[i + 1].offsetTop
        : document.body.clientHeight;
    scroll.innerHTML = window.pageYOffset;

    if (
      window.pageYOffset >= arr[i].offsetTop - 200 &&
      window.pageYOffset <= bigger - 200
    ) {
      headerLinks[i].classList.add("nav__link_active");
    } else {
      headerLinks[i].classList.remove("nav__link_active");
    }
  }

  for (let i = 0; i < scrollStick.length; i++) {
    for (let j = 0; j < scrollStick[i].children.length; j++) {
      let bigger =
        sectionsForScroll[j + 1] != undefined
          ? sectionsForScroll[j + 1].offsetTop
          : document.body.clientHeight;
      if (
        window.pageYOffset >= sectionsForScroll[j].offsetTop - 200 &&
        window.pageYOffset <= bigger - 200
      ) {
        scrollStick[i].children[j].classList.add("scrollStick__dot_active");
      } else {
        scrollStick[i].children[j].classList.remove("scrollStick__dot_active");
      }
    }
  }
});

/* scroling to items */
let scrollToBlock = block => {
  let timer = setInterval(function() {
    if (window.pageYOffset <= block.offsetTop - 50) {
      window.scrollBy(
        0,
        (function() {
          if (window.pageYOffset + 50 > block.offsetTop - 50) {
            return clearInterval(timer);
          }

          return 50;
        })()
      );
    } else if (window.pageYOffset > block.offsetTop - 50) {
      window.scrollBy(0, -50);
    } else {
      clearInterval(timer);
    }
  }, 20);
};

headerLinks.forEach((link, i) => {
  link.addEventListener("click", e => {
    e.preventDefault();
    scrollToBlock(arr[i]);
  });
});
arrowDown.addEventListener("click", () => {
  scrollToBlock(sectionsForScroll[1]);
});
scrollStick.forEach(stick => {
  [...stick.children].forEach((dot, i) => {
    dot.addEventListener("click", () => {
      scrollToBlock(sectionsForScroll[i]);
    });
  });
});

/* custom play video */
playButton.forEach((button, i) => {
  let playing = false;
  button.addEventListener("click", () => {
    playing === true ? video[i].pause() : video[i].play();
    button.classList.contains("leftSide__playButon") && !playing
      ? button.classList.add("leftSide__playButon_left")
      : button.classList.remove("leftSide__playButon_left");
    preloadImage[i].style = `display: ${playing ? "block" : "none"}`;
    playing = !playing;
  });
});

/* different colors for giroscooter */
colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    giroscooter.src = button.dataset.src;
  });
});

/* burger menu */
responsiveMenu.addEventListener("click", function() {
  this.classList.toggle("active");
  navPanel.style.display = this.classList.contains("active") ? "block" : "none";
});
