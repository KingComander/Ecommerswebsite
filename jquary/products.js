$(document).ready(function(){
  // Tab to edit
  var $btns= $('.buttons');
  var $products = $('.products');
  
  $btns.each(function(){
    // Tab to edit
    $btns.on('click','button', function(){
      var filterval = $(this).attr('data-filter');
      $products.isotope({filter: filterval});
    })
    
  })
  
})