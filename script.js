$(document).ready( function(){
//Add a close button
  $("li").append("<span class='close'>\u00D7</span>");

  $("body").on("click", "li", function(){
    // Add a "checked" symbol when clicking on a list item
    $(this).toggleClass("checked");

  });
//When click on close, hide the item
  $(".close").click(function() {
    $($(this).parent()).remove();
  })


  // Add a item when clicking on add
  $("#add").click(function() {
    var userInput = "";
    userInput = $("#input-area").val();
    if (userInput != "") {
      $($("li").last()).after("<li>" + userInput + "</li>");
      $("#input-area").val("");
    } else {
      alert("Please input something");
    };
    $("li").append("<span class='close'>\u00D7</span>");
    $(".close").click(function() {
      $($(this).parent()).remove();
    });
    $(".close").click(function() {
      $($(this).parent()).remove();
    })

  })

})


