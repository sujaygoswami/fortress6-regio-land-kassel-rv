jQuery(document).ready(function(){









function isAppleDevice(){
return (
(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
);
}
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
var appStoreURL = "";
if(isAndroid > -1){
jQuery('body').addClass('android-device');
jQuery('html').addClass('android-device');
}
else if( isAppleDevice() ){
jQuery('body').addClass('ios-device');
jQuery('html').addClass('ios-device');

  // jQuery( window ).on( "orientationchange", function( event ) {
  //   location.reload();
  // });


}





//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();











// object notation
var site = {}



site.FIRSTLOOK = function() {

    


    


};






jQuery(window).resize(function(){


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});






// page banner slider
jQuery('.page-banner-module .banner-slider:not(.no-slider)').slick({
  dots: true,
  arrows: false
});

// custom-serial-listing-module
jQuery('.custom-serial-listing-module li').each(function(){
  var INDEX = jQuery(this).index();
  jQuery(this).attr('data-index', INDEX + 1);
  jQuery(this).prepend('<span></span>');
  var DATAINDEX = jQuery(this).attr('data-index');
  jQuery(this).find('span').html(DATAINDEX);
});


// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});

// product detail slider
jQuery('.product-detail-slider').each(function(){
var $status = jQuery(this).find('.pagingInfo');
var $slickElement = jQuery(this).find('.slideshow');
var prevbtn = jQuery(this).find('.slick-prev');
var nextbtn = jQuery(this).find('.slick-next');



$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  autoplay: true,
  dots: false,
  arrows: true,
  slidesToShow: 1,
  infinite: false
});

var slicklist = jQuery(this).find('.slick-list');

jQuery(this).find('.slick-arrow').wrapAll('<div class="custom-pagi"></div>');
var custompagi = jQuery(this).find('.custom-pagi');
jQuery(this).find('.pagingInfo').detach().appendTo(custompagi);
jQuery(this).find('.slick-next').detach().insertAfter($status);

jQuery(custompagi).detach().insertAfter(slicklist);

jQuery(this).find('.download-expose').detach().appendTo(custompagi);

    
});









jQuery('.touch .has-submenu > a').addClass('dual-click');
   
   jQuery(document).on( "click", ".dual-click", function(event) {
        
        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
 jQuery('.go-top').click(function(){
   jQuery('html, body').animate({scrollTop: 0}, 400);
  
});



});








// load
jQuery(window).load(function(){

// iconic content isotop
jQuery('.iconic-content-masonry-isotpe-module .the-isotope').isotope({
  itemSelector: '.isotope-item'
});

// bild content isotop
jQuery('.image-content-masonry-isotpe-module .the-isotope').isotope({
  itemSelector: '.isotope-item'
});


// match height
  jQuery('.equal-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.element-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });







var siteLoad = {}




siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

};   




jQuery(window).resize(function(){


});


});

