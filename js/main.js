$(document).ready(function() {
  // make a function to insert a text from the input inside of the message-area
  function sendSms() {
    var sms = $(".footer-message-area input").val();

    if (sms != "") {
      $(".footer-message-area input").val("");
      // make a copy of the input
      var newRow = $(".message_row").clone();
      // inserisci il testo text nel cloudText
      newRow.find("p").text(sms);
      // inserisci la classe sent
      newRow.addClass(".green-box");
      // append the object inside of the main message area ul
      $("ul .main-message-screen").append(newRow);
    }
  };
  // make a function to send the text with a press of a button on the keyboard
  $(".footer-message-area input").keydown(function(event) {
    if (event.which == 13) {
      sendSms();
    }
  });
});
