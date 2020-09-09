$(document).ready(function() {
  // make a function to insert a text from the input inside of the message-area

  function sendSms() {
    // make some variables for the date and the hours
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
      var time = hours + " : " + " 0" + minutes;
    } else {
      var time = hours + " : " + minutes;
    }
    // make a variable for the input value
    var sms = $(".footer-message-area input").val();
    if (sms != "") {
      $(".footer-message-area input").val("");
      // make a copy of the input
      var template = $(".template .message-row").clone();
      // insert the text inside of the p
      template.find("p").text(sms);
      template.find("span").text(time);
      // insert the class
      template.addClass("send");
      // append the object inside of the main message screen
      $(".main-message-screen").append(template);
    }
  }

  function getReply(text) {
    // make a variable to clone the template
    var template = $(".template .message-row").clone();
    // chose the tagname to insert the text
    template.find("p").text(text);
    // attach the class tot he template
    template.addClass("automatic");
    // append the text inside the new template
    $(".main-message-screen").append(template);
  }
  // make an asincron function to get an automatic reply
  // make a function to send the text with a press of a button on the keyboard
  $(".footer-message-area input").keydown(function(event) {
    if (event.which == 13) {
      sendSms();
      setTimeout(function(){
        getReply("ok!")
      }, 1000);
    }
  });
});
