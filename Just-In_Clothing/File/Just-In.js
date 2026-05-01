const observer = new IntersectionObserver (
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

const transition_left = document.querySelectorAll(".reveal_left");
const transition_right = document.querySelectorAll(".reveal_right");
const transition_top = document.querySelectorAll(".reveal_top");
const transition_bottom = document.querySelectorAll(".reveal_bottom");
const transition_scale_in = document.querySelectorAll(".reveal_scale_in");
const transition_scale_out = document.querySelectorAll(".reveal_scale_out");

transition_left.forEach(el => observer.observe(el));
transition_right.forEach(el => observer.observe(el));
transition_top.forEach(el => observer.observe(el));
transition_bottom.forEach(el => observer.observe(el));
transition_scale_in.forEach(el => observer.observe(el));
transition_scale_out.forEach(el => observer.observe(el));

const ACTIVECLASS = "active1";
const IMAGES = document.querySelectorAll(".template_deck");
const ACCESSORIES = document.querySelectorAll(".box");
// IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass() {
  const elm = document.querySelector(`.${ACTIVECLASS}`);
  if (elm) {
    elm.classList.remove(ACTIVECLASS);
    console.log("something", elm)
  } 
}

function addClass($event) {
  $event.stopPropagation();
  
  const target = $event.currentTarget;
  if (target.classList.contains(ACTIVECLASS)) {
    target.classList.remove(ACTIVECLASS);
    return
  }
  
  removeActiveClass();
  // const target = $event.currentTarget;
  target.classList.add(ACTIVECLASS);
}

IMAGES.forEach(image => {
  image.addEventListener("click", addClass);
});
ACCESSORIES.forEach(flip => {
  flip.addEventListener("click", addClass)
});

const youtube = document.querySelector(".youtube");;
youtube.addEventListener("click", () => {
  window.open("https://youtube.com/@onin_21?si=hSEN00_X_qInS3Gw")
})

const instagram = document.querySelector(".instagram");;
instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/quagmire_sketch?igsh=MWZteWttZmVkYXZnbw==")
})

const twitter = document.querySelector(".twitter");;
twitter.addEventListener("click", () => {
  window.open("https://x.com/Just_onin21")
})

const gmail = document.querySelector(".gmail");;
gmail.addEventListener("click", () => {
  window.location.href = "mailto:rapraprondolo21@gmail.com?subject=Hello";
})





















