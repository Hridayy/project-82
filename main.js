var mouseEvent = "";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;



canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    //Addictonal Activity start
    
    //Addictonal Activity ends

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_position_of_x= e.clientX- canvas.offsetLeft;
current_position_of_y= e.clientY- canvas.offsetTop;

{if (mouseEvent=="mouseDown")
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=width_of_line
ctx.moveTo( last_position_of_x,last_position_of_y)
ctx.arc(current_position_of_x,current_position_of_y)
ctx.stroke()
}
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;

}