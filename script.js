// Num visitors tracker

// Get all text elements you want to animate
const textElements = document.querySelectorAll('p, h1, h2, h3, section, span, li'); // Add more selectors if needed
const visitedTimes = localStorage.getItem('visitedTimes');
const n_elements = textElements.length;
var typed = 0;
var isTyping = true;
if(localStorage.getItem('visitedTimes') >= 6){
  document.getElementById("vis_button").style.display = "block";
}

textElements.forEach(textElement => {
  if(isTyping && parseInt(localStorage.getItem('visitedTimes')) < 6){

    const old_inner = textElement.innerHTML;
    let wrappedText = "";
    for (let i = 0; i < textElement.textContent.length; i++) {
      wrappedText += `<span style="visibility: hidden;">${textElement.textContent.charAt(i)}</span>`;
    }
    textElement.innerHTML = wrappedText;

    const children  = textElement.children;

    let index = 0;
    let typingSpeed = 100; // Initial speed
    const maxSpeed = 20; // Maximum speed (lower value is faster)
    const acceleration = 5; // How quickly the speed increases

    function typeWriter() {
      if (index < children.length && isTyping && parseInt(localStorage.getItem('visitedTimes')) < 6) {
        children[index].style.visibility = "visible";

        index++;

        typingSpeed = Math.max(typingSpeed - acceleration, maxSpeed);
        typingSpeed += (Math.random() *10) - 5

        setTimeout(typeWriter, typingSpeed);
      } else{ 
        textElement.innerHTML = old_inner;
        typed++;
      }
    }

    setTimeout(typeWriter, 500);
  }
});

// Stop typing on click event
document.addEventListener('click', () => {
  if(parseInt(localStorage.getItem('visitedTimes')) < 6 && isTyping && typed < n_elements){
  if(localStorage.getItem('visitedTimes') === null){
      localStorage.setItem("visitedTimes", 1);
    } else{
      localStorage.setItem("visitedTimes", parseInt(localStorage.getItem('visitedTimes')) + 1);
    }
  }
  isTyping = false; // Update the state so typewriters stop
});

// Stop typing on click event
document.addEventListener('touchstart', () => {
  if(parseInt(localStorage.getItem('visitedTimes')) < 6 && isTyping && typed < n_elements){
    if(localStorage.getItem('visitedTimes') === null){
      localStorage.setItem("visitedTimes", 1);
    } else{
      localStorage.setItem("visitedTimes", parseInt(localStorage.getItem('visitedTimes')) + 1);
    }
  }
  isTyping = false; // Update the state so typewriters stop
});
