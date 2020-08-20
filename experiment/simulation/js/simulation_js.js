function showCode() {
  document.getElementById('Swap').className = 'show, codeLayout';
}

function changeClass(id, className) {
  document.getElementById(id).className = className;
}

function displayElements() {
  var a = document.getElementById('inputV1').value.trim();
  var b = document.getElementById('inputV2').value.trim();

  if (window.innerWidth >= 801) {
    if (a == " " || b == " ") {
      location.reload();
      alert("Please provide inputs");
      return;
    }

    a = Number(a);
    b = Number(b);
    if (isNaN(typeof(a)) || isNaN(typeof(b))) {
      alert("Please provide numbers only.");
      location.reload();
      return;
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      document.getElementById("line2").innerHTML = " float num1,num2,temp;";
    }
  }

  if (window.innerWidth <= 800) {
    var a = document.getElementById('inputV3').value.trim();
    var b = document.getElementById('inputV4').value.trim();
    if (a == " " || b == " ") {
      location.reload();
      alert("Please provide inputs");
      return;
    }
    a = Number(a);
    b = Number(b);
    if (isNaN(typeof(a)) || isNaN(typeof(b))) {
      alert("Please provide numbers only.");
      location.reload();
      return;
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      document.getElementById("line2").innerHTML = " float num1,num2,temp;";
    }
  }
  //this.createBoxes()
  showCode();
  var c = "line"
  //this.convertFromStringToNumber()
  changeClass(c + "1", 'showDivInRed code-text');
  changeClass('next', 'show button-style');
  changeClass('next1', 'show button-style bottom-button');

  //document.getElementById("A").innerHTML=""+a;
  //document.getElementById("B").innerHTML=""+b;

  //Execution(a,b);
}

function createBoxes() {

  changeClass('resultDisplay', 'resultDisplay');

}

var d = 1;

function Execution() {

  if (window.innerWidth >= 801) {
    var a = Number(document.getElementById('inputV1').value);
    var b = Number(document.getElementById('inputV2').value);
  } else {
    var a = Number(document.getElementById('inputV3').value);
    var b = Number(document.getElementById('inputV4').value);
  }

  changeClass("line" + d, "line code-text");
  d = d + 1;
  var temp1 = a;
  changeClass("line" + d, 'showDivInRed code-text');

  if (d == 2) {
    createBoxes();
    document.getElementById("A").innerHTML = "" + a;
    document.getElementById("B").innerHTML = "" + b;
    document.getElementById("box-B").classList.add("yellow");
    document.getElementById("box-A").classList.add("yellow");

  }
  if (d == 3) {

    temp = a;
    document.getElementById("temp").innerHTML = "" + temp;
    document.getElementById("box-temp").classList.add("green");
    document.getElementById('A').innerHTML = "" + a;
    ///alert(temp1);

  }
  if (d == 4) {
    a = b;
    document.getElementById('A').innerHTML = "" + a;
    document.getElementById("box-A").classList.add("green");
    document.getElementById('B').innerHTML = "" + a;
    //alert("temp1")
  }
  if (d == 5) {

    b = temp;
    document.getElementById('B').innerHTML = "" + b;
    document.getElementById("box-B").classList.add("green");
    document.getElementById("box-temp").classList.remove("green");
    document.getElementById("box-temp").classList.add("yellow");
    document.getElementById("temp").innerHTML = "" + a;
  }

  if (d == 6) {
    changeClass('temp1', 'hide');
  }

  if (d == 7) {
    alert("Program Finished");
    location.reload();
  }

}
