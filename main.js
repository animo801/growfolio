var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxok7gLaE_ftmXTbnQsAzLCLLsgRJxXOX2RXAczfx8GrO-a3Qn9/exec'


        
                        
$('#submit-form').click(function(){
    console.log("I love Molly");
    document.getElementById('submit-form').innerHTML = "Sending...";
        
});



function myFunction() {
    document.getElementById('submit-form').innerHTML = 'Success!'; 
}


$('#submit-form').click(function(e) {
    console.log("I am heres")
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
      success: myFunction
  })
})

$("#submit-form").click(function() {
  $('.transform').toggleClass('custom-button-active');
    return false;
});

//Bodymovin animation
var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'), 
    render: 'svg', 
    loop: true, 
    autoplay: true, 
    path: 'Animation/data.json'
})

v