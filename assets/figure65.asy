import graph;
size(7cm);
path vector(pair z) {return
(0,0)--(-z.y, z.x);}
add(vectorfield(vector,(-4,-4),(4,4)));
