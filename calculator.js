 x = 1
y = 1

function convertIP() {



    //var BinaryValueVar = document.getElementsByName('BinaryValue1')[0].value

    var BinaryValueVar1 = document.getElementById("inputTable1").rows[1].cells;
    var BinaryValueVar2 = document.getElementById("inputTable2").rows[1].cells;
    var BinaryValueVar3 = document.getElementById("inputTable3").rows[1].cells;
    var BinaryValueVar4 = document.getElementById("inputTable4").rows[1].cells;

    i = 0;

    const BinaryValue = [BinaryValueVar1, BinaryValueVar2, BinaryValueVar3, BinaryValueVar4];

    const IPValue = [0, 0, 0, 0];

  
    while (i < 4) {
        if (BinaryValue[i][0].children[0].value == "1") {
            IPValue[i] += 128;
        }
      if (BinaryValue[i][1].children[0].value == "1") {
            IPValue[i] += 64;
        } 
        if (BinaryValue[i][2].children[0].value == "1") {
            IPValue[i] += 32;
        } 
        if (BinaryValue[i][3].children[0].value == "1") {
            IPValue[i] += 16;
        }
        if (BinaryValue[i][4].children[0].value == "1") {
            IPValue[i] += 8;
        }
        if (BinaryValue[i][5].children[0].value == "1") {
            IPValue[i] += 4;
        }
        if (BinaryValue[i][6].children[0].value == "1") {
            IPValue[i] += 2;
        }
        if (BinaryValue[i][7].children[0].value == "1") {
            IPValue[i] += 1;
        }
        
        i += 1
    }
  
   document.getElementById("output").innerHTML = "IP -> Binary: " + IPValue[0] + "." + IPValue[1] + "." + IPValue[2] + "." + IPValue[3];
//    document.getElementById("output").innerHTML = "IP -> Binary: "+ IPValue[0];
}