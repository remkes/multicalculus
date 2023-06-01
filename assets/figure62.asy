size(10cm);

import graph;
xaxis();
yaxis();

path p4=(4,0)--(10,6);
path p5=(10,6)--(16,0);
path p6=(16,0)--(10,-6);
path p7=(10,-6)--(4,0);

draw(p4);
draw(p5);
draw(p6);
draw(p7);

path c1=buildcycle(p4,p5,p6,p7);
fill(c1,gray);

dot("$(4,0)$",(4,0),SW);
dot("$(10,6)$",(10,6),NW);
dot("$(16,0)$",(16,0),NE);
dot("$(10,-6)$",(10,-6),SE);
