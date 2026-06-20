const menu = document.querySelector("#mobile");
const container = document.querySelector(".container");

menu.addEventListener('click', function() {    
  menu.classList.toggle('active');
  container.classList.toggle('active');
});

const digital = document.querySelector("#digital");
const sketch = document.querySelector("#sketch");
const other = document.querySelector("#other");

const digitalContent = document.querySelector(".artwork .digital");
const sketchContent = document.querySelector(".artwork .sketch");
const otherContent = document.querySelector(".artwork .other");

digital.addEventListener('click', function() {
  sketch.classList.remove('active');
  other.classList.remove('active');

  sketchContent.classList.remove('active');
  otherContent.classList.remove('active');

  if (digital.classList.contains('active')) {
    digital.classList.remove('active');
    digitalContent.classList.remove('active');
  } else {
    digital.classList.add('active');
    digitalContent.classList.add('active');
  }
});

sketch.addEventListener('click', function() {
  digital.classList.remove('active');
  other.classList.remove('active');

  digitalContent.classList.remove('active');
  otherContent.classList.remove('active');

  if (sketch.classList.contains('active')) {
    sketch.classList.remove('active');
    sketchContent.classList.remove('active');
  } else {
    sketch.classList.add('active');
    sketchContent.classList.add('active');
  }
});

other.addEventListener('click', function() {
  digital.classList.remove('active');
  sketch.classList.remove('active');

  digitalContent.classList.remove('active');
  sketchContent.classList.remove('active');

  if (other.classList.contains('active')) {
    other.classList.remove('active');
    otherContent.classList.remove('active');
  } else {
    other.classList.add('active');
    otherContent.classList.add('active');
  }
});

const github = document.querySelector(".github");
const linkedin = document.querySelector(".linkedin");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");

github.addEventListener('click', function() {
  window.open("https://github.com/Onin21Ron");
});

linkedin.addEventListener('click', function() {
  window.open("https://www.linkedin.com/in/raprap-rondolo-402ba940a?utm_source=share_via&utm_content=profile&utm_medium=member_android");
});

twitter.addEventListener('click', function() {
  window.open("https://x.com/Ron25236969444");
});

instagram.addEventListener('click', function() {
  window.open("https://www.instagram.com/0nin21?igsh=MWs2YmU0M2xiZzUzYw==");
});
