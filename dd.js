// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
    
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY );
//     console.log(evt.mouserevent);
// };
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

let modeBtn = document.querySelector("#mode");
let currMode = "Light";
modeBtn.addEventListener("click", () => {
    if(currMode === "Light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";  
    }
 else {
    currMode = "Light";
document.querySelector("body").style.backgroundColor = "#d3d3d3";
}
console.log(currMode);
});