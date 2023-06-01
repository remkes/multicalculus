size(10cm,10cm,IgnoreAspect);

import graph;
xaxis(Ticks);
yaxis(Ticks);

path p4=(2,5)--(2,6);
path p5=(2,5){1,4}::(4,17){1,8};
path p6=(4,17)--(4,18);
path p7=(2,6){1,4}::(4,18){1,8};

draw(p4);
draw(p6);

draw((0,1){1,0}::(2,5){1,4}::(4,17){1,8});
draw((0,2){1,0}::(2,6){1,4}::(4,18){1,8});

path c1=buildcycle(p4,p5,p6,p7);
fill(c1,gray);

label("$y = x^2 + 1$",(2.5,7.25),SE);
label("$y = x^2 + 2$",(3,11),NW);
