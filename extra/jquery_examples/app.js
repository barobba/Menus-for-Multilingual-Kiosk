
// MAIN()
// THIS STARTS AFETER EVERYTHING ON THE PAGE IS LOADED
$(document).ready( function () {
  // PROGRAM GOES HERE

  $('.ex-replace').html('AFTER');
  $('.ex-drag').draggable();
  $('.ex-click').click(function(){
    var button = $('.ex-click');
    if (button.hasClass('type1')) {
      button.removeClass('type1');
      button.addClass('type2');
    }
    else {
      button.removeClass('type2');
      button.addClass('type1');
    }
  });
  
  // FUNCTIONS CAN GO HERE
  function my_funcation_available_after_page_is_loaded () {
    // Return data that only exists after page is loaded.
    // ...
  }
     
});




// ADDITIONAL FUNCTIONS GO HERE

function my_func() {
  return 'yo';
}
