size(12cm,12cm);
import graph;

xlimits(-1,5);
ylimits(-1,3);

xaxis("$x$");
yaxis("$y$");

filldraw((0,0)--(1,1){N}..(2,2){E}..(3,1)--(2,1)--(1,0)--cycle,gray);

dot("$(1,1)$",(1,1),NW);
dot("$(0,0)$",(0,0),NW);
dot("$(3,1)$",(3,1),E);
dot("$(2,1)$",(2,1),SE);
dot("$(1,0)$",(1,0),S);
