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
  return len;
}

$('fullname').keyup(function(){
      value = $("fullname").val(); 
      $("usn").val(value);
   });
var hft, hin, weight, bmi;

function calculate_bmi(hft, weight) {
  bmi = hft * hft;
  bmi = weight / bmi;
  if ($('#imp').is(':checked')) {
    bmi = bmi * 703;
  }
  bmi = bmi.toFixed(1);
  return bmi;
}


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


  $("#calBmi").click(function () {
    hft = parseInt($("#ht").val()) || 0;
    hin = parseInt($("#in").val()) || 0;
    weight = parseInt($("#wt").val()) || 0;
    if ($('#imp').is(':checked')) {
      hft = hft * 12;
      hft = hft + hin;
    } else {
      hft = hft / 100;
    }
    bmi = calculate_bmi(hft, weight);

    // $("#username").html(fullname);
    $("#bmidisplay").html(bmi);

    if (bmi>=18.5 && bmi<=25) {
      $("#bmiCat").html("Normal");
    }
    else if (bmi<18.5) {
      $("#bmiCat").html("Underweight");
    }
    else{
      $("#bmiCat").html("Overweight");
    }
    
    
  });
});