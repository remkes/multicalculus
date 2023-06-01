size(10cm);

fill(circle((0,0),1),gray);
label("Circle",(0,-1),S);

path p1=(3,0)--(3.924,0.382);
path p2=(3,0)--(3.382,0.924);
path p3=(3.924,0.382){-0.382,0.924}::(3.382,0.924){-0.924,0.382};

draw(circle((3,0),1),dotted);
draw(p1);
draw(p2);
draw(p3);

path c1=buildcycle(p1,p3,p2);
fill(c1,gray);
label("Wedge",(3,-1),S);

fill(circle((0,3),1),gray);
fill(circle((0,3),0.4),white);
label("Annulus",(0,2),S);

path p4=(3.462,3.191)--(3.924,3.382);
path p5=(3.191,3.462)--(3.382,3.924);
path p6=(3.924,3.382){-0.382,0.924}::(3.382,3.924){-0.924,0.382};
path p7=(3.462,3.191){-0.191,0.462}::(3.191,3.462){-0.462,0.191};

draw(circle((3,3),1),dotted);
draw((3,3)--(3.924,3.382),dotted);
draw((3,3)--(3.382,3.924),dotted);
draw(p4);
draw(p5);
draw(p6);
draw(p7);

path c1=buildcycle(p4,p6,p5,p7);
fill(c1,gray);
label("Arc",(3,2),S);
