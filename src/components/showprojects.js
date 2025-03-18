

const productsshow = ()=>{
    // Step 1: Define the category data (not actually needed here but can be useful)
let projects = {
    data: [
      { category: "catagory1" },
      { category: "catagory1" },
      { category: "catagory2" },
      { category: "catagory3" },
    ],
  };
  
  // Step 2: Select all required elements
  const buttons = document.querySelectorAll(".navi-btn"); // All filter buttons
  const projectCards = document.querySelectorAll(".proj-cont"); // All project cards
  
  // Step 3: Add event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.innerText.toLowerCase(); // Get the category from button text
  
      // Step 4: Show or hide projects based on category
      projectCards.forEach((card) => {
        const cardCategory = card.querySelector("h4").innerText.toLowerCase();
  
        if (category === "all" || cardCategory === category) {
          card.style.display = "block"; // Show matching projects
        } else {
          card.style.display = "none"; // Hide others
        }
      });
    });
  });
}

export default productsshow;