var output = []
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
  
}

var selectBase = function(num, base){
  switch(base){
    case "binary":
      toBinary(num, Math.pow(2, 32));
      trimZeroes();
    break;
    case "trinary":
      toTrinary(num);
    break;
    case "hexadecimal":
      toHexadecimal(num);
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
