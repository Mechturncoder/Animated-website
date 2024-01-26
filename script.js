// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function page4Animation(){
    let containerEl = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-image");

containerEl.addEventListener('mouseenter', function(){
    fixedImage.style.display = "block";
    // alert("hello")
})
containerEl.addEventListener('mouseleave', function(){
    fixedImage.style.display = 'none'
})

let elems = document.querySelectorAll('.elem');

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        let image = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`
    })
})
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function loaderAnimation(){
    const loader = document.querySelector("#loader")

    setTimeout(function(){
        loader.style.top = "-100%"
    }, 3800)
}

swiperAnimation();
page4Animation()
loaderAnimation();
