canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty"
var last_position_of_x, last_position_of_y;
color="black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
  mouseEvent="mouseDown";
  color = document.getElementById("color").value; 
  radius=document.getElementById("radius").value;
  width_of_line = document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
  mouseEvent="mouseUp"
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
  mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
 current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
 current_position_of_mouse_y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mouseDown")
 {
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.linewidth=width_of_line;
 ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radus, 0, 2 * Maths.PI);
 ctx.stroke()
 }
 last_position_of_x=current_position_of_mouse_x;
 last_position_of_y=current_position_of_mouse_y;
}
