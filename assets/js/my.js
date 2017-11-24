// paralax index

$(window).scroll(function () {
    var wscroll = $(this).scrollTop();
    // jumbotron
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+wscroll/1.5+'%)'
    });
    
    $('.jumbotron h2').css({
        'transform' : 'translate(0px, '+wscroll/1+'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+wscroll/4+'%)'
    });
});

// paralax about,poto

$(window).on('load', function () {
    $('.pkiri').addClass('pnimbul');
    $('.pkanan').addClass('pnimbul');  
    $('.gambar').addClass('muncul');  
});

// map
function initMap() {
    var location = {lat: -6.898032, lng: 107.654965};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 16,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
};


// stop video

$('.mybutton').click(function(){
    $('.yvideo').each(function(){
      var el_src = $(this).attr("src");
      $(this).attr("src",el_src);
    });
  });
