size(10cm);

import graph;

path p4=(0,0)--(4,-1);
path p5=(4,-1)--(7,1);
path p6=(7,1)--(3,2);
path p7=(3,2)--(0,0);

draw(p4);
draw(p5);
draw(p6);
draw(p7);

path c1=buildcycle(p4,p5,p6,p7);
fill(c1,gray);

dot("$(4,-1)$",(4,-1),SE);
dot("$(3,2)$",(3,2),NW);
dot("$(7,1)$",(7,1),NE);

xaxis(Ticks);
yaxis(Ticks);
