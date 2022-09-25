function increment(id) {
    var x = parseInt(document.getElementById(id).innerText);
    document.getElementById(id).innerText = x + 1;
}
function decrement(id) {
    var x = parseInt(document.getElementById(id).innerText);
    document.getElementById(id).innerText = x - 1;
}
function date() {
  var y = document.createElement("INPUT");
  y.setAttribute("type", "date");
  y.setAttribute("value", "2014-02-09");
  document.body.appendChild(x);
}