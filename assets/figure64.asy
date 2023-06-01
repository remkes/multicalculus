import graph;
size(10cm);
path vector(pair z) {return
(0,0)--(-z.x/(1+(z.x)^2+(z.y)^2), -z.y/(1+(z.x)^2+(z.y)^2));}
add(vectorfield(vector,(-4,-4),(4,4)));
