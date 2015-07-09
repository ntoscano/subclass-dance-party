$(document).ready(function(){
  $('body').on('click', '.dancer', function(){
    console.log("ran")
    $(this).addClass("big");
  });

});
