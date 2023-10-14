let box = document.querySelector('.container');

//-------------events--------------------------//

box.addEventListener("mouseover" , ()=>{
    let BrowserHeight = document.documentElement.clientHeight;
    let BrowserWidth = document.documentElement.clientWidth;
    let boxH = box.offsetHeight;
    let boxW = box.offsetWidth;
   
    left = leftPosition(BrowserWidth - boxW);
   Upper = leftPosition(BrowserHeight - boxH);

   box.style.left = left + "px"
   box.style.top = Upper + "px"
});


function leftPosition(Lp){
    
   let valueLeft = Math.floor(Math.random() * Lp);

    return valueLeft;
}