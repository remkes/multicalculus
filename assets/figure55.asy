size(10cm);

import graph;
xaxis(Ticks);
yaxis(Ticks);

dot((4,4));

draw((0,0)--(4,4));
draw((4,4){SE}..{S}(5.657,0));
draw((1,1){SE}..{S}(1.414,0));
draw((-0.1,0.1)--(-0.3,0.3)--(3.7,4.3)--(3.9,4.1));

label("$r$",(2,2.6),NW);
label("$\theta$",(1.3,0.5),NE);
label("$(r,\theta)$",(4,4),NE);
