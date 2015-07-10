$(document).ready(function(){
  window.dancers = [];

  $(".shroomOut").on('click', function(){
    $('body').addClass('shroomOut');
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    console.log(dancerMakerFunctionName);
    var dancerMakerFunction = window[dancerMakerFunctionName];
    for(var x = 0; x < 15; x++){
      var height = ($("body").height() - 200) * Math.random();
      var width = $("body").width() * Math.random();
      var time = Math.random() * 1000;
      var dancer = new dancerMakerFunction(height, width, time);
      window.dancers.push(dancer);
      $('body').append(dancer.$node);
    }

  })

  $('.lineUp').on('click', function(){
    $('.dancer').css({
        'position': 'absolute',
        'bottom': '10%'
    })
  })

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var height = ($("body").height() - 200) * Math.random();
    var width = $("body").width() * Math.random();
    var time = Math.random() * 1000;
    console.log("height: ", height, "width: ", width, "time: ", time);
    var dancer = new dancerMakerFunction(height, width, time);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

