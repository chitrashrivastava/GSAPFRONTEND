var tl = gsap.timeline()
tl
.from("#page1 svg",{
    y:-150,
    opacity:"0",
    delay:0.8,
    duration:0.8
})
.from("#page1 img",{
    scale:0.5,
    duration:2,
    ease: Power4.easeOut,
    delay:-0.5,
    borderRadius:"15px"
})

var head  = document.querySelectorAll("#page2 h2")

head.forEach(function(elem){
    var data = elem.textContent;
    var spliteddata  = data.split("");
    var clutter  = "";
   spliteddata.forEach(function(e){
     clutter  += `<span>${e}</span>`;
   });
   elem.innerHTML = clutter;
});


gsap.to("#page2 h2 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        scrub:true,
        // markers:true,    
        start:"top 0%",
        end:"top -41%"
    }
})

gsap.to("#page2 #svg2",{
    left:"-100%",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 #svg2",
        // markers:true,
        scrub:2,

    }
})
gsap.to("#page2 #svg3",{
    left:"-100%",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 #svg2",
        // markers:true,
        scrub:2,

    }
})

var data = document.querySelectorAll("#page3 h2")

data.forEach(function(elem){
  var datatext = elem.textContent;
  var splitedcontent  = datatext.split("");
  var clutter = "";
  splitedcontent.forEach(function(e){
    clutter += `<span>${e}</span>`
  })
  elem.innerHTML = clutter;

})

gsap.to("#page3 h2 span",{
    color:"#434B34",
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 ",
        scrub:2,
        // markers:true,
        start:"top 40%",
        end:"top 10%"
    }
})




var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });