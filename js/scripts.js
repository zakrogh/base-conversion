var output = []
var getHexLetter = function (num){
  switch(num){
    case 10:
      return "A";
    case 11:
      return "B";
    case 12:
      return "C";
    case 13:
      return "D";
    case 14:
      return "E";
    case 15:
      return "F";
    default:
      return num;
  }
}

var convertNum = function(num, base){
  if(num === 0){
    return;
  }else{
    var remainder = num % base;
    if(num < base){
      output.unshift(getHexLetter(num));
      num = 0;
    }else{
      num = Math.floor(num / base);
      output.unshift(getHexLetter(remainder));
    }

    convertNum(num, base);
  }
}

var selectBase = function(num, base){
  switch(base){
    case "binary":
      convertNum(num, 2);
    break;
    case "trinary":
      convertNum(num, 3);
    break;
    case "hexadecimal":
      convertNum(num, 16);
    break;
  }
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    var userInput = parseInt($("#userInput").val());
    var base = $(".base").val();
    output = [];
    selectBase(userInput, base);
    $(".output").text("");
    $(".output").append(output.join(""));
    $(".output").fadeIn();
    event.preventDefault();
  });
});
