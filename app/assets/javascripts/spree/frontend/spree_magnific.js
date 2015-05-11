//= require store/spree_frontend
//= require store/jquery.magnific-popup
//= require store/product_or

$(document).ready(function() {
  $('.zoom-img').magnificPopup({
    type:'image',
    zoom: {
      enabled: true
    }
  });
});
