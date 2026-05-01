const nav = document.querySelector('.nav');
const items = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll(".section");
const header = document.querySelector(".header");

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    nav.className = 'nav ' + item.classList[1] + '-active';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      
      items.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
          
          nav.className = 'nav ' + link.classList[1] + '-active';
        }
      });
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => {
  observer.observe(section)
});


// const observer1 = new IntersectionObserver((entry) => {
//   if (entry.isIntersecting) {
//     header.classList.add("act");
//   } else {
//     header.classList.remove("act");
//   }
// }, {
//   threshold: 0.6
// });

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("act");
    } else {
      header.classList.remove("act");
    }
  });
}, {
  threshold: 0.0
});

// const observer1 = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     header.classList.toggle("act", entry.isIntersecting);
//   });
// }, {
//   threshold: 0.6
// });

observer1.observe(document.querySelector(".title"));
// header.observer1.observe(header);
// content://com.android.externalstorage.documents/tree/primary%3ADocuments%2FAcode::primary:Documents/Acode/Sandbox/Sandbox4.js