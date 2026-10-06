const button = document.querySelector("#button"); 
const character = document.querySelector("#character");
let state = 0; 
function changeMessage () {
    state = state + 1;
        if (state === 1) {
        character.src = "piano2.JPG";
        button.textContent = "off she goes ᵎᵎ";
    }
      if (state === 2) {
        character.src = "piano3.JPG";
          button.textContent = "night night piano ⊹ ࣪ ˖"
    }
      if (state === 3) {
        character.src = "piano1.JPG";
         button.textContent = "is it sleepy time ᶻ 𝗓 𐰁";
        state = 0;
    }
}
button.addEventListener("click", changeMessage);