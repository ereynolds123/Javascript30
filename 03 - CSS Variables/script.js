//First attempt

// let blur= document.getElementById("blur");
// let spacing= document.getElementById("spacing");
// let base= document.getElementById("base");

// blur.addEventListener("click", e => {
//     console.log("Clicked")
//     blur.style.setProperty('--blur',+ "10px");
//   });

// spacing.addEventListener("click", e => {
//     console.log("spacing Clicked")
//     spacing.style.setProperty('--spacing',+ "10px");   
//   });
  
//   base.addEventListener("click", e => {
//     console.log("Base clicked")
//     base.style.setProperty('--base',+ "blue");
//   });



//Second attempt
//Selects all inputs
  const inputs = document.querySelectorAll('.controls input');

//Function handles updates
  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));