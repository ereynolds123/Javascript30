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
    const datatype = this.dataset.sizing || '';
    //Sets the property so that it is the correct CSS variable with the value clicked on and the suffix of the data type. 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + datatype);
  }

  //Takes all inputs, adds event listener and called handleUpdates
  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));