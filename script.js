let p = document.getElementById("principal").value;
let r = document.getElementById("rate").value;
let y = document.getElementById("years").value;

function updateVal(val) {
  p = parseInt(val);
}

function displaySlider(val) {
  document.getElementById("slidervalue").innerHTML = val + " %";
  r = parseFloat(val);
}

function updateDrop(val) {
  y = parseInt(val);
}

function compute() {
  if (p <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    let interest = (p * y * r) / 100;
    var d = new Date();
    var n = d.getFullYear();
    let result = `If you deposit ${p},
      at an interest rate of ${r}%.
      You will receive an amount of ${interest},
      in the year ${n + y}`;
    document.getElementById("result").innerHTML = result;
  }
}
