var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}


function changeItem(){
    document.getElementById("bg_box").style.background = "rgba(48, 54, 62, 0.6) ";
    document.getElementById("bg_box").style.height = "236px";
    document.getElementById("bg_box").style.transition = ".3s";
}
function changeItemSecond(){
    document.getElementById("bg_box_second").style.background = "rgba(48, 54, 62, 0.6) ";
    document.getElementById("bg_box_second").style.height = "236px";
    document.getElementById("bg_box_second").style.transition = ".3s";
}
function changeItemThirth(){
    document.getElementById("bg_box_thirth").style.background = "rgba(48, 54, 62, 0.6) ";
    document.getElementById("bg_box_thirth").style.height = "236px";
    document.getElementById("bg_box_thirth").style.transition = ".3s";
}
function changeItemForth(){
    document.getElementById("bg_box_forth").style.background = "rgba(48, 54, 62, 0.6) ";
    document.getElementById("bg_box_forth").style.height = "236px";
    document.getElementById("bg_box_forth").style.transition = ".3s";
}
function changeItemFifth(){
    document.getElementById("bg_box_fifth").style.background = "rgba(48, 54, 62, 0.6) ";
    document.getElementById("bg_box_fifth").style.height = "236px";
    document.getElementById("bg_box_fifth").style.transition = ".3s";
}
function changeItemSixth(){
    document.getElementById("bg_box_sixth").style.background = "rgba(48, 54, 62, 0.6) ";
    document.getElementById("bg_box_sixth").style.height = "236px";
    document.getElementById("bg_box_sixth").style.transition = ".3s"}



function rechangeItem(){
    document.getElementById("bg_box").style.height = "0px";
    document.getElementById("bg_box").style.background = "transparent";
    document.getElementById("bg_box").style.transition = ".3s";
}

function rechangeItemSecond(){
    document.getElementById("bg_box_second").style.height = "0px";
    document.getElementById("bg_box_second").style.background = "transparent";
    document.getElementById("bg_box_second").style.transition = ".3s";
}
function rechangeItemThirth(){
    document.getElementById("bg_box_thirth").style.height = "0px";
    document.getElementById("bg_box_thirth").style.background = "transparent";
    document.getElementById("bg_box_thirth").style.transition = ".3s";
}
function rechangeItemForth(){
    document.getElementById("bg_box_forth").style.height = "0px";
    document.getElementById("bg_box_forth").style.background = "transparent";
    document.getElementById("bg_box_forth").style.transition = ".3s";
}
function rechangeItemFifth(){
    document.getElementById("bg_box_fifth").style.height = "0px";
    document.getElementById("bg_box_fifth").style.background = "transparent";
    document.getElementById("bg_box_fifth").style.transition = ".3s"
}
function rechangeItemSixth(){
    document.getElementById("bg_box_sixth").style.height = "0px";
    document.getElementById("bg_box_sixth").style.background = "transparent";
    document.getElementById("bg_box_sixth").style.transition = ".3s"
}


function changeItembg(){
    document.getElementById("bg_container").style.background = "rgba(48, 54, 62, 0.6)";
    document.getElementById("bg_container").style.height = "220px";
    document.getElementById("bg_container").style.transition = ".3s";
}
function rechangeItembg(){
    document.getElementById("bg_container").style.background = "rgba(48, 54, 62, 0.6)";
    document.getElementById("bg_container").style.height = "0px";
    document.getElementById("bg_container").style.transition = ".3s";
   
}
function changeItembg_second(){
    document.getElementById("bg_container_second").style.background = "rgba(48, 54, 62, 0.6)";
    document.getElementById("bg_container_second").style.height = "220px";
    document.getElementById("bg_container_second").style.transition = ".3s";
}
function rechangeItembg_second(){
    document.getElementById("bg_container_second").style.background = "rgba(48, 54, 62, 0.6)";
    document.getElementById("bg_container_second").style.height = "0px";
    document.getElementById("bg_container_second").style.transition = ".3s";
}
function changeItembg_thirth(){
    document.getElementById("bg_container_thirth").style.background = "rgba(48, 54, 62, 0.6)";
    document.getElementById("bg_container_thirth").style.height = "220px";
    document.getElementById("bg_container_thirth").style.transition = ".3s";
}
function rechangeItembg_thirth(){
    document.getElementById("bg_container_thirth").style.background = "rgba(48, 54, 62, 0.6)";
    document.getElementById("bg_container_thirth").style.height = "0px";
    document.getElementById("bg_container_thirth").style.transition = ".3s";
   
}
function changeItembg_forth(){
    document.getElementById("bg_container_forth").style.background = "rgba(48, 54, 62, 0.6)";
    document.getElementById("bg_container_forth").style.height = "220px";
    document.getElementById("bg_container_forth").style.transition = ".3s";
}
function rechangeItembg_forth(){
    document.getElementById("bg_container_forth").style.background = "rgba(48, 54, 62, 0.6)";
    document.getElementById("bg_container_forth").style.height = "0px";
    document.getElementById("bg_container_forth").style.transition = ".3s";
   
}
$(document).ready(function(){
    $(".header_burger").click(function(event){
        $(".header_burger,.header_menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

$(document).ready(function(){
    $(".slider").slick({
     arrows:true,
      slidesToShow:3,
      slidesToScroll:3,
      variableWidth:false,
      responsive:[
          {
              breakpoint:1143,
              settings:{
                slidesToShow:2,
                slidesToScroll:2,
              }
              
          },
          {
             breakpoint:777,
              settings:{
                slidesToShow:1,
                slidesToScroll:1,
              }  
          }
         
      ]
     
    });
});


