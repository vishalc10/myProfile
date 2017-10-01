$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });

  // document.getElementById('display').innerHTML = document.getElementById("user_input").value;
})

function showInput(){
  let val = $("#user_input").val();
  var len = val.length;
  $("#display").text(len);
}

$("#fname").keyup(function() {
  $("#username").text($(this).val());
});

$(document).ready(function () {
  $('#imp').click(function () {
      if ($(this).is(':checked')) {
        $("#inch").slideDown();
        $("#cmft").html("Feet");
        $("#kglbs").html("Pounds");
      }
  });

  $('#met').click(function () {
      if ($(this).is(':checked')) {
        $("#inch").hide();
        $("#cmft").html("Cm");
        $("#kglbs").html("Kgs");
      }
  });
});