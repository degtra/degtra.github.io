// paralax index

$(window).scroll(function () {
    var wscroll = $(this).scrollTop();
    // jumbotron
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+wscroll/1.5+'%)'
    });
    
    $('.jumbotron h2').css({
        'transform' : 'translate(0px, '+wscroll/1.5+'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+wscroll/4+'%)'
    });
    
    // konten
});

// paralax about

$(window).on('load', function () {
    $('.pkiri').addClass('pnimbul');
    $('.pkanan').addClass('pnimbul');  
    $('.gambar').addClass('muncul');  
});


// stop video

$('.mybutton').click(function(){
    $('.yvideo').each(function(){
      var el_src = $(this).attr("src");
      $(this).attr("src",el_src);
    });
  });
