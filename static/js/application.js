$(document).ready(function(){
  var tc = $('#text-container');
  var homeText = tc.html();

  $('menu').bind('click',function(e){
    var target = e.target;
    if (target.nodeName == 'A') {
      var domid = $(target).attr("href");
      $('html,body').animate({scrollTop: 0},'normal',function() { 
        tc.fadeOut('slow',function(){
          tc.html((domid=='#home') ? homeText : $(domid).html());
          tc.fadeIn('slow');
        });
      });
      
    }
  });

  if (window.location.hash && window.location.hash != '#home') {
      tc.html($(window.location.hash).html());
  };

});
