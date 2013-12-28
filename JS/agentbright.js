
$(document).on('click','.menu-btn', function() {
      if($(".wrap").hasClass("menu-active")) {
         // if it's open then just close it
         $(".wrap").removeClass("menu-active");
         $(".second-nav").removeClass("menu-active");
      } else {
         // if it's closed, then close everything else and open it
         $(".wrap").removeClass("menu-active");
         $(".navtoggle").removeClass("narrow");
         $(".second-nav").removeClass("menu-active");
         $(".second-nav").addClass("menu-active");
         $(".wrap").addClass("menu-active");
      }
   });

$(document).ready(function() {
   $(".nav-settings").click(function() {
      if($(".wrap").hasClass("submenu-active")) {
         // if it's open then just close it
         $(".wrap").removeClass("submenu-active");
         $(".nav-settings").removeClass("selected");
      } else {
         // if it's closed, then close everything else and open it
         $(".wrap").addClass("submenu-active");
         $(".nav-settings").removeClass("selected");
         $(".nav-settings").addClass("selected");
      }
   });
   $(".nav-arrow-button").click(function() {
      if($(".navtoggle").hasClass("narrow")) {
         // if it's open then just close it
         $(".navtoggle").removeClass("narrow");
      } else {
         // if it's closed, then close everything else and open it
         $(".navtoggle").removeClass("narrow");
         $(".navtoggle").addClass("narrow");
      }
   });
   $(".account-btn").click(function() {
      if($(".wrap").hasClass("submenu-active")) {
         // if it's open then just close it
         $(".wrap").removeClass("submenu-active");
         $(".nav-settings").removeClass("selected");
      } else {
         // if it's closed, then close everything else and open it
         $(".wrap").removeClass("submenu-active");
         $(".navtoggle").removeClass("narrow");
         $(".nav-settings").removeClass("selected");
         $(".wrap").addClass("submenu-active");
         $(".nav-settings").addClass("selected");
      }
   });
});

$(document).on('page:fetch', function() {
  $(".loading-indicator").show();
});
$(document).on('page:change', function() {
  $(".loading-indicator").hide();
});

document.addEventListener("touchstart", function(){}, true)