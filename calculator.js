$(".inputBox").keyup(function () {
  convertIP();
    if (this.value.length == this.maxLength || (this.id > 32 && this.value >= 10)) {

      //$(this).next('.inputBox').focus();
      //$(this).parentElement.nextElementSibling.firstElementChild.focus();
      var e = event || window.event;  
      var key = e.keyCode || e.which;  
         if ((key == 96 || key == 97 || key == 49 || key == 48 || key == 39 || key == 13) && this.id <33) {
      x = parseInt(this.id);
      y = 2;
      document.getElementById(x+1).focus(); 
//      document.getElementById(y+1).value = x+1;
         }
       }
    }
);


function convertIP() {
    //var BinaryValueVar = document.getElementsByName('BinaryValue1')[0].value
    var BinaryValueVar1 = document.getElementById("inputTable1").rows[1].cells;
    var BinaryValueVar2 = document.getElementById("inputTable2").rows[1].cells;
    var BinaryValueVar3 = document.getElementById("inputTable3").rows[1].cells;
    var BinaryValueVar4 = document.getElementById("inputTable4").rows[1].cells;

    i = 0;
    j = 3;
    const BinaryValue = [BinaryValueVar1, BinaryValueVar2, BinaryValueVar3, BinaryValueVar4];
    const IPValue = [0, 0, 0, 0];
    const broadIP = [0, 0, 0, 0];
    const firstIP = [0, 0, 0, 0];
    const lastIP = [0, 0, 0, 0];

    const subbroadIP = [0, 0, 0, 0];
    const subfirstIP = [0, 0, 0, 0];
    const sublastIP = [0, 0, 0, 0];
  
    hostBits = document.getElementById(33).value;
    subnetBits = document.getElementById(34).value;
    resultBits = hostBits-subnetBits;
    while (i < 4) {
      if (BinaryValue[i][0].children[0].value == "1") {IPValue[i] += 128;}
      if (BinaryValue[i][0].children[0].value == "1" || hostBits >= (8*j) + 8) {broadIP[i] += 128;}
      if (BinaryValue[i][0].children[0].value == "1" && !(hostBits >= (8*j) + 8)) {firstIP[i] += 128;}
      if (BinaryValue[i][0].children[0].value == "1" || hostBits >= (8*j) + 8) {lastIP[i] += 128;}
      //subnet
      if (BinaryValue[i][0].children[0].value == "1" || resultBits >= (8*j) + 8) {subbroadIP[i] += 128;}
      if (BinaryValue[i][0].children[0].value == "1" && !(resultBits >= (8*j) + 8)) {subfirstIP[i] += 128;}
      if (BinaryValue[i][0].children[0].value == "1" || resultBits >= (8*j) + 8) {sublastIP[i] += 128;}

      
      if (BinaryValue[i][1].children[0].value == "1") {IPValue[i] += 64;} 
      if (BinaryValue[i][1].children[0].value == "1" || hostBits >= (8*j) + 7) {broadIP[i] += 64;}
      if (BinaryValue[i][1].children[0].value == "1" && !(hostBits >= (8*j) + 7)) {firstIP[i] += 64;}
      if (BinaryValue[i][1].children[0].value == "1" || hostBits >= (8*j) + 7) {lastIP[i] += 64;}
      //subnet
      if (BinaryValue[i][1].children[0].value == "1" || resultBits >= (8*j) + 7) {subbroadIP[i] += 64;}
      if (BinaryValue[i][1].children[0].value == "1" && !(resultBits >= (8*j) + 7)) {subfirstIP[i] += 64;}
      if (BinaryValue[i][1].children[0].value == "1" || resultBits >= (8*j) + 7) {sublastIP[i] += 64;}
      
      
      if (BinaryValue[i][2].children[0].value == "1") {IPValue[i] += 32;} 
      if (BinaryValue[i][2].children[0].value == "1" || hostBits >= (8*j) + 6) {broadIP[i] += 32;}
      if (BinaryValue[i][2].children[0].value == "1" && !(hostBits >= (8*j) + 6)) {firstIP[i] += 32;}
      if (BinaryValue[i][2].children[0].value == "1" || hostBits >= (8*j) + 6) {lastIP[i] += 32;}
      //subnet
      if (BinaryValue[i][2].children[0].value == "1" || resultBits >= (8*j) + 6) {subbroadIP[i] += 32;}
      if (BinaryValue[i][2].children[0].value == "1" && !(resultBits >= (8*j) + 6)) {subfirstIP[i] += 32;}
      if (BinaryValue[i][2].children[0].value == "1" || resultBits >= (8*j) + 6) {sublastIP[i] += 32;}


      if (BinaryValue[i][3].children[0].value == "1") {IPValue[i] += 16;}
      if (BinaryValue[i][3].children[0].value == "1" || hostBits >= (8*j) + 5) {broadIP[i] += 16;}
      if (BinaryValue[i][3].children[0].value == "1" && !(hostBits >= (8*j) + 5)) {firstIP[i] += 16;}
      if (BinaryValue[i][3].children[0].value == "1" || hostBits >= (8*j) + 5) {lastIP[i] += 16;}
      //subnet
      if (BinaryValue[i][3].children[0].value == "1" || resultBits >= (8*j) + 5) {subbroadIP[i] += 16;}
      if (BinaryValue[i][3].children[0].value == "1" && !(resultBits >= (8*j) + 5)) {subfirstIP[i] += 16;}
      if (BinaryValue[i][3].children[0].value == "1" || resultBits >= (8*j) + 5) {sublastIP[i] += 16;}
      
      
      if (BinaryValue[i][4].children[0].value == "1") {IPValue[i] += 8;}
      if (BinaryValue[i][4].children[0].value == "1" || hostBits >= (8*j) + 4) {broadIP[i] += 8;}
      if (BinaryValue[i][4].children[0].value == "1" && !(hostBits >= (8*j) + 4)) {firstIP[i] += 8;}
      if (BinaryValue[i][4].children[0].value == "1" || hostBits >= (8*j) + 4) {lastIP[i] += 8;}
      //subnet
      if (BinaryValue[i][4].children[0].value == "1" || resultBits >= (8*j) + 4) {subbroadIP[i] += 8;}
      if (BinaryValue[i][4].children[0].value == "1" && !(resultBits >= (8*j) + 4)) {subfirstIP[i] += 8;}
      if (BinaryValue[i][4].children[0].value == "1" || resultBits >= (8*j) + 4) {sublastIP[i] += 8;}
      
      
      if (BinaryValue[i][5].children[0].value == "1") {IPValue[i] += 4;}
      if (BinaryValue[i][5].children[0].value == "1" || hostBits >= (8*j) + 3) {broadIP[i] += 4;}
      if (BinaryValue[i][5].children[0].value == "1" && !(hostBits >= (8*j) + 3)) {firstIP[i] += 4;}
      if (BinaryValue[i][5].children[0].value == "1" || hostBits >= (8*j) + 3) {lastIP[i] += 4;}
      //subnet
      if (BinaryValue[i][5].children[0].value == "1" || resultBits >= (8*j) + 3) {subbroadIP[i] += 4;}
      if (BinaryValue[i][5].children[0].value == "1" && !(resultBits >= (8*j) + 3)) {subfirstIP[i] += 4;}
      if (BinaryValue[i][5].children[0].value == "1" || resultBits >= (8*j) + 3) {sublastIP[i] += 4;}

      
      if (BinaryValue[i][6].children[0].value == "1") {IPValue[i] += 2;}
      if (BinaryValue[i][6].children[0].value == "1" || hostBits >= (8*j) + 2) {broadIP[i] += 2;}
      if (BinaryValue[i][6].children[0].value == "1" && !(hostBits >= (8*j) + 2)) {firstIP[i] += 2;}
      if (BinaryValue[i][6].children[0].value == "1" || hostBits >= (8*j) + 2) {lastIP[i] += 2;}
      //subnet
      if (BinaryValue[i][6].children[0].value == "1" || hostBits >= (8*j) + 2) {subbroadIP[i] += 2;}
      if (BinaryValue[i][6].children[0].value == "1" && !(hostBits >= (8*j) + 2)) {subfirstIP[i] += 2;}
      if (BinaryValue[i][6].children[0].value == "1" || hostBits >= (8*j) + 2) {sublastIP[i] += 2;}
      
      
      if (BinaryValue[i][7].children[0].value == "1") {IPValue[i] += 1;}
      if (BinaryValue[i][7].children[0].value == "1" || hostBits >= (8*j) + 1) {broadIP[i] += 1;}
      if (BinaryValue[i][7].children[0].value == "1" && !(hostBits >= (8*j) + 1) || hostBits >= 1 && j == 0) {firstIP[i] += 1;}
      if ((BinaryValue[i][7].children[0].value == "1" || hostBits >= (8*j) + 1) && !(hostBits >= 1 && j == 0)) {lastIP[i] += 1;}
      //subnet
      if (BinaryValue[i][7].children[0].value == "1" || resultBits >= (8*j) + 1) {subbroadIP[i] += 1;}
      if (BinaryValue[i][7].children[0].value == "1" && !(resultBits >= (8*j) + 1) || hostBits >= 1 && j == 0) {subfirstIP[i] += 1;}
      if ((BinaryValue[i][7].children[0].value == "1" || resultBits >= (8*j) + 1) && !(hostBits >= 1 && j == 0)) {sublastIP[i] += 1;}
      
      
        i += 1;
      j -= 1;
    }

   document.getElementById("output").innerHTML = "Given IP: " + IPValue[0] + "." + IPValue[1] + "." + IPValue[2] + "." + IPValue[3] + "/" + (32 - hostBits) + "<br>" + 
"Broadcast IP: "  + broadIP[0] + "." + broadIP[1] + "." + broadIP[2] + "." + broadIP[3] + "<br>" + 
"First Valid IP: "+ firstIP[0] + "." + firstIP[1] + "." + firstIP[2] + "." + firstIP[3] + "<br>" + 
"Last Valid IP: " + lastIP[0] + "." + lastIP[1] + "." + lastIP[2] + "." + lastIP[3] + "<br><br>" +

"Subnet Broadcast IP: "  + subbroadIP[0] + "." + subbroadIP[1] + "." + subbroadIP[2] + "." + subbroadIP[3] + "<br>" + 
"First Valid IP on Subnet: "+ subfirstIP[0] + "." + subfirstIP[1] + "." + subfirstIP[2] + "." + subfirstIP[3] + "<br>" + 
"Last Valid IP: on Subnet:" + sublastIP[0] + "." + sublastIP[1] + "." + sublastIP[2] + "." + sublastIP[3] + "<br>"
     ;
  
  
//    document.getElementById("output").innerHTML = "IP -> Binary: "+ IPValue[0];
}

function checkValue(target) { 
   var e = event || window.event;  
   var key = e.keyCode || e.which;                              
   if (key != 8 && key != 37 && key != 9 && key != 46 && key != 49 && key != 48 && key != 96 && key != 97) { 
           if (e.preventDefault) e.preventDefault(); 
           e.returnValue = false; 
   }
  convertIP();
 }  
