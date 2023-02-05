
const trailerContentEl = document.querySelector(".trailerContainer");
const vdo = document.querySelector(".vdo");
document.querySelector(".btn").addEventListener("click",()=>{
trailerContentEl.classList.remove("active");
})
document.querySelector(".close").addEventListener("click",()=>{
trailerContentEl.classList.add("active");
vdo.pause();
vdo.currentTime= 0;
})
