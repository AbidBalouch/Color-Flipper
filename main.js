let colors=['green','red','black','yellow','orange'];
let btn1=document.querySelector(".btn");
let clr=document.querySelector('.color');
btn1.addEventListener("click", function () {
   const randomnumber= randomNumber();
    clr.textContent=colors[randomnumber];
    document.body.style.backgroundColor=colors[randomnumber];
})
function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}