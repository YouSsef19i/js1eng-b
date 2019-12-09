//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("a").value;
  var serviceQual = document.getElementById("b").value;
  var numOfPeople = document.getElementById("c").value;
/** 
  var billAmt =  parseInt(a);
  var serviceQual = parseInt(c);
  var numOfPeople = parseInt(b);
**/
  

  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

 //Check to see if this input is empty or less than or equal to 1
 if (numOfPeople === "" || numOfPeople <= 1) {
  numOfPeople = 1;
  document.getElementById("demo").style.display = "none";
} else {
  document.getElementById("demo").style.display = "block";
}


  //Calculate tip
  var total = billAmt * serviceQual / numOfPeople;


  document.getElementById("demo").innerHTML = total ;
  document.getElementById("totalTip").style.display = "block";



  document.getElementById("calculate").onclick = function() {
    total();
    

    
  }; 
}; 