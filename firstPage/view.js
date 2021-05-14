window.addEventListener("keyup", function(event) {
  
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
})
document.getElementById("btn").onclick = function () {
location.replace('../public/index.html')
}