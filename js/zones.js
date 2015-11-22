$(document).ready(function() {
  console.log("The document is ready!");

  $(document).click(function (e) {
    $el = $(e.target);
    if ($el.hasClass('toggletag')) {return false;} 
    else if ($el.hasClass('clickme')) {
        $(".toggletag").toggleClass('open');

    } else {
        $(".toggletag").removeClass('open');
    }
  });

});