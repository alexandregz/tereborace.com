$(document).ready(function() {
    
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 90
        }, 500);
        return false;
    });

    $('.light-gallery').lightGallery({
        speed: 200,
        thumbnail: true,
        thumbWidth: 150,
        lang: {
            allPhotos: 'Fotos del album'
        }
    });
    
});