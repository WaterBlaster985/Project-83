var canvas=document.getElementById("mycanvas")
var pen= canvas.getContext("2d")
window.addEventListener('mousemove', mousemoveAction);
window.addEventListener('mouseup', mouseupAction);
window.addEventListener('mousedown', mousedownAction);
window.addEventListener('touchmove', touchMoveAction);
window.addEventListener('touchstart', touchStartAction);
var tracker= 0;
var x, y;
function mouseupAction(){
    tracker= 0
}
function mousedownAction(){
    tracker= 1
}
function mousemoveAction(e){
    console.log(e)
    x= e.clientX-canvas.offsetLeft; 
    y= e.clientY-canvas.offsetTop; 
    if (tracker==1){
        pen.beginPath();
        pen.strokeStyle="blue";
        pen.lineWidth=2;
        pen.arc(x, y, 30, 0, 2*Math.PI);
        pen.stroke();
    }
}
function touchMoveAction(e){
    x= e.clientX-canvas.offsetLeft; 
    y= e.clientY-canvas.offsetTop;
    pen.beginPath();
    pen.strokeStyle="blue";
    pen.lineWidth=2;
    pen.arc(x, y, 30, 0, 2*Math.PI);
    pen.stroke();
}
function touchStartAction(e){
    x= e.clientX-canvas.offsetLeft; 
    y= e.clientY-canvas.offsetTop;
}