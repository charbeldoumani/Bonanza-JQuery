$( "#fadeout" ).click(function() {
   $( "#fade_p" ).fadeOut( "slow", function() {
    });
});

$( "#append" ).click(function() {
  $( "#append_p" ).append( "Thank you Wesam for your support.");
});

$( "#color" ).click(function() {
  $( "#color_p" ).css( "color", "red");
});

