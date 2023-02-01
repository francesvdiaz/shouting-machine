window.onload = function() {
  let button = document.getElementById("enter");
  let increaseButton = document.getElementById("increase");
  let sizedFont= 50;
  
   button.addEventListener("click", function(event) {
     event.preventDefault();
     let inputText = document.querySelector("input").value;
     document.querySelector("h2").innerText = inputText.toUpperCase();
  });

  increaseButton.addEventListener("click", function(event) {
    event.preventDefault();
    sizedFont += 50;
    let inputText = document.querySelector("input").value;
    document.querySelector("h2").innerText = inputText.toUpperCase();
    document.querySelector("h2").style.fontSize = sizedFont + "px"
  });
};