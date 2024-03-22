// // index.js
// // index.js
// /* challenges
// 1.request data from server to get all ramen objects;
//   display the image inside, append it to<div id="ramen-menu">
// 2. when the user click image inside  <div id="ramen-menu">, shows information that got into  <div id="ramen-detail">
// 3. Attach a submit even listener to the new-ramen form using a function called addSubmitListener. 
//   when the user click add new ramen, addSubmitListener,  append it to <div id="ramen-menu">
// 4.overall, DOMContentLoaded
//  */


// Callbacks
/* const handleClick = (ramen) => {
  // Add code
  
} */

function display (ramen){
  document.querySelector("img.detail-image").src = ramen.image
  document.querySelector("h2.name").textContent = ramen.name
  document.querySelector("h3.restaurant").textContent = ramen.restaurant
  document.querySelector("#rating-display").textContent = ramen.rating
  document.querySelector("#comment-display").textContent = ramen.comment
}

 // Add code
  // challenge 4, append it to <div id="ramen-menu">
const addSubmitListener = () => {
  document.querySelector("#new-ramen").addEventListener("submit", e=>{
    e.preventDefault()
    const ramen = {
      image: document.querySelector("#new-image").value,
      name: document.querySelector("#new-name").value,
      restaurant: document.querySelector("#new-restaurant").value,
      rating:document.querySelector("#new-rating").value,
      comment: document.querySelector("#new-comment").value
    }
    display (ramen);
  })
}
    /* document.querySelector("#new-image").src = ramen.image
    document.querySelector("#new-name").textContent = ramen.name
    document.querySelector("#new-restaurant").textContent = ramen.restaurant
    document.querySelector("#new-rating").textContent = ramen.rating
    document.querySelector("#new-comment").textContent = ramen.comment
    document.querySelector("#ramen-menu").append(img)   */

 

const displayRamens = () => {
  /* challenge 1
  1.request data from server to get all ramen objects;
  display the image inside, append it to<div id="ramen-menu">
   */

  fetch('http://localhost:3000/ramens')
  .then(response=>response.json())
  .then(ramens =>{
    ramens.forEach(ramen=>{
      const img = document.createElement("img")
      img.src=ramen.image
      document.querySelector("#ramen-menu").append(img)
      img.addEventListener("click", event => {
        event.preventDefault();
        display(ramen)
        console.log(ramens)
        
      })
    })
    display(ramens[0])
    })
    
  }


const main = () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
  addSubmitListener()
}

main()

// Export functions for testing
/* export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};  */

