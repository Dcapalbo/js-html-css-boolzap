$(document).ready(function() {
  // myFunctions
  $(".footer-message-area input").mouseenter(
  function() {
    // make some variables for an elastic coding
    // when the mouse enter inside the input box, show the plane and hide the microphone
    var plane = $(".fa-paper-plane")
    var microphone = $(".fa-microphone")
      plane.removeClass("d-none");
      microphone.addClass("d-none");
      sendSms();
    });
    $(".footer-message-area input").mouseleave(
    function() {
      // make some variables for an elastic coding
      // when the mouse enter inside the input box, show the plane and hide the microphone
      var plane = $(".fa-paper-plane")
      var microphone = $(".fa-microphone")
        plane.addClass("d-none");
        microphone.removeClass("d-none");
      });
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
  // make a function to insert a text from the input inside of the message-area
  function sendSms() {
    // make a variable for the value of the input
    var sms = $(".footer-message-area input").val();
    if (sms != "") {
      $(".footer-message-area input").val("");
      // make a copy of the input
      var template = $(".template .message-row").clone();
      // insert the text inside of the p and the span
      template.find("p").text(sms);
      // invoke the getTime function
      template.find("span").text(getTime()).addClass("text-time");
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
    template.find("span").text(getTime()).addClass("text-time");
    // attach the class tot he template
    template.addClass("automatic-response");
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
      }, 2000);
    }
  });
  $(".search-bar input").keyup(function(){
      // make a variable to save the input
      var words = $(".search-bar input").val();
      words = words.toLowerCase();
      // for every value inside the input, put a control with the inside contacts name
      $('.info-contact-name').each(function () {
        var contact = $(this).text().toLowerCase();
        var insideArray = contact.includes(words);
        if (insideArray == false) {
          $(this).parents(".contact-template").hide();
        } else {
         $(this).parents(".contact-template").show();
        }
      });
    });

    $(".contact-template").click(function(){
       // removing the active class from every contact-template and message-contact-    area
       $(".contact-template").removeClass("active");
       $(".main-message-area").removeClass("active");
       // add active class to the contact clicked
       $(this).addClass("active");
       // make a variable for data-contact and data-sms
       var attrContact = $(this).attr("data-contact");
       // apply the active class at the chat with the same value of contacts
       $(".main-message-area[data-sms="+attrContact+"]").addClass("active");
       // make a copy of the img
       var contactImg = $(this).find(".img-wrapper img").clone();
       // make a copy of the name
       var contactName = $(this).find(".info-contact-name").text();
       // insert the value inside of the header message area
       $(".header-message-area").find(".img-wrapper").html(contactImg);
       $("#changeh4").text(contactName);
     });
 });
