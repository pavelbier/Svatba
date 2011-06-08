$(document).ready(function(){
  var tc = $('#text-container');
  var homeText = tc.html();
  var targetDate = new Date(2011, 8-1, 6,11,30,0);

  var reinit = function() {
    $('.fancybox').fancybox();    
    $('.fancyboxHtml').fancybox({ type:'iframe', width:'80%', height:'80%' });    
    $('#countdown').countdown({until: targetDate});
  };


  $('menu').bind('click',function(e){
    var target = e.target;
    if (target.nodeName == 'A') {
      var domid = $(target).attr("href");
      $('html,body').animate({scrollTop: 0},'normal',function() { 
        tc.fadeOut('slow',function(){
          tc.html((domid=='#home') ? homeText : $(domid).html());
          tc.fadeIn('slow');
          reinit();  
        });
      });
      
    }
  });

  if (window.location.hash && window.location.hash != '#home') {
      tc.html($(window.location.hash).html());
  };


  reinit();

});
