$(document).ready(function() {
  // myFunctions

  // make a function to insert a text from the input inside of the message-area
  function sendSms() {
    // invoke the getTime function
    // make a variable for the input value
    var sms = $(".footer-message-area input").val();
    if (sms != "") {
      $(".footer-message-area input").val("");
      // make a copy of the input
      var template = $(".template .message-row").clone();
      // insert the text inside of the p and the span
      template.find("p").text(sms);
      template.find("span").text(getTime()).addClass("text-time");
      // insert the class
      template.addClass("send");
      // append the object inside of the main message screen
      $(".main-message-screen").append(template);
    }
  }
  //make a function to get the actual time from the client computer
  function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + " : " + minutes;
    if (minutes <10) {
      var time = hours + " : " + " 0" + minutes;
    } else {
      var time = hours + " : " + minutes;
    } return time;
  }
  function getReply(text) {
    // make a variable to clone the template
    var template = $(".template .message-row").clone();
    // chose the tagname to insert the text
    template.find("p").text(text);
    template.find("span").text(getTime()).addClass("text-time");
    // attach the class tot he template
    template.addClass("automatic");
    // append the text inside the new template
    $(".main-message-screen").append(template);
  }
  // make a function to send the text with a press of a button on the keyboard
  $(".footer-message-area input").keydown(function(event) {
    if (event.which == 13) {
      sendSms();
      // make an asincron function and invoke it to get an automatic reply
      setTimeout(function(){
        getReply("ok!")
      }, 1000);
    }

    $(".search-bar input").keyup(
      function () {
        // make a variable to search for the client input
        var searchInput = $(this).val().toLowercase();
        // make some conditions
        if (searchInput != "") {
          var contactsName = $(".contact-list .info-contact-name");
          contactsName.each(
            // make a function which will show or hide
            function () {
              var name =  $(this).text();
              if (name.includes(searchInput)) {
               $(this).parents(".contact-list").show();
             } else {
               $(this).parents(".contact-list").hide();
             }
            }
          )
        }
      }
    )
  });
});
