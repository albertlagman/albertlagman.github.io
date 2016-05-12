$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('.mdl-layout__content').animate({
          scrollTop: target.get( 0 ).offsetTop-70
        }, 300);
        return false;
      }
    }
  });
});

window.onload = function ()
{
  if(window.location.hash){
    var getHash = window.location.hash;
    getHash = getHash.substr(2);
    window.location.hash=getHash; 
  }
}

$(document).ready(function() {
    $(".various").fancybox({
            padding     : 2,
            maxWidth    : 800,
            maxHeight   : 600,
            fitToView   : false,
            width       : '70%',
            height      : '70%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none'
        });
})