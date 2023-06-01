size(10cm);

import graph;
xaxis(Ticks);
yaxis(Ticks);

draw((0,0)--(4,4));
draw((0,0)--(1.33,4));

path p1=(1,1)--(1.732,1.732);
path p2=(0.577,1.732)--(1,3);
path p3=(0.25,4){1,-16}::(1,1)::(4,0.25){1,-1/16};
path p4=(0.75,4){1,-48}::(1.732,1.732)::(4,0.75){1,-3/16};

draw(p1);
draw(p2);
draw(p3);
draw(p4);

path c=buildcycle(p1,p4,p2,p3);
fill(c,gray);

label("$y = \frac{1}{x}$",(1.5,0.66),SW);
label("$y = \frac{3}{x}$",(2.5,1.2),NE);
label("$y = x$",(3,3),SE);
label("$y = 3x$",(1.25,3.75),SE);
