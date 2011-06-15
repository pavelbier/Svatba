$(document).ready ->
  tc = $('#text-container')
  homeText = tc.html();
  targetDate = new Date 2011, 8-1, 6,11,30,0

  reinit = -> 
    $('.fancybox').fancybox();    
    $('.fancyboxHtml').fancybox { type:'iframe', width:'80%', height:'80%' }
    $('#countdown').countdown {until: targetDate}
  


  $('menu').bind 'click', (e) ->
    target = e.target
    if (target.nodeName == 'A')
      domid = $(target).attr "href"
      $('html,body').animate {scrollTop: 0},'normal',->
        tc.fadeOut 'slow',->
          tc.html if domid=='#home' then homeText else $(domid).html()
          tc.fadeIn 'slow'
          reinit();

  if window.location.hash && window.location.hash != '#home'
      tc.html $(window.location.hash).html()

  reinit();

