
const navpopup = () =>{
    const navbtn = document.querySelector(".header--bars");
const navx = document.querySelector(".nav-x");
const navpopup = document.querySelector(".mobile-nav");
navbtn.addEventListener("click", () => {
  navpopup.style.display = "flex";
});
navx.addEventListener("click", () => {
  navpopup.style.display = "none";
});
}

export default navpopup;