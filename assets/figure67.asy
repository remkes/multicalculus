import graph;
size(13cm);
path vector(pair z) {return (0,0)--(z.x,z.y);}
add(vectorfield(vector,(-4,-4),(4,4)));
