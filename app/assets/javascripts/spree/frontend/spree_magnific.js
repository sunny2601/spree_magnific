//= require spree/frontend
//= require spree/frontend/jquery.magnific-popup
//= require spree/frontend/product_or

$(document).ready(function() {
  $('.zoom-img').magnificPopup({
    type:'image',
    zoom: {
      enabled: true
    }
  });
});
