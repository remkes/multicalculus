size(10cm);
import graph;

xaxis("$x$");
yaxis("$y$");

draw((0,0)--(4,5)--(6,2)--(0,0));

dot((0,0));
dot((4,5));
dot((6,2));

label("$(0,0)$",(0,0),NW);
label("$(4,5)$",(4,5),NW);
label("$(6,2)$",(6,2),SE);

draw((4,1.33)--(4,5));

label("$y = \frac{x}{3}$",(3,1),SE);
label("$y = \frac{5x}{4}$",(2,2.5),NW);
label("$y = \frac{-3x}{2} + 11$",(5,3.5),NE);
