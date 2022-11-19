let colors=[0,1,2,4,5,6,7,8,9,'A','B','C','D','E','F'];
let btn1=document.querySelector(".btn");
let clr=document.querySelector('.color');
btn1.addEventListener("click", function () {
    let hexcolor='#';
    for(let i=0;  i < 6;i++){
        hexcolor +=colors[randomNumber()];
    }
   
    clr.textContent=hexcolor;
    document.body.style.backgroundColor=hexcolor;
})
function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}