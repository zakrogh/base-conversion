var toBinary = function(num){

}
var toTrinary = function(num){

}
var toHexadecimal = function(num){
  
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    var userInput = parseInt($("#userInput").val());
    var base = $(".base").val();
    switch(base){
      case "binary":
      //do stuff
      break;
      case "trinary":
      //do stuff
      break;
      case "hexadecimal":
      //do stuff
      break;
    }
    event.preventDefault();
  });
});
