const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".section");

menu.addEventListener('click', function() {    
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const artwork = document.querySelector("#artwork");
const artworkSection = document.querySelector(".artworkSection");

artwork.addEventListener('click', function() {    
    artworkSection.classList.toggle('active');
});


const outfit = document.querySelector("#outfit");
const outfitSection = document.querySelector(".outfitSection");

outfit.addEventListener('click', function() {    
    outfitSection.classList.toggle('active');
});


const affiliate = document.querySelector("#affiliate");
const affiliateSection = document.querySelector(".affiliateSection");

affiliate.addEventListener('click', function() {    
    affiliateSection.classList.toggle('active');
});


const heroContainer = document.querySelector(".hero");
const items = document.querySelectorAll(".hero .arrow");

items.forEach(item => {
  item.addEventListener('click', function() { 
    // 1. Toggle the active class on the clicked item
    this.classList.toggle('active');
    
    // 2. Check if ANY item is currently active
    const anyActive = heroContainer.querySelector('.item.active');
    
    // 3. If something is active, tell the parent container
    if (anyActive) {
      heroContainer.classList.add('active');
    } else {
      heroContainer.classList.remove('active');
    }
  });
});
