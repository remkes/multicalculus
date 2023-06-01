import graph;
size(7cm);
path vector(pair z) {return
(0,0)--(-z.y, z.x);}
add(vectorfield(vector,(-4,-4),(4,4)));
draw(scale(1/2)*unitcircle);
draw(scale(1/3)*unitcircle);
draw(scale(1/4)*unitcircle);
draw(unitcircle);
draw(scale(2)*unitcircle);
draw(scale(3)*unitcircle);
draw(scale(4)*unitcircle);
