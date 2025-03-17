
const aboutpopup = () =>{
    const aboutbtn = document.querySelector(".hero--btn");
const aboutclose = document.querySelector(".x");
const aboutpopup = document.querySelector(".about");

aboutbtn.addEventListener("click", () => {
  aboutpopup.classList.add("aboutvisible");  // Show the popup with open animation
});

aboutclose.addEventListener("click", (event) => {
  event.preventDefault();  // Prevent page reload
  aboutpopup.classList.add("aboutclosing");  // Apply closing animation

  // After the animation ends, remove visibility
  aboutpopup.addEventListener('animationend', () => {
    aboutpopup.classList.remove("aboutvisible", "aboutclosing");
  },{ once: true });
});
}

export default aboutpopup;