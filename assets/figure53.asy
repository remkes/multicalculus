size(10cm);

import graph;
xaxis(Ticks);
yaxis(Ticks);

draw((-1,2)--(2,-1));
draw((-1,3)--(3,-1));

filldraw((0,1)--(0,2)--(2,0)--(1,0)--cycle,gray);

label("$x+y=1$",(1.5,-0.5),SW);
label("$x+y=2$",(2.7,-0.7),NE);
