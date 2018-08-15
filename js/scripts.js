var convertToPigLatin = function(txt) {
  // var vowels = ["a", "e", "i", "o", "u"];
  var vowels = "aeiou";
  var output = '';


    if (vowels.includes(txt[0])) {

      output = txt + "ay";
    } else if (/[^0-9]/gi.test(txt)) {
      return "is text";
    } else {
      output = txt;
     }


  return output;
}




$(document).ready(function() {
  $("form#txtTranslator").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#txt").val();

    var output = convertToPigLatin(userInput);

    $("#result").text(output);
  });
});
