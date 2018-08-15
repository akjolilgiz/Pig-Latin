var convertToPigLatin = function(txt) {
  // var vowels = ["a", "e", "i", "o", "u"];
  var vowels = "aeiouAEIOU";
  var consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
  var output = '';


    if (vowels.includes(txt[0])) {
      output = txt + "ay";
    } else if (consonants.includes(txt[0])) {
      for(i=0;i<txt.length;i++) {
        if (consonants.includes(txt[i])) {
        } else {
          var modify = i;
          if (txt[i] === "u" && txt[i-1] === "q") {
            modify = i+1;
          }


          var first = txt.substr(0,modify);
          var rest = txt.substr(modify,txt.length);

          output = rest + first + "ay";
          i = txt.length;
        }
      }
    } else if (/[^0-9]/gi.test(txt)) {
      return "is text";
    } else {
      output = txt;
     }


  return output;
}



var splitWords = function(sentence) {
  var output = '';
  var sentences = [];
  sentences = sentence.split(" ");
  sentences.forEach(function(word) {
    output = output + " " + convertToPigLatin(word);
  });

  return output;
}



$(document).ready(function() {
  $("form#txtTranslator").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#txt").val();
    var sentenceOutput = splitWords(userInput);
    // var sentenceOutput = tojoin.join();


    $("#result").text(sentenceOutput);
  });
});
