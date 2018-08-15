var convertToPigLatin = function(txt) {
  if (/[^0-9]/gi.test(txt)) {
    return "is text";
  } else {
  return txt;
  }
}




$(document).ready(function() {
  $("form#txtTranslator").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#txt").val();

    var output = convertToPigLatin(userInput);

    $("#result").text(output);
  });
});
