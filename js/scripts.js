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
var toBinary = function(num, div){
  if(div < 1)
    return;
  if((num / div) >= 1){
    output.push(1);
    toBinary(num - div, div/2);
  }else {
    output.push(0);
    toBinary(num, div/2);
  }

}
var toTrinary = function(num){

}
var toHexadecimal = function(num){
  if(num === 0){
    return;
  }else{
    var remainder = num % 16;
    if(num <= 16){
      output.unshift(getHexLetter(num));
      num = 0;
    }else{
      num = Math.floor(num / 16);
      output.unshift(getHexLetter(remainder));
    }

    toHexadecimal(num);
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
      //toBinary(num, Math.pow(2, 32));
      //trimZeroes();
      convertNum(num, 2);
    break;
    case "trinary":
      //toTrinary(num);
      convertNum(num, 3);
    break;
    case "hexadecimal":
      //toHexadecimal(num);
      convertNum(num, 16);
    break;
  }
}

var trimZeroes = function(){
  output = output.slice(output.indexOf(1));
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
