$(document).ready(function() {
  //Invoke getTime function and press it inside of the differents span tagName inside the DOM
  document.getElementsByTagName("span")[12].innerHTML = getTime();
  document.getElementsByTagName("span")[13].innerHTML = getTime();
  document.getElementsByTagName("span")[14].innerHTML = getTime();
  document.getElementsByTagName("span")[15].innerHTML = getTime();
  document.getElementsByTagName("span")[16].innerHTML = getTime();
  document.getElementsByTagName("span")[17].innerHTML = getTime();
  document.getElementsByTagName("span")[18].innerHTML = getTime();
  document.getElementsByTagName("span")[19].innerHTML = getTime();
  document.getElementsByTagName("span")[20].innerHTML = getTime();
  document.getElementsByTagName("span")[21].innerHTML = getTime();
  document.getElementsByTagName("span")[22].innerHTML = getTime();
  document.getElementsByTagName("span")[23].innerHTML = getTime();
  document.getElementsByTagName("span")[24].innerHTML = getTime();
  document.getElementsByTagName("span")[25].innerHTML = getTime();
  document.getElementsByTagName("span")[26].innerHTML = getTime();
  document.getElementsByTagName("span")[27].innerHTML = getTime();
  document.getElementsByTagName("span")[28].innerHTML = getTime();
  document.getElementsByTagName("span")[29].innerHTML = getTime();
  document.getElementsByTagName("span")[30].innerHTML = getTime();
  document.getElementsByTagName("span")[31].innerHTML = getTime();
  document.getElementsByTagName("span")[32].innerHTML = getTime();
  document.getElementsByTagName("span")[33].innerHTML = getTime();
  //make a variable of the hours usefull for the contact list
  // var hours = [10:32, 23:54, 04:44, 02:34, 08:32, 11:34, 18:45, 19:43, 22:25, 17:34, 21:25];
  // // console.log(hours);
  // var randomHours = Math.floor(Math.random() * hours.length);
  // console.log(randomHours);
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
    //make a function which, at the click will show the dropdown-list
    $(document).on( "click", ".angle-down", function() {
       $(this).next(".dropdown-list").removeClass("d-none");
     });
    //make a function which, at the click will remove the dropdown-list
    $(document).on( "click", ".dropdown-list .cm", function() {
       $(this).parents(".message-row").remove();
     });
    //make a function which, at the click will add the class, display none
    $(document).on( "mouseleave", ".message-text", function() {
       $(this).find(".dropdown-list").addClass("d-none");
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
  };
  // make a function to insert a text from the input inside of the message-area
  function sendSms(attribute) {
    // make a variable for the value of the input
    var sms = $(".footer-message-area input").val();
    if (sms != "") {
      // make a copy of the input
      var template = $(".template .message-row").clone();
      // insert the text inside of the p and the span
      template.find("p").text(sms);
      $(".header-message-area .info-contact p").text("Is writing...");
      // invoke the getTime function
      template.find("span").text(getTime()).addClass("text-time");
      // insert the class
      template.addClass("send");
      // append the object inside of the main message screen
      $(".main-message-area[data-sms="+attribute+"]").append(template);
      $(".footer-message-area input").val("");
    }
  };
  //make a variable into an array with some random answers and hours

  function getReply(text, attribute) {
    // make a variable to clone the template
    var template = $(".template .message-row").clone();
    // chose the tagname to insert the text
    template.find("p").text(text);
    template.find("span").text(getTime()).addClass("text-time");
    // attach the class tot he template
    template.addClass("automatic-response");
    // append the text inside the new template
    $(".main-message-area[data-sms="+attribute+"]").append(template);
    $(".header-message-area .info-contact p").text("ultimo accesso alle ore: " + getTime());
  };
  // make a function to send the text with a press of a button on the keyboard
  $(".footer-message-area input").keydown(function(event) {
    if (event.which == 13) {
      var attrContact = $(".contact-template.active").attr("data-contact");
      sendSms(attrContact);
      // make an asincron function and invoke it to get an automatic reply
      setTimeout(function(){
        var answers = ["Ok","Ci vediamo presto!","Bene","Ciao!","Buona giornata!","Benissimo","Sì", "tranquillo","Perfetto!","Sicuramente","Sono d'accordo","Sul serio?","Ci sentiamo più tardi", "ok?"];
        var randomAnswers = Math.floor(Math.random() * answers.length);
        getReply(randomAnswers, attrContact);
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
