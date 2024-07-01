let lastEdited = "Minutes";  

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;


document.getElementById("Minutes").onchange = function() {
  lastEdited = "Minutes";
};
document.getElementById("Seconds").onchange = function() {
  lastEdited = "Seconds";
};


function convert(Time) {

 
  var Minutes = document.getElementById("Minutes").value;
  Minutes = parseFloat(Minutes);

  var Seconds = document.getElementById("Seconds").value;
  Seconds = parseFloat(Seconds);



  var conversionM;
  var conversionS;



  if (lastEdited === "Minutes") {
    conversionS = (Minutes * 60) 
   
    document.getElementById("Seconds").value = Math.round(conversionS);
  } 
    
    else if (lastEdited === "Seconds") {
    conversionM = (Seconds / 60) 
   
   
    document.getElementById("Minutes").value = Math.round(conversionM);

  } 
  


  
  document.getElementById("Minutes").innerHTML = conversionM;
  document.getElementById("Seconds").innerHTML = conversionS;
 
}



 


function reset() {
  document.getElementById("Minutes").value = 0;
  document.getElementById("Seconds").value = 0;

}


