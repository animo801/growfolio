var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxok7gLaE_ftmXTbnQsAzLCLLsgRJxXOX2RXAczfx8GrO-a3Qn9/exec'


$('#submit-form').click(function(e) {
    console.log("I am heres")
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
      success: function() {
          $form.toggleClass('disapear');
      }
  })
})





// This is an Animation
$("#submit-form").click(function() {
  $('.transform').toggleClass('custom-button-active');
    return false;
});


//Bodymovin Animation 

