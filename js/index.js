function showA() {
  document.getElementById("letterBtnA").onclick = function () {
    document.getElementById("imageA").style.display = "block";
    document.getElementById("hideBtnA").style.display = "block";
  };
}
function hideA() {
  document.getElementById("hideBtnA").onclick = function () {
    document.getElementById("imageA").style.display = "none";
    document.getElementById("hideBtnA").style.display = "none";
  };
}
function showB() {
  document.getElementById("letterBtnB").onclick = function () {
    document.getElementById("imageB").style.display = "block";
    document.getElementById("hideBtnB").style.display = "block";
  };
}
function hideB() {
  document.getElementById("hideBtnB").onclick = function () {
    document.getElementById("imageB").style.display = "none";
    document.getElementById("hideBtnB").style.display = "none";
  };
}
function showC() {
  document.getElementById("letterBtnC").onclick = function () {
    document.getElementById("imageC").style.display = "block";
    document.getElementById("hideBtnC").style.display = "block";
  };
}
function hideC() {
  document.getElementById("hideBtnC").onclick = function () {
    document.getElementById("imageC").style.display = "none";
    document.getElementById("hideBtnC").style.display = "none";
  };
}
