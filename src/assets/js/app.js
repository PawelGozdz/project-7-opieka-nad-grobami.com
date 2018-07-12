import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// Sweet alert
import swal from 'sweetalert2';

$(document).ready(function(){
  $('#contact-form').on('submit',function(e) {  //Don't foget to change the id form
  $.ajax({
      url:'assets/php/send.php', //===PHP file name====
      data:$(this).serialize(),
      type:'POST',
      success:function(data){
        console.log(data);
        //Success Message == 'Title', 'Message body', Last one leave as it is
      swal("Udało się!", "Wiadomość została wysłana!", "success");
      },
      error:function(data){
        //Error Message == 'Title', 'Message body', Last one leave as it is
	    swal("Nie udało się!", "Coś poszło nie tak :(", "error");
      }
    });
    // Clear input fields after submit
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
  });
});


