const hamburger = document.querySelector(".top_mobile");
const responsive = document.querySelector(".mobil_langs");
const closeButton = document.querySelector(".close");
const element = document.querySelector(".search_body_main");
const mobilMenu = document.querySelector(".mobil_bottom_box");
const mobilTitle = document.querySelectorAll(".mobil_box_title")
const icon = document.querySelectorAll(".arrow");
const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const closer = document.getElementsByClassName("close")[0];
const hambBar = document.querySelector(".bar");
const accTit = document.querySelectorAll('.acc_title');
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay:{
            delay:2000,
            disableOnInteraction: false
        },
        effect: 'slide', 
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
 
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const searchIcon = document.querySelector(".search_icon");
    const searchOverlay = document.querySelector(".search-overlay");
    const closeSearch = document.querySelector(".closes");
    searchIcon.addEventListener("click", function () {
        searchOverlay.classList.add("active");
      });
      closeSearch.addEventListener("click", function () {
        searchOverlay.classList.remove("active");
      });
});
document.querySelector(".dostIcon").addEventListener("click", function() {
    document.querySelector(".app_box").innerHTML = "";
});


document.querySelectorAll('.hamburgertit').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const menuR = button.querySelector("#menu-rotate"); 
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      if (content.style.maxHeight) {
        content.style.maxHeight = null; 
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      };
      button.classList.toggle('active');
      menuR.classList.toggle("rotate");
    });
  });

document.querySelectorAll('.acc_title').forEach(tikla => {
    tikla.addEventListener('click', ()=>{
        const cont = tikla.nextElementSibling;
        cont.style.display = cont.style.display === 'block' ? 'none' : 'block';
        cont.classList.toggle('active');

        const col = document.querySelectorAll('.reng');
        col.style.Color = col.style.Color === 'blue' ? 'black' : 'blue'
    })
});

hambBar.onclick = function(){
    hambMenu = document.querySelector(".hamburgerMenu");
    hambMenu.classList.toggle("active");
}
btn.onclick = function(){
    modal.style.display = "block";
};
closer.onclick = function(){
    modal.style.display = "none";
};
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    };
};
hamburger.onclick = function () {
    select = document.querySelector(".mobil_select");
    select.classList.toggle("active");
};
responsive.onclick = function (e) {
    language = document.querySelector(".lang_list");
    language.classList.toggle("active");
};

mobilMenu.onclick = function () {
    section = document.querySelector(".mobil_ul");
    section.classList.toggle("active");
};


mobilTitle.addEventListener('click', function () {
    if (open) {
        icon.className = '.arrow';
        icon.style.transform = "rotate(0deg)";
    } else {
        icon.className = '.arrow open';
        icon.style.transform = "rotate(180deg)"
    };
    open = !open;
});

