// your script file for adding your own jquery
//  $(function( myFunction) {
// Your Code from here on down. Don't delete that line above! (haivng the line above made it not work)
  
$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });




});


class Slider {
  constructor(settings) {
    this.setting = settings;
    let delay, autoplay, arrows, dots, timer;
    delay = 3000;
    autoplay = false;
    arrows = true;
    dots = false;
    this.clicked = false;
    this.delayClicked = 1100;
    this.current = 1;
    if (!settings) {
      this.setting = { delay, autoplay, arrows, dots };
    }
    this.wrapper = document.querySelector(".wrapper");
    this.items = document.querySelectorAll(".slide-image");
    this.nextBtn = document.querySelector(".next-btn");
    this.prevBtn = document.querySelector(".prev-btn");
    if (this.setting.arrows) {
      this.nextBtn.addEventListener(
        "click",
        function() {
          clearInterval(timer);
          if (!this.clicked) {
            this.clicked = true;
            this.next();
            setTimeout(() => {
              this.clicked = false;
            }, this.delayClicked);
          }
          if(this.setting.autoplay){
                      timer = setInterval(() => {
            this.next();
          }, this.setting.delay);
          }

        }.bind(this)
      );
      this.prevBtn.addEventListener(
        "click",
        function() {
          clearInterval(timer);
          if (!this.clicked) {
            this.clicked = true;
            this.prev();
            setTimeout(() => {
              this.clicked = false;
            }, this.delayClicked);
          }
          if(this.setting.autoplay){
               timer = setInterval(() => {
            this.prev();
          }, this.setting.delay);
          }
       
        }.bind(this)
      );
    } else {
      this.nextBtn.style.display = "none";
      this.prevBtn.style.display = "none";
    }
    if (this.setting.dots) {
      let i, len, ul, li, div;
      ul = document.createElement("ul");
      ul.classList.add("dots-parent");
      dots = [];
      len = this.items.length;
      let self = this;
      for (i = 1; i <= len; i++) {
        li = document.createElement("li");
        li.classList.add("dot");
        li.setAttribute("data-item", i);
        li.addEventListener("click", function() {
          clearInterval(timer);
          timer = setInterval(
            function() {
              self.next();
            }.bind(this),
            self.setting.delay
          );
        });
        li.addEventListener("click", this.showSlide.bind(this, i));
        ul.appendChild(li);
        dots.push(li);
      }
      div = document.createElement("div");
      div.classList.add("container-dots");
      div.appendChild(ul);
      this.wrapper.appendChild(div);
      document.querySelector(".dot").classList.add("active");
    }
    if (this.setting.autoplay) {
      this.setting.delay = 3000;
      timer = setInterval(() => {
        this.next();
      }, this.setting.delay);
    }
  }
  next() {
    if (this.current !== this.items.length) {
      this.current += 1;
      this.showSlide(this.current);
    } else {
      this.current = 1;
      this.showSlide(this.current);
    }
  }
  prev() {
    if (this.current > 1) {
      this.current -= 1;
      this.showSlide(this.current);
    } else {
      this.current = this.items.length;
      this.showSlide(this.current);
    }
  }
  showSlide(slideNumber) {
    this.items.forEach(function(item) {
      item.classList.remove("active");
    });
        document
      .querySelector('div[data-item="' + slideNumber + '"]')
      .classList.add("active");
    if (this.setting.dots) {
      document.querySelectorAll(".dot").forEach(function(dot) {
        dot.classList.remove("active");
      });
      document
        .querySelector('.dot[data-item="' + slideNumber + '"]')
        .classList.add("active");
    }

  }
}
document.addEventListener("DOMContentLoaded", function() {
  new Slider({
    arrows: true,
    dots: true,
    autoplay: false,
    delay: 2500
  });
});








/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}










// End of Your Code . Don't delete that line below!! (haivng the line bellow made it not work)
//   });