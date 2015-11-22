$(document).ready(function() {
  console.log("The document is ready!");

  $(document).click(function (e) {
    $el = $(e.target);
    if ($el.hasClass('avatar-none')) {return false;} 
    else if ($el.hasClass('avatar')) {
        $(".avatar-none").toggleClass('avatar');

    } else {
        $(".avatar-none").removeClass('avatar');
    }
  });

});