var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "section-vectors",
  "level": "1",
  "url": "section-vectors.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors in <span class=\"process-math\">\\(\\RR^2\\)<\/span> and <span class=\"process-math\">\\(\\RR^3\\)<\/span>",
  "body": " Vectors in and   Describing Space  The purpose of vectors is to describe the geometry of space. For the purposes of this course, I means two and three dimensional space, but many of the tools are more general and can describe higher dimensional spaces. That's very interesting for a more abstract treatment, but to do multivariable calculus, I need two and three dimensional vectors.  I imagine this is not your first exposure to vectors. However, this week is nevertheless important to review the main ideas as well as set our conventions for notation and terminology. Vectors are used in many places (linear algebra, physics, computer graphcis, engineering, among others) and most of those places have minor or even major differences in terms and notations. This review will get us all on the same page for the discussions through the course. So, let me start with the basic definitions.    In the context of geometry, ordinary numbers (integers, rational numbers or real numbers) are called scalars .      A vector is a finite ordered list of scalars. Vectors can be written either as columns or rows. If a vector is a list of the numbers , , and (in that order), I write the vector in one of two ways:     If you have taken my linear algebra course, you will know that, in that course, I almost exclusively use column vectors. Here the convention is reversed: I will almost exclusively use row vectors.    Let be a positive integer. Real Euclidean Space or Cartesian Space , written , is the set of all vectors of length with real number entries.  Since there are coefficieint in its vectors, the space has dimension  .  In this course, I am exclusively interested in (the familiar Cartesian Plane ) and in (which I will call Cartesian Three-Space or, more briefly, just Cartesian Soace ).      If I have a vector in or in , the scalars , and are called the entries , coordinates or components of that vector. Specifically, is the first component, is the second component and is the third component.      The vector in and the vector in are called the origin of each space. Each is also called the zero vector .    Euclidean space is visualized by drawing axes, one in each independent perpendicular direction. In this visualization, the vector corresponds to the unique point I get moving units in the direction of the axis and units in the direction of the axis. shows the location of several points in .   Points in      As with , the point is the unique point I find by moving units in the direction, units in the direction and units in the direction. When visualizing , the convention is to draw the axis horizontally, with a positive direction to the right, and the axis vertically, with a positive direction upwards. For , the and axes form a flat plane, and the axis extends vertically from that plane as shown in .   Points in        Points or Directions?  I can think of an element of , say , as both the point located at and the vector drawn from the origin to the point , as shown in . Though these two ideas are distinct, I will frequently switch between them, often without explicitly saying so. Part of becoming proficient in vector geometry is becoming accustomed to the switch between the perspectives of points and directions.   Vectors as Points and Directions        Local Direction Vectors  I've already spoken about the distinction between elements of as points and vectors. There is another important subtlety that shows up all throughout vector geometry. In addition to thinking of vectors as directions starting at the origin, I can think of them as directions starting anywhere in . I call these local direction vectors .   Local Direction Vectors       shows local direction vectors starting at the point . The two local vectors and are relative to the point as if that were their origin.  Using vectors to define local directions is a useful tool. A standard example is a camera in a three-dimensional virtual environment. First, I need to know the location of the camera, which is an ordinary vector starting from the origin. Second, I need to know what direction the camera is pointing, which is a local direction vector which treats the camera location as the current origin.  One of the most difficult things about learning vector geometry is becoming accustomed to local direction vectors. I won't always carefully distinguish between vectors at the origin and local direction vectors; often, the difference is implied, and it is up to the reader\/student to figure out how the vectors are being used.   "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-vectors.html#definition-1",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  In the context of geometry, ordinary numbers (integers, rational numbers or real numbers) are called scalars .   "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-vectors.html#definition-2",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  A vector is a finite ordered list of scalars. Vectors can be written either as columns or rows. If a vector is a list of the numbers , , and (in that order), I write the vector in one of two ways:    "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-vectors.html#definition-3",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  Let be a positive integer. Real Euclidean Space or Cartesian Space , written , is the set of all vectors of length with real number entries.  Since there are coefficieint in its vectors, the space has dimension  .  In this course, I am exclusively interested in (the familiar Cartesian Plane ) and in (which I will call Cartesian Three-Space or, more briefly, just Cartesian Soace ).   "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "section-vectors.html#definition-4",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  If I have a vector in or in , the scalars , and are called the entries , coordinates or components of that vector. Specifically, is the first component, is the second component and is the third component.   "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-vectors.html#definition-5",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "  The vector in and the vector in are called the origin of each space. Each is also called the zero vector .   "
},
{
  "id": "figure-points-in-the-cartesian-plane",
  "level": "2",
  "url": "section-vectors.html#figure-points-in-the-cartesian-plane",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " Points in     "
},
{
  "id": "figure-points-in-three-space",
  "level": "2",
  "url": "section-vectors.html#figure-points-in-three-space",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": " Points in     "
},
{
  "id": "figure-points-and-directions",
  "level": "2",
  "url": "section-vectors.html#figure-points-and-directions",
  "type": "Figure",
  "number": "1.1.8",
  "title": "",
  "body": " Vectors as Points and Directions     "
},
{
  "id": "p-14",
  "level": "2",
  "url": "section-vectors.html#p-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "local direction vectors "
},
{
  "id": "figure-local-direction-vectors",
  "level": "2",
  "url": "section-vectors.html#figure-local-direction-vectors",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": " Local Direction Vectors     "
},
{
  "id": "section-vector-operations",
  "level": "1",
  "url": "section-vector-operations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vector Operations",
  "body": " Vector Operations   Vector Arithmetic  In this section, I introduce\/review the basic arithmetic of vectors. I'll define the operations in ; for , all the operations are the same just without the third component. The exception is the cross-product, which is unique to .    The sum of two vectors and in is the sum taken component wise.     The sum is visualized by placing the start of the second vector at the end of the first, as in . Note that I can only add two vectors in the same dimension. I can't add a vector in to a vector in .   Visualizing Vector Addition        If is a vector in and is a real number, then the scalar multiplication of and is multiplication by in each component of . By convention, scalar multiplication is written with the scalar on the left of the vector.     Though there will be other multiplications to come, it is mostly true that I can't multiply vectors together in any way reminiscent of numbers. Instead, I can only multiply by scalars. Scalar multiplication is visualized by scaling the vector by the value of the scalar. (Hence the term scalar !) If the scalar is negative, the direction is also reversed, as in .   Visualizing Scalar Multiplication      Scalar multiplication also lets me define the difference between vectors.    The difference between two vectors and is the vector , defined using addition and scalar multiplication. This works out to be componentwise subtraction.       The length of a vector in is written and is given by a generalized form of the Pythagorean rule for right triangles.   This length is also called the norm of the vector. A vector of length one is called a unit vector .    If I think of vectors as directions from the origin towards a point, this definition of length gives exactly what I expect: the physical length of that arrow in and . Note also that only if is the zero vector. All other vectors have a positive length.  Often the square root is annoying, and I find it convenient to work with the square of the length.   The notions of length and difference allow me to define the distance between two vectors.    The distance between two vectors  and in is the length of their difference: .    You can check from the definition that , so distance doesn't depend on which comes first. If were absolute value in , this definition would match the notion of distance between numbers on the number line. Difference and length are visualized in .   Visualizing Distance Between Vectors        The Dot Product  Earlier, I said that I couldn't multiply two vectors together. That's mostly true: there is no general product of two vectors , which is still a vector, as least none that has any useful or reasonable geometric meaning. However, there are other kinds of multiplication which combine two vectors. The operation defined here starts with two vectors, but the result is a scalar.    The dot product or inner product or scalar product of two vectors and is given by the following formula.     The dot product relates to angles between vectors in an important way.    If and are two vectors in , then the angle between them satisfies this equation.     This can be used to calculate the angle between two vectors simply by calculating the inverse cosine. The output of the inverse cosine is an angle in the range . This convention works well for vectors, since the angle between them can always be chosen to be in this range. A useful implication of this relationship between angles and dot-products is that dot products can be used to identify perpendicular vectors.    Two vectors and in are orthogonal or perpendicular or normal to each other if and only if .    It will be useful to know how the dot product interacts with the other previously defined operations. Here are some properties.  >  Let be vectors in and let be a scalar in . The following four identities are true for all vectors and scalars.       The Cross Product  The cross product is a unique operations to .    Let and be two vectors in . The cross product of and is written and defined by the following formula.     The cross product differs from the dot product in several important ways. First, it produces a new vector in , not a scalar. For this reason, when working in , the dot product is often referred to as the scalar product and the cross product as the vector product . Second, the dot product measures, in some sense, the similarity of two vectors. The cross product measures, in some sense, the difference between two vectors. The cross product has a greater magnitude if the vectors are closer to being perpendicular. The dot product is zero if two vectors are perpendicular, but the cross product is zero if two vectors are parallel.  I could do a general calculation to show that . Since a dot product of two vectors is zero if and only if the vectors are perpendicular, the vector is perpendicular to both and . This turns out to be a very useful property of the cross product: it produces a result that is perpendicular to both original vectors. This is part of the reason that is is unique to : in three dimensions, if you have two set (non-parallel) direction, there is a unique direction that is perpendicular to both. The cross product constructs that unique direction.  Finally, a calculation from the definition shows that . So far, multiplication of scalars and the dot product of vectors have not depended on order. The cross product is one of many products in mathematics which depends on order. If I change the order of the cross product, I introduce a negative sign. An operation which changes sign when the order changes is called anti-commutative .    Angular Motion  An important application of the cross product is found in describing rotational motion. Linear mechanics describes the motion of an object through space, but rotational mechanics describes the rotation of an object independent of its movement through space. A force on an object can cause both kinds of movement, obviously. The following table summarizes the parallel questions of linear motion and rotational motion in .    Linear Motion  Rotational Motion        Moving in a straight line  Continual spinning    Direction of motion  Axis of spin    Force  Torque    Momentum  Angular Momentum    Mass (resistance to motion)  Moment of Inertia (resistance to spin)    Velocity  Frequency (Angular Velocity)    Acceleration  Angular Acceleration    How should I describe torque? If there is a linear force applied to an object which can only rotate around an axis, and if the linear force is applied at a distance from the axis, I can think of the force and the distance as vectors. The torque is then . Since the cross product is zero when vectors are parallel and large when vectors are perpendicualr, a force perpendicular to the radius gives the greatest angular acceleration. That makes sense. If and share a direction, then the force is pushing directly along the axis and no rotation can occur.  The use of cross products in rotational dynamics is ubiquitous. In fluid dynamics, local rotational motion of the fluid result in turbulence, vortices and similar effects. Tornadoes and hurricanes are particularly extreme examples of vortices. All the descriptions of the force and motion of these vortices involve cross products in the vectors describing the fluid. In this course, I will specifically use cross products to discuss angular accelration for parametric curves in .   "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "section-vector-operations.html#definition-6",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  The sum of two vectors and in is the sum taken component wise.    "
},
{
  "id": "figure-visualizing-vector-addition",
  "level": "2",
  "url": "section-vector-operations.html#figure-visualizing-vector-addition",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Visualizing Vector Addition     "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-vector-operations.html#definition-7",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  If is a vector in and is a real number, then the scalar multiplication of and is multiplication by in each component of . By convention, scalar multiplication is written with the scalar on the left of the vector.    "
},
{
  "id": "figure-visualizing-scalar-multiplication",
  "level": "2",
  "url": "section-vector-operations.html#figure-visualizing-scalar-multiplication",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Visualizing Scalar Multiplication     "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "section-vector-operations.html#definition-8",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  The difference between two vectors and is the vector , defined using addition and scalar multiplication. This works out to be componentwise subtraction.    "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "section-vector-operations.html#definition-9",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "  The length of a vector in is written and is given by a generalized form of the Pythagorean rule for right triangles.   This length is also called the norm of the vector. A vector of length one is called a unit vector .   "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "section-vector-operations.html#definition-10",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": "  The distance between two vectors  and in is the length of their difference: .   "
},
{
  "id": "figure-difference-and-length",
  "level": "2",
  "url": "section-vector-operations.html#figure-difference-and-length",
  "type": "Figure",
  "number": "1.2.8",
  "title": "",
  "body": " Visualizing Distance Between Vectors     "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "section-vector-operations.html#definition-11",
  "type": "Definition",
  "number": "1.2.9",
  "title": "",
  "body": "  The dot product or inner product or scalar product of two vectors and is given by the following formula.    "
},
{
  "id": "proposition-1",
  "level": "2",
  "url": "section-vector-operations.html#proposition-1",
  "type": "Proposition",
  "number": "1.2.10",
  "title": "",
  "body": "  If and are two vectors in , then the angle between them satisfies this equation.    "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "section-vector-operations.html#definition-12",
  "type": "Definition",
  "number": "1.2.11",
  "title": "",
  "body": "  Two vectors and in are orthogonal or perpendicular or normal to each other if and only if .   "
},
{
  "id": "proposition-dot-product-properties",
  "level": "2",
  "url": "section-vector-operations.html#proposition-dot-product-properties",
  "type": "Proposition",
  "number": "1.2.12",
  "title": "",
  "body": ">  Let be vectors in and let be a scalar in . The following four identities are true for all vectors and scalars.    "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "section-vector-operations.html#definition-13",
  "type": "Definition",
  "number": "1.2.13",
  "title": "",
  "body": "  Let and be two vectors in . The cross product of and is written and defined by the following formula.    "
},
{
  "id": "p-42",
  "level": "2",
  "url": "section-vector-operations.html#p-42",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar product vector product "
},
{
  "id": "p-44",
  "level": "2",
  "url": "section-vector-operations.html#p-44",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "anti-commutative "
},
{
  "id": "section-equations-planes",
  "level": "1",
  "url": "section-equations-planes.html",
  "type": "Section",
  "number": "1.3",
  "title": "Equations of Planes",
  "body": " Equations of Planes   Definition of a Locus  There are many ways to mathematically describe an geometric object. Cartesian geometry allows for perhaps the most powerful idea: the locus. I'll define this in , but the definition is general to any Euclidean space.    Consider an equation in the variables . The locus in of this equation is the set of vectors that satisfy the equation. The plural of a locus is loci .    In general, the equation can be of any sort. The unit circle in is most commonly defined as the locus of the equation . The graph of a single-variable function is the locus (also in ) of the equation . My goal in this section is equation of places, which are flat. Flat objects arise as loci of linear equations. Let me remind you of that definition.    Let , , and be real numbers. A linear equation in the variables is an equation of the following form.     The most familiar linear loci are lines. Very briefly, let me redefined a line in . (A line in needs a different definition; in this course, one way to describe lines is as parametric curves, as in .)    A line in is the locus of the equation for . The line goes through the origin if .      A plane in is the locus of the linear equation . The plane goes through the origin if .    Notes that the equation for a locus is not unique; many equations may describe the same locus. Since they are equations, I can change them by doing the same thing to both sides (hence preserving the equality). Consider the plane given by this equation. I can multiply both sides by and still describe the same plane. I could also multiply the original equation by any constant, say , and still describe the same plane. Finally, I must be careful multiplying by zero (or any expressing that might evaluate to zero). If I multiply both sides of the equation by zero, I get a trivial equation. The equation describes all points, not just the plane, so I have destroyed the locus. As with many other places in mathematics, multiplying or dividing by zero always needs to be the back of you mind as something to be careful about.    Dot Products and Loci  Loci are the solutions to one of more linear equations. These linear equation can be re-interpreted and expressed via via dot products. Consider, again, the linear equation in .   I can think of the variables as the components of a vector . Let me use to also label the vector of variables: . I can re-write the linear equation using these two vectors.   In this way, a linear equation specifies that the dot product result of a variable vector with a fixed vector must have the result . In this light, a plane in is given by the equation . This plane is precisely all vectors whose dot product with the vector produces the fixed number . If (i.e., if the plane goes through the origin), the equation become . A dot product of zero indicates that the two inputs to the dot product are perpendicular. Therefore, a plane through the origin is the set of all vectors which are perpendicular to a fixed vector . This leads to an important definition.    Let be a plane in determined by the equation . The vector is called the normal to the plane .    If , the plane or hyperplane is perpendicular to its normal. The remark thing is this: the notion of orthogonality of the normal still works when . In this case, the normal is a local perpendicular direction from any point on the plane. Treating any such point as a local origin, the normal points in a direction perpendicular to all the local direction vectors which lie on the plane. This is the key of understanding and describing planes in .    An Algorithm for Equations of Planes  Now I can build a general process for finding the equation of a plane in . Using the equations above, I need two pieces of information: the (local direction) normal and the constant .  I'm going to describe three ways of calcualting the equation of a plane in , each starting from different initial information. All three of these collections of data uniquely determine a plane.  A point and the normal.  A point and two local directions.  Three points.  I'll describe the algorithm for all three of these in order, since the calculations get longer in each step of this list.  In the first description, I am actually given the normal and some point on the plane, I only need to calculate . To do so, I just evaluate the left side of the equation of the plane: doing so is equal to the right side, which is just . Let me show some examples.    Say that I am given the normal and the point . What is the unique plane described by this data?  I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal. There is always some variability in how to write these equations. Since the variable is multiplied by zero, I can remove it. I can also multiply both sides by if I wanted to. This equation also describes the same plane.      Say that I am given the normal and the point . What is the unique plane described by this data?  I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal.       Say that I am given the normal and the point . What is the unique plane described by this data?  I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal. Again, there is variability in how to write the equation. If I wanted to clear denominators, I could multiply through by . This equation also describes the same plane.    If I am given a point on a plane and two local direction on the plane, then I need to construct the normal first. The normal is perpendicular to any local direction on the plane. This is where the cross product comes is: the cross product is a operation which takes two vectors and produces a third vector perpendicular to the first two. Therefore, the cross product of the two local directions is the normal. After I have the normal, I can proceed as before, using the equation and the point to calculate the constant . Let me do one example.    Say that I am given the point and the local directions and . What is the equation of the plane described by this data?  I take the cross product of the two local directions to ge the normal to the plane. Then I proceed as before. I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal. I could multiply through by to make everything positive, if I wanted. This equation also describes the same plane.    Finally, a plane can be determined by three points (as long as the three points do not all lie on the same line). If I am given three points ( , and ), then I can use as the local origin and construct the local direction vectors as and . Then I can proceed as in the previous step: the normal is the cross product of the two local direction, . Finally, I finish with the first step, using the normal and a point to find the constant . Note, with this data, I have three points to chose from for this final step. All three should work and produce the same constant. If they fail to do so, that means there is an error earlier in the work somewhere. I'll do an example to show all the steps.    What is the equation of the plane determined by the three points , and .  First I need to calculate the local direction. I'll set as my local origin. Then I calculate the differences of the two other points from this point. These are the two local direction. Then I proceed as with the previous case. I start by taking the cross product of the two local directions to ge the normal to the plane. Then I again proceed as before, going back to the very first case. I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . I use the first point, but I could use any of the three points. So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal. I could multiply through by to make everything positive, if I wanted. This equation also describes the same plane.     "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "section-equations-planes.html#definition-14",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Consider an equation in the variables . The locus in of this equation is the set of vectors that satisfy the equation. The plural of a locus is loci .   "
},
{
  "id": "definition-linear-equation",
  "level": "2",
  "url": "section-equations-planes.html#definition-linear-equation",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  Let , , and be real numbers. A linear equation in the variables is an equation of the following form.    "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "section-equations-planes.html#definition-16",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  A line in is the locus of the equation for . The line goes through the origin if .   "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "section-equations-planes.html#definition-17",
  "type": "Definition",
  "number": "1.3.4",
  "title": "",
  "body": "  A plane in is the locus of the linear equation . The plane goes through the origin if .   "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "section-equations-planes.html#definition-18",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": "  Let be a plane in determined by the equation . The vector is called the normal to the plane .   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-equations-planes.html#example-1",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Say that I am given the normal and the point . What is the unique plane described by this data?  I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal. There is always some variability in how to write these equations. Since the variable is multiplied by zero, I can remove it. I can also multiply both sides by if I wanted to. This equation also describes the same plane.   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-equations-planes.html#example-2",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "  Say that I am given the normal and the point . What is the unique plane described by this data?  I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal.    "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-equations-planes.html#example-3",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Say that I am given the normal and the point . What is the unique plane described by this data?  I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal. Again, there is variability in how to write the equation. If I wanted to clear denominators, I could multiply through by . This equation also describes the same plane.   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-equations-planes.html#example-4",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  Say that I am given the point and the local directions and . What is the equation of the plane described by this data?  I take the cross product of the two local directions to ge the normal to the plane. Then I proceed as before. I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal. I could multiply through by to make everything positive, if I wanted. This equation also describes the same plane.   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-equations-planes.html#example-5",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  What is the equation of the plane determined by the three points , and .  First I need to calculate the local direction. I'll set as my local origin. Then I calculate the differences of the two other points from this point. These are the two local direction. Then I proceed as with the previous case. I start by taking the cross product of the two local directions to ge the normal to the plane. Then I again proceed as before, going back to the very first case. I calculate the left side of the equation of the plane, which is the dot product of the point and the normal. This will result in the constant . I use the first point, but I could use any of the three points. So , which means I can write the equation of the plane. The coefficients of the variables are the coordinates of the normal. I could multiply through by to make everything positive, if I wanted. This equation also describes the same plane.   "
},
{
  "id": "week1-activity",
  "level": "1",
  "url": "week1-activity.html",
  "type": "Section",
  "number": "1.4",
  "title": "Week 1 Activity",
  "body": " Week 1 Activity   Vector Arithmetic    For the vectors and , calculate operations. Draw the first three.                      The angle between and .                          The angle between and . . Inverse cosine gives .   Here is the diagram of the first three calculations.   Vector Operatiors Activity 1           Equations of Planes and Hyperplanes    Write the equation of the plane with normal if is a point on the plane.    The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point. Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .      Write the equation of the plane with normal if is a point on the plane.    The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point. Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .      Write the equation of the plane with local directions and if is a point on the plane.    The cross product of the local directions gives the normal to the plane. This is the normal. The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point. Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .      Write the equation of the plane with local directions and if is a point on the plane.    The cross product of the local directions gives the normal to the plane. This is the normal. The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point. Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .      Write the equation of the plane with points , and .    The local directions are given by the differences of the point: and . I calculate those two local directions. These are the two local directions. The cross product of the local directions gives the normal to the plane. This is the normal. The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point (I can use any of the three points all will determine the same constant). Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .      Write the equation of the plane with points , and .    The local directions are given by the difference of the points: and . I calculate those two local directions. These are the two local directions. The cross product of the local directions gives the normal to the plane. This is the normal. The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point (I can use any of the three points all will determine the same constant). Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .      Conceptual Review Questions    How does vector arithmetic differ from number arithmetic?  What is a cross product and what does it mean?  What is a dot product and what does it mean?  What is a normal vector to a plane? Why are planes determined by normals?  Why do cross products help calculate normals to planes in three dimensions?     "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "week1-activity.html#activity-1",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "  For the vectors and , calculate operations. Draw the first three.                      The angle between and .                          The angle between and . . Inverse cosine gives .   Here is the diagram of the first three calculations.   Vector Operatiors Activity 1        "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "week1-activity.html#activity-2",
  "type": "Activity",
  "number": "1.4.2",
  "title": "",
  "body": "  Write the equation of the plane with normal if is a point on the plane.    The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point. Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .   "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "week1-activity.html#activity-3",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  Write the equation of the plane with normal if is a point on the plane.    The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point. Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .   "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "week1-activity.html#activity-4",
  "type": "Activity",
  "number": "1.4.4",
  "title": "",
  "body": "  Write the equation of the plane with local directions and if is a point on the plane.    The cross product of the local directions gives the normal to the plane. This is the normal. The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point. Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .   "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "week1-activity.html#activity-5",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "  Write the equation of the plane with local directions and if is a point on the plane.    The cross product of the local directions gives the normal to the plane. This is the normal. The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point. Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .   "
},
{
  "id": "activity-6",
  "level": "2",
  "url": "week1-activity.html#activity-6",
  "type": "Activity",
  "number": "1.4.6",
  "title": "",
  "body": "  Write the equation of the plane with points , and .    The local directions are given by the differences of the point: and . I calculate those two local directions. These are the two local directions. The cross product of the local directions gives the normal to the plane. This is the normal. The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point (I can use any of the three points all will determine the same constant). Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .   "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "week1-activity.html#activity-7",
  "type": "Activity",
  "number": "1.4.7",
  "title": "",
  "body": "  Write the equation of the plane with points , and .    The local directions are given by the difference of the points: and . I calculate those two local directions. These are the two local directions. The cross product of the local directions gives the normal to the plane. This is the normal. The normal determines the coefficients of the equation of the plane. I put those coefficients into the general form, with the constant undetermined. I can calculate the constant using the point (I can use any of the three points all will determine the same constant). Put the coordinates of the point into the left side of the equation and calculate . Therefore, the equation of the plane is .   "
},
{
  "id": "section-parametric-curves",
  "level": "1",
  "url": "section-parametric-curves.html",
  "type": "Section",
  "number": "2.1",
  "title": "Parametric Curves",
  "body": " Parametric Curves   Definition of Parametric Cuves  The major goal of this course is the extension of calculus to multivariable function. A parametric curve is a function with multiple outputs; these outputs are coordinates of position in some euclidean space depending on time; as such, parametric curves are used to talk about motion through space. The calculus of parametric curves is a way to understand the physics of such motion, covering both linear and angular velocity and acceleration in a nice, holistic approach. When considering parametric curves, I like to imagine the movement of point-like objects through space under the influence of various forces. Projectiles with gravity and air friction is one imporant example; flying objects such as insect, bird or helicopter is a seond; the motions of planets, moons and satellite under gravity is a third.    Parametric Curves    A parametric curve in is a continuous function , that is, a continuous vector-valued function defined on an interval. As is convention, I will typically use the symbol for an arbitrary parametric curve.    I can identify a parametric curve with its image: that is, I think of a curve as a decription of the set of points in which are the output of the curve. In this interpretation, the curve describes motion along this set of points: it starts at the point and moves along the curve, ending at when it reaches the end of its domain.  The continuity condition is important, since a parametric curve is a connected path. I could define a function which jumps around, but it wouldn't really fit the notion of a curve it would not describe reasonable motion through space.  For visualizing parametric curves, it is conventional to graph only the output or image of the curve. There is never a axis in any of these graphs; instead, the variable is the parameter of movement along the curve. Let me start with some basic examples.     The curve      The curve , for traces out a circle, as in . This is an important example: many of the other curves I will use in this course are adaptation of the circle.  Notice that I defined this curve on the domain . If I extend this domain, the curve just starts to retrace over the circle. It's good to observe that parametric curves can self-intersect and trace over themselves many times. This is a very different situation from, say, graphs of functions which cannot self-intersect.       The curve      The curve on the domain traces part of the graph of , as in .   Notice that this parametric curve is the graph of a function, specifically the function between and . Parametric curves where one of the form just trace the graph of the function over some parts of it domain.      The curve      The form of this curve is similar to the circle, but the first component has a , which doubles the period of the cosine function. The curve on the domain oscillates faster in the direction than in the direction, as in . So, instead of a circle, I get a different kind of rotational movement, where the coordinate oscillates faster than the coordinate.       The logarithmic spiral      A spiral in is a parametric curve of the form where is a monotonic continuous function. It is based on the circle, but instead of having a constant radius, the radius is either increasing or decreasing as the curve traces around the circle. The curve is a logarithmic spiral, as in . For the logarithmic spiral, the parameter be any real number: the spiral will spin inwards and outwards without end.       The archimedian spiral      The curve is the archimedian spiral, as in . For this spiral, I assume the domain ; the shape starts at the origin and spins outward.       The curve on is a spiral in .      In three dimensions, in addition to spiraling outward or inward, a curve can spiral upward or downward. The curve , for , is a conical spiral extending infinitely upward. The curve on is a spiral in , as in .      Varied Parametrizations   The graph of a parabola as a parametric curve      A parametric curve is not just its shape: it is also the rate of movement along that shape. Therefore, given a fixed shape of a curve, there are many (infinitely many!) parametric curves that trace the same shape. I can say that the same curve has many parametrizations .    Consider the following curves.   All four of these have exactly the same parabolic image. They all describe the same curve, shown in .      Reparametrization  Since the same shape can have many different parametrizations, I want a process to switch between them. This process is called reparametrization. I'll state the definition in , but dropping the third coordinate will give the same idea in and, of course, there a generalization to .    Let be a parametric curve with coordinates . A reparametrization of is the replacement of the variable by a new variable . The two variables are related by a monotonic increasing function expressing the parameter in terms of a new parameter . I replace by the function to give a parametric curve in terms of : .      The unit circle in is parametrized by . If then is a reparametrization of the same circle. The first parametrization finishes a revolution in , but multiplication by in the second parametrization means that a full revolution is completed in  that is, the second parametrization moves along the circle three times as fast.  Many reparametrizations of the circle are possible.   Even though the shape of the curve is the same, the parametrization affects the rate movement along the curve.    Coming to grips with the fact that the same shape can have multiple parametrizations is a major part of the conceptual challenge of parametric curves. When I calculate, I need to be conscious of the varied parametrizations. If I calculate the length of the shape, I want that length to be the same, regardless of how fast the movement is along the curve. Therefore, the length calculation should be independent of the parametrization. However, if I want to no details about the local movement (speed, acceleration, change in directions), then these calculations should depened on the parametrization. Different parametrizations will move along the curve at different rates, and therefore have different speeds, accelerations, etc. The next two sections work out all this calculus of parametric curves, and everything in those two sections will be careful with the variability of the parametrization.   "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "section-parametric-curves.html#definition-19",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A parametric curve in is a continuous function , that is, a continuous vector-valued function defined on an interval. As is convention, I will typically use the symbol for an arbitrary parametric curve.   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-parametric-curves.html#example-6",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "   The curve      The curve , for traces out a circle, as in . This is an important example: many of the other curves I will use in this course are adaptation of the circle.  Notice that I defined this curve on the domain . If I extend this domain, the curve just starts to retrace over the circle. It's good to observe that parametric curves can self-intersect and trace over themselves many times. This is a very different situation from, say, graphs of functions which cannot self-intersect.   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-parametric-curves.html#example-7",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "   The curve      The curve on the domain traces part of the graph of , as in .   Notice that this parametric curve is the graph of a function, specifically the function between and . Parametric curves where one of the form just trace the graph of the function over some parts of it domain.  "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-parametric-curves.html#example-8",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "   The curve      The form of this curve is similar to the circle, but the first component has a , which doubles the period of the cosine function. The curve on the domain oscillates faster in the direction than in the direction, as in . So, instead of a circle, I get a different kind of rotational movement, where the coordinate oscillates faster than the coordinate.   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-parametric-curves.html#example-9",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": "   The logarithmic spiral      A spiral in is a parametric curve of the form where is a monotonic continuous function. It is based on the circle, but instead of having a constant radius, the radius is either increasing or decreasing as the curve traces around the circle. The curve is a logarithmic spiral, as in . For the logarithmic spiral, the parameter be any real number: the spiral will spin inwards and outwards without end.   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-parametric-curves.html#example-10",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "   The archimedian spiral      The curve is the archimedian spiral, as in . For this spiral, I assume the domain ; the shape starts at the origin and spins outward.   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-parametric-curves.html#example-11",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": "   The curve on is a spiral in .      In three dimensions, in addition to spiraling outward or inward, a curve can spiral upward or downward. The curve , for , is a conical spiral extending infinitely upward. The curve on is a spiral in , as in .   "
},
{
  "id": "figure-parametric-parabola",
  "level": "2",
  "url": "section-parametric-curves.html#figure-parametric-parabola",
  "type": "Figure",
  "number": "2.1.14",
  "title": "",
  "body": " The graph of a parabola as a parametric curve     "
},
{
  "id": "p-106",
  "level": "2",
  "url": "section-parametric-curves.html#p-106",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametrizations "
},
{
  "id": "example-four-parametrizations",
  "level": "2",
  "url": "section-parametric-curves.html#example-four-parametrizations",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": "  Consider the following curves.   All four of these have exactly the same parabolic image. They all describe the same curve, shown in .   "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "section-parametric-curves.html#definition-20",
  "type": "Definition",
  "number": "2.1.16",
  "title": "",
  "body": "  Let be a parametric curve with coordinates . A reparametrization of is the replacement of the variable by a new variable . The two variables are related by a monotonic increasing function expressing the parameter in terms of a new parameter . I replace by the function to give a parametric curve in terms of : .   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-parametric-curves.html#example-13",
  "type": "Example",
  "number": "2.1.17",
  "title": "",
  "body": "  The unit circle in is parametrized by . If then is a reparametrization of the same circle. The first parametrization finishes a revolution in , but multiplication by in the second parametrization means that a full revolution is completed in  that is, the second parametrization moves along the circle three times as fast.  Many reparametrizations of the circle are possible.   Even though the shape of the curve is the same, the parametrization affects the rate movement along the curve.   "
},
{
  "id": "section-calculus-of-parametric-curves",
  "level": "1",
  "url": "section-calculus-of-parametric-curves.html",
  "type": "Section",
  "number": "2.2",
  "title": "Calculus of Parametric Curves",
  "body": " Calculus of Parametric Curves   Tangents  Parametric curves are functions, but functions with several variables of output. What can calculus say about this kind of function? How can I use the tool of single variable calculus to analyze the movement of parametric curve? Since there is still only a single input, I can actually apply the tools of single-variable calculus quite directly by taking the ordinary, single variable derivative of each component of the parametric curve. This leads to the first key definition (stated in as usual, but can be generalized).    Let be a parametric curve. I can write in it components. The derivative of the parametric curve, , is calculated by taking the ordinary single-variable derivative of each component. This derivative, , produced a vector for each value of . This vector is called the tangent vector to the parametric curve.    This tangent is no longer the slope of a tangent line from single-variable claculus. It is a vector; specifically, local direction vector along the curve. At , points in the local direction of movement. The notion of a derivative as a tangent direction replaces old notion of the derivative as the slope of the tangent line.     A tangent vector to the logarithmic spiral      Consider the logarithmic spiral on the domain . I calculate its derivative.   Evaluating at at the point of the curve , the derivative or tangent vector to the curve is .  This spiral is moving outwards; I can see how the tangent vector points in the direction of movement as the curves goes through . Figure shows how I treat the tangent as a local direction vector: it points from , not from the origin.       Length of tangent vectors depending on parametrization      (REWRITE) tangents to the point .   All of these tangent vectors are multiples of the vector , but they have different lengths, as seen in .    The tangent vector indicates the instantaneous direction of motion. The tangent vector also has a length, independent of the direction. The length of the tangent vector measures the speed of the curve going through that point. If the movement along the curve is very fast, the tangent vector will have a large length; if the movement along the curve is slow, the tangent vector will be shorter.  For the parametrizations of the graph of the parabola in , I can see this behaviour clearly: the direction of the tangent is independent of the parametrization, but the length of the tangent is entirely dependent on the parametrization. The parametrizations which move more quickly along the curve have longer tangents.  Often it is useful to only consider the tangent direction.    If is the tangent vector of a parametric curve, the unit tangent vector is the unique vector of length one in the same direction as . It is often written . To calculate the unit tangent, I simply take the tangent vector and divide by its length.       In the various parametrizations of the graph of the parabola, the tangent direction was , so the unit tangent is .      As introducted in , the archimedian spiral is . The tangent vector is k . When (at the point , the tangent vector is The length of this vector is Therefore the unit tangent at this point is       Arc Length   Arclength setup by approximation      My goal in this section is to produce a formula describing the length of a parametric curve. I approximate this length by breaking up a curve into a series of straight lines. In order to visualize the process, I work in for the moment, as in .  For each straight line segment, the length of the segment is given by using pythagorus on the triange formed by the segment and the changes in each variable. I know and , then the length of the segment is . I approximate the total length of the curve by adding up the lengths of these segments.   In a parametric curve, everything changes in time. I can adjust this approximation by considering that and change over time. If is the change in time over one of these segments, then by multiplying and dividing by , and taking the division into the square root, I get the following expression.   If I take the limit of this process, breaking the curve into smaller and smaller pieces, I produce a Riemann sum which defines a definite integral. In the limit, the terms become the infinitesimals , and .   The same arguments work in any , leading to the general result. However, as has been my practice, I'll state the general result in .    Let be a parametric curve. I'll explicitly write the components of the curve as . Then the length of the parametric curve is calculated by this integral.       In , consider the three-dimensional spiral . On the domain , the spiral makes four revolutions. I calculate its arclength.       The asteroid is the parametric curve for , shown in Figure . I want to calculate its arclength.   The Asteroid       The absolute value here causes trouble. A convenient way to drop it is to notice that both and are positive on . That range covers a quarter of the asteroid and the asteroid is symmetric, so I can calculate the length of that quarter and multiply by 4.     The symmetric argument in deserves some attention. In parametric curves, this kind of symmetry argument can be very valuable. It's often easier to work with a small section of a curve, particularly for integration. If I can argue that the whole curve is just a repetition of a small portion (perhaps reflected or rotated), then I can reasonable use the small portion to calculate information about the whole curve.    Parametrization by Arclength  The arclength calculation determins the length of the whole curve. However, I can also ask for the length of sections of the curve. I'll state the definition in .    Let be a parametric curve with components . The arclength function  is defined by this integral.   The letter is conventional notation for the arclength function.    The arclength function measures the length of the curve as a function of the parameter; it is simply the distance travelled along the curve. For example, if , then is the distance along the curve from to , is the distance the curve has covered from to , is the distance along the curve from to and so on. Since depends on outside the integral, I have to choose a temporary variable inside the integral; in the integral, is simply repalced with .  I want to use the arclength function to reparametrize curve. The process, therefore, has three steps.   I calculate the arclength fuction by integration.    I invert the arclength function. Arclength is always an increasing function, so it is always invertible. I write the inverse as .    I use the inverse of the arclength function to reparametrize by replacing with .       Let be a parametric curve. Let be the arclength function, with its inverse. The reparametrization is called the parametrization by arclength . It is the unique parametrization where the parameter is the distance along the curve.      Consider the helix defined for , shown in .   The helix  .     I calculate the arclength function.   The arclength function is ; the inverse is . I replace with in .          I'll calculate the speed in this parametrization by arclength. :   I find that the speed is constantly one.    The process of parametrization by arclenth is a lot of work. What is the point? THe point is that the parametrization by arclength has several very pleasant properties, properties which will be useful in later constructions.    Let be a parametric curve. Of all the possible reparametrizations of , the parametrization by arclength has three unique properties.   It is the unique parametrization with constant speed of 1.    It is the unique parametrization where all tangent vectors have length 1.    It is the unique parametrization where the parameter measures distance along the curve.       These properties are very useful and convenient. In the remainder of this chapter, I will make frequent use of the parametrization by arclength; it serves as the default parametrization. I can do this since the parametrization by arclength always exists and is unique. Having a special, default parameter allows me to make good definitions which will be independent of the choice of parametrization. (In practice, the parametrization by arclength can be extremely difficult to actually calculate. For theoretical results, however, this difficulty isn't relevant).  The existence of multiple parametrization for parametric curves is an example of a very general trend in abstract mathematics. A mathematical structure is some kind of pattern or behaviour (such as a curve being a particular path through space). This pattern can be presented in a variety of ways (such as a variety of parametrizations). This always presents a fundamental difficulty: if you want to understand something about the general pattern -- about the mathematical structure in itself -- you need to make sure that your observations transcend the particularities of the presentation. Sometimes, there is a special presentation (such as the parametrization by arclength) which serves as the ideal model of the structure. Where there is such a presentation, mathematicians make heavy use of it. Where no such presentation exists (which is usually the case), mathematicians always have to struggle with the tension between pattern itself and how the pattern is presented.    Arclength and Tangents  There are some very natural connections between tangents and arclength which relate to the intepretation of parametric curves as movement through space. I'll return to the arc length formula (in , for simplicity).   The tangent vector is , so this integrand in the arclength formula is nothing more than the length of the tangent vector. This lets me rewrite the arclength formula.   This hopefully makes intuitive sense the length of the tangent vector measures the speed of the curve. To get length (the distance travelled), I integrate the speed of movement.  An nice event occurs when I differentiate the arclength function . The fundamental theorem of calculus lets me differentiate an integral.   The derivative of the arclength function is the length of the tangent vector, which represents the speed of movement along the curve. To get speed, I differentiate length.  Both of these observations generalize the relationship between distance and speed from single variable calculus. In that setting, the relationship was relatively direct: if was distance, then was speed and if was speed then was distance. The idea here is exactly the same, but since the movement is much more complicated, going through multi-dimensional space, I need more complicated definitions and notations to access the idea.    Curvature  The tangent vector for a parametric curve measures the speed and direction of movement along the curve. Speed and direction are good information, but not enough to completely describe motion in multiple dimensions. In particular, the tangent vector gives the direction but doesn't say how direction is changing. This section builds up the notions of curvature and torsion, which will complete a full description of the changing directions of movement. In this section, I exclusively work in .  In , I want to classify three types of movement.   Straight motion: the direction is fixed and only speed varies.    Curving motion in a plane: motion is fixed to a plane, but the direction can change and curve in the plane.    Twisting motion: the most general motion, where in addition to curving in a plane, a curve can also twist away from the plane.     Throughout this section, let be a curve in three dimensions. To start with (and to ensure that the following definition does not depend on parametrization), I will assume the curve is parametrized by arc length: I will use the parameter and write . In this parametrization, the tangent is a unit vector, so .    Let be a parametric curve parametrized by arclength. The curvature of is a scalar which measure how quickly the curve is turning.     There are a couple things to note about this definition. First, is the greek letter kappa, even though it looks like the Englith k . Second, is a vector, so the derivative is a vector derivative the derivative is taken in each component of the vector. Curvature is the scalar length of the resulting vector. Finally, the unit tangent is the direction of motion. Therefore, the derivative of the unit tangent measure the change in direction. The length of this derivative is a scalar measure of how quickly direction is changing. (Note that thought , there is no reason to expect that ; the magnitude of the change in a unit vector can be any possible magnitude.)  The given definition of curvatuve only works for parametrization by arclength. I would like to calculate in terms of an arbitrary parameter , since arclength can be difficult to work with.    Let be a parametric curve with an arbitrary parametrization. The curvature can be calculated in this arbitrary parametrization.      Recall the arclength function . I can write an arbitrary parametrization , where is the specific arclength function for the parametrization. This composition also applies to the unit tangent: . Then to differentiate in requires a chain rule.   I can rearrange this equation and then take the lengths of the vectors.   The left hand side of this expression is exactly , the curvature. The numerator on the right hand side can be written , the change in the unit tangent for an arbitrary parametrization. The denominator is just the length of the tangent vector .     Consider the curve in : for some constants . This curve is the straight line through in the direction . I will calculate the curvature of this curve. I work in steps, calculating the various pieces in order.   Unsurprisingly, the straight line has zero curvature.      Consider the unit circle in : .   Again unsurprisingly, the unit circle has constant curvature of one; I would expect uniform curvate for a circle. This also give a reference for the scale of curvature: curvature of one is exactly the curvature of the unit circle.      A similar calcluation can be done for the circle of radius , which is . If I repeat all the steps for the unit circle, I can conclude that . Again, this is constant, which makes sense since the circle is equally curved at all points. However, it's interesting to note that the curvature is inversely proportional to the radius. A curvature value of is interpreted as the curvature of a circle of radius .  This hopefully makes sense a circle with a very large radius doesn't locally have to curve very much. I know this very well, living on the surface of the earth: since the radius of the earth is large, I don't really see the curvature of its surface. However, for circle with very small radius, there is less distance to cover a whole revolution, so the curvature must be larger.      Normals  To complete the description of motion in , I need to define the normal and binormal vectors. I apologizes, on behalf of mathematicians everywhere, for the use of the word normal in this definition (and, franktly, everywhere else it's used in mathematics.) Unfortunately, it's standard and we are stuck with it.    Let be a parametric curve in an arbitrary parametrization. The normal vector to a curve is written and defined by the formula .  The binormal vector to a curve is written and defined by the formula .    The following lemma helps to understand the direction of (and will be useful later in the course as well).    Let be a differentiable parametric curve such that for all in the domain of the curve. (That is, is always a unit vector.) Then is perpendicular to its derivative.      There are several ways to argue this result. First, I can think about the geometry of the sphere and its tangents (though, I confess, this argument uses some ideas from future weeks in the course.) Since is always a unit vector, the path of is a path on the unit sphere in . The tangent direction of this path, therefore, must be a tangent to the unit sphere. Unit vector point directly out of the unit sphere; they are perpendicular to tangent vectors of the unit sphere. Therefore, and must be perpendicular vectors.  Alternatively, I could argue more directly from the definition of a unit vector. If is a unit vector, its length can never change -- the length is fixed at one. If share any small direction with (more formally, if the projection was non-zero), then there would be a portion of the tangent vector pointing in the direction of . This would indicate that there is change in the direction of the vector. Such a change would necessarily change the length of the vector; increasing it is the growth is aligned with the vector, and decreasing it is the growth is against the vector. Therefore, and cannot share any such small direction. The projection of the latter onto the former must be zero, which is equivalent to them being perpendicular.    Lemma shows that is perpendicular to . The cross product of two vectors is perpedicular to both, to all of , and are perpendicular to each other. In addition, was already a unit vector and was defined explicitly as a unit vector. The cross product of two perpendicular unit vectors is also a unit vectors, so all three are unit vectors. An example of the arrangement of the three vrectors is show in .   The tangent, normal and binormal to a helix in       I want to complete these definitions with interpretation. I've already spent some time on the unit tangent vector . It represents the direction of movement of the curve at that point. The associated scalar is speed, measuring how fast the object is moving at this point in the curve. The normal vector represents the direction of curvature. Curvature was a scalar, measuring how curved the curve is at this point. The normal vector adds to this scalar a direction, telling you which way the curve is turning. The two vectors and determine a plane.    The plane determined by and is called the osculating plane .    If a parametric curve isn't twisted, the osculating plane is the plane on which the curve travels. The binormal vector is perpendicular to the osculating plane. Since planes are best described by their normals, I use to keep track of the osculating plane.    Torsion  The third type of movement I want to describe is twisting movement, where a curve can twist away from its plane of movement. Since the osculating plane is determined by its normal , twisting motion involves the change in .    Let be a parametric curve parametrized by arclength. Its torsion is written and defined by the formula .    Torsion is a scalar that measures the change in , the change in the normal of the osculating plane. It measures the rate of twisting, the tendency of curving paths to change their plane of motion.  As with curvature, I want to calculate torsion in an arbitrary parametrization.    Let be a parametric curve in an arbitrary parametrization. Then its torsion is calculabed by the formula .     As in the proof for torsion, I can setup an arbitrary parametrization using the arclength function . Then I can write for the binormal in the arbitrary parametrization. The chain rule calculates the derivative of the binormal vector.   I can rearrange this expression.   Omiting the proof here, it is true that points in the direction of the negative of the normal, . To get the torsion, which is the length of the vector in the previous formula, I can take the dot product with the unit vector in this direction, which is simply .   Now every curve has three associated scalars (speed, curvature, torsion) and three matching vectors (tangent, normal and binormal). Together, this information completely describes motion in . For convenience, the next list collects the definitions of all six of these mathematical objects.     Let and be two positive scalars. Consider the helix . In the helix, is the radius of the circular movement of the helix, and is the rate of linear movement along the axis of the helix. I'll calculate all the information about the motion along the helix: the speed ( ), curvature ( ), torsion ( ),the tangent, the normal and finally the binormal.   Look at the three scalars.   All three, speed, curvature and torsion, are constant here. This helix has constant motion, curvature and torsion    Following the observation at the end of the previous example, I can summarize what kind of shapes of curves exist for constant and zero values of the three scalars describing the motion of parametric curves.              no movement at all              straight line, no curving or twisting              circle, constant speed and curvature, no twisting              helix, constantly moving, curving and twisting    Like the straight line and the circle, the helix is the unique curve which has constant non-zero speed, torsion and curvature.    Acceleration and Movement in Space  Now that I understand how parametric curves describe motion in , I can do a little physics. This section tries to undertstand what acceleration means in the language of parametric curves. The starting point is simple: acceleration should be the second derivative of the curve.   This means acceleration is a vector. I will try to work out its direction and magnitude, using , and as reference for directions. Recall the definition of the unit tangent.   I solve for .   I differentiate this, using the product rule.   Recall the definition of the normal.   I isolate .   Finally, recall the definition of curvature.   I use this expression to replace in Equation .   Finally, I put this expression for into the second term of Equation , then group and label the terms.     Let be a parametric curve. Its linear acceleration is the vector and its angular acceleration is the vector . Linear acceleration described how quickly the speed changes. Angular acceleration describes how quickly the direction changes.      For the helix, is constant, so the acceleration is entirely angular.   This makes sense, since the linear speed doesn't every change; only the direction changes as the helix curves and twists.    You might wonder why this little bit of physics didn't include torsion. There is one derivative to get to the tangent and a second derivative to get to the normal and the binormal. To calculate torsion requires the derivative of the binormal: this is three derivatives away from the original curve. Torsion only shows up as a third derivative. The above discussion of acceleration only used second derivatives; indeed, acceleration can only describe motion in a plane. To get torsion and motion that diverges from its osculating plan requires a third derivative.   "
},
{
  "id": "definition-pc-tangent",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-pc-tangent",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let be a parametric curve. I can write in it components. The derivative of the parametric curve, , is calculated by taking the ordinary single-variable derivative of each component. This derivative, , produced a vector for each value of . This vector is called the tangent vector to the parametric curve.   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-14",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "   A tangent vector to the logarithmic spiral      Consider the logarithmic spiral on the domain . I calculate its derivative.   Evaluating at at the point of the curve , the derivative or tangent vector to the curve is .  This spiral is moving outwards; I can see how the tangent vector points in the direction of movement as the curves goes through . Figure shows how I treat the tangent as a local direction vector: it points from , not from the origin.   "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-15",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "   Length of tangent vectors depending on parametrization      (REWRITE) tangents to the point .   All of these tangent vectors are multiples of the vector , but they have different lengths, as seen in .   "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-22",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": "  If is the tangent vector of a parametric curve, the unit tangent vector is the unique vector of length one in the same direction as . It is often written . To calculate the unit tangent, I simply take the tangent vector and divide by its length.    "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-16",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  In the various parametrizations of the graph of the parabola, the tangent direction was , so the unit tangent is .   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-17",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": "  As introducted in , the archimedian spiral is . The tangent vector is k . When (at the point , the tangent vector is The length of this vector is Therefore the unit tangent at this point is    "
},
{
  "id": "figure-arclength-approximation",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#figure-arclength-approximation",
  "type": "Figure",
  "number": "2.2.9",
  "title": "",
  "body": " Arclength setup by approximation     "
},
{
  "id": "proposition-3",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#proposition-3",
  "type": "Proposition",
  "number": "2.2.10",
  "title": "",
  "body": "  Let be a parametric curve. I'll explicitly write the components of the curve as . Then the length of the parametric curve is calculated by this integral.    "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-18",
  "type": "Example",
  "number": "2.2.11",
  "title": "",
  "body": "  In , consider the three-dimensional spiral . On the domain , the spiral makes four revolutions. I calculate its arclength.    "
},
{
  "id": "example-asteroid",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-asteroid",
  "type": "Example",
  "number": "2.2.12",
  "title": "",
  "body": "  The asteroid is the parametric curve for , shown in Figure . I want to calculate its arclength.   The Asteroid       The absolute value here causes trouble. A convenient way to drop it is to notice that both and are positive on . That range covers a quarter of the asteroid and the asteroid is symmetric, so I can calculate the length of that quarter and multiply by 4.    "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-23",
  "type": "Definition",
  "number": "2.2.14",
  "title": "",
  "body": "  Let be a parametric curve with components . The arclength function  is defined by this integral.   The letter is conventional notation for the arclength function.   "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-24",
  "type": "Definition",
  "number": "2.2.15",
  "title": "",
  "body": "  Let be a parametric curve. Let be the arclength function, with its inverse. The reparametrization is called the parametrization by arclength . It is the unique parametrization where the parameter is the distance along the curve.   "
},
{
  "id": "example-helix-reparametrized",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-helix-reparametrized",
  "type": "Example",
  "number": "2.2.16",
  "title": "",
  "body": "  Consider the helix defined for , shown in .   The helix  .     I calculate the arclength function.   The arclength function is ; the inverse is . I replace with in .    "
},
{
  "id": "example-21",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-21",
  "type": "Example",
  "number": "2.2.18",
  "title": "",
  "body": "     I'll calculate the speed in this parametrization by arclength. :   I find that the speed is constantly one.   "
},
{
  "id": "proposition-4",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#proposition-4",
  "type": "Proposition",
  "number": "2.2.19",
  "title": "",
  "body": "  Let be a parametric curve. Of all the possible reparametrizations of , the parametrization by arclength has three unique properties.   It is the unique parametrization with constant speed of 1.    It is the unique parametrization where all tangent vectors have length 1.    It is the unique parametrization where the parameter measures distance along the curve.      "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-25",
  "type": "Definition",
  "number": "2.2.20",
  "title": "",
  "body": "  Let be a parametric curve parametrized by arclength. The curvature of is a scalar which measure how quickly the curve is turning.    "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#proposition-5",
  "type": "Proposition",
  "number": "2.2.21",
  "title": "",
  "body": "  Let be a parametric curve with an arbitrary parametrization. The curvature can be calculated in this arbitrary parametrization.    "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#proof-1",
  "type": "Proof",
  "number": "2.2.5.1",
  "title": "",
  "body": " Recall the arclength function . I can write an arbitrary parametrization , where is the specific arclength function for the parametrization. This composition also applies to the unit tangent: . Then to differentiate in requires a chain rule.   I can rearrange this equation and then take the lengths of the vectors.   The left hand side of this expression is exactly , the curvature. The numerator on the right hand side can be written , the change in the unit tangent for an arbitrary parametrization. The denominator is just the length of the tangent vector .  "
},
{
  "id": "example-22",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-22",
  "type": "Example",
  "number": "2.2.22",
  "title": "",
  "body": "  Consider the curve in : for some constants . This curve is the straight line through in the direction . I will calculate the curvature of this curve. I work in steps, calculating the various pieces in order.   Unsurprisingly, the straight line has zero curvature.   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-23",
  "type": "Example",
  "number": "2.2.23",
  "title": "",
  "body": "  Consider the unit circle in : .   Again unsurprisingly, the unit circle has constant curvature of one; I would expect uniform curvate for a circle. This also give a reference for the scale of curvature: curvature of one is exactly the curvature of the unit circle.   "
},
{
  "id": "example-24",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-24",
  "type": "Example",
  "number": "2.2.24",
  "title": "",
  "body": "  A similar calcluation can be done for the circle of radius , which is . If I repeat all the steps for the unit circle, I can conclude that . Again, this is constant, which makes sense since the circle is equally curved at all points. However, it's interesting to note that the curvature is inversely proportional to the radius. A curvature value of is interpreted as the curvature of a circle of radius .  This hopefully makes sense a circle with a very large radius doesn't locally have to curve very much. I know this very well, living on the surface of the earth: since the radius of the earth is large, I don't really see the curvature of its surface. However, for circle with very small radius, there is less distance to cover a whole revolution, so the curvature must be larger.   "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-26",
  "type": "Definition",
  "number": "2.2.25",
  "title": "",
  "body": "  Let be a parametric curve in an arbitrary parametrization. The normal vector to a curve is written and defined by the formula .  The binormal vector to a curve is written and defined by the formula .   "
},
{
  "id": "lemma-unit-vector-derivative",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#lemma-unit-vector-derivative",
  "type": "Lemma",
  "number": "2.2.26",
  "title": "",
  "body": "  Let be a differentiable parametric curve such that for all in the domain of the curve. (That is, is always a unit vector.) Then is perpendicular to its derivative.    "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#proof-2",
  "type": "Proof",
  "number": "2.2.6.1",
  "title": "",
  "body": " There are several ways to argue this result. First, I can think about the geometry of the sphere and its tangents (though, I confess, this argument uses some ideas from future weeks in the course.) Since is always a unit vector, the path of is a path on the unit sphere in . The tangent direction of this path, therefore, must be a tangent to the unit sphere. Unit vector point directly out of the unit sphere; they are perpendicular to tangent vectors of the unit sphere. Therefore, and must be perpendicular vectors.  Alternatively, I could argue more directly from the definition of a unit vector. If is a unit vector, its length can never change -- the length is fixed at one. If share any small direction with (more formally, if the projection was non-zero), then there would be a portion of the tangent vector pointing in the direction of . This would indicate that there is change in the direction of the vector. Such a change would necessarily change the length of the vector; increasing it is the growth is aligned with the vector, and decreasing it is the growth is against the vector. Therefore, and cannot share any such small direction. The projection of the latter onto the former must be zero, which is equivalent to them being perpendicular.  "
},
{
  "id": "figure-three-unit-vectors",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#figure-three-unit-vectors",
  "type": "Figure",
  "number": "2.2.27",
  "title": "",
  "body": " The tangent, normal and binormal to a helix in      "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-27",
  "type": "Definition",
  "number": "2.2.28",
  "title": "",
  "body": "  The plane determined by and is called the osculating plane .   "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-28",
  "type": "Definition",
  "number": "2.2.29",
  "title": "",
  "body": "  Let be a parametric curve parametrized by arclength. Its torsion is written and defined by the formula .   "
},
{
  "id": "proposition-6",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#proposition-6",
  "type": "Proposition",
  "number": "2.2.30",
  "title": "",
  "body": "  Let be a parametric curve in an arbitrary parametrization. Then its torsion is calculabed by the formula .   "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#proof-3",
  "type": "Proof",
  "number": "2.2.7.1",
  "title": "",
  "body": " As in the proof for torsion, I can setup an arbitrary parametrization using the arclength function . Then I can write for the binormal in the arbitrary parametrization. The chain rule calculates the derivative of the binormal vector.   I can rearrange this expression.   Omiting the proof here, it is true that points in the direction of the negative of the normal, . To get the torsion, which is the length of the vector in the previous formula, I can take the dot product with the unit vector in this direction, which is simply .  "
},
{
  "id": "example-25",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-25",
  "type": "Example",
  "number": "2.2.31",
  "title": "",
  "body": "  Let and be two positive scalars. Consider the helix . In the helix, is the radius of the circular movement of the helix, and is the rate of linear movement along the axis of the helix. I'll calculate all the information about the motion along the helix: the speed ( ), curvature ( ), torsion ( ),the tangent, the normal and finally the binormal.   Look at the three scalars.   All three, speed, curvature and torsion, are constant here. This helix has constant motion, curvature and torsion   "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#definition-29",
  "type": "Definition",
  "number": "2.2.32",
  "title": "",
  "body": "  Let be a parametric curve. Its linear acceleration is the vector and its angular acceleration is the vector . Linear acceleration described how quickly the speed changes. Angular acceleration describes how quickly the direction changes.   "
},
{
  "id": "example-26",
  "level": "2",
  "url": "section-calculus-of-parametric-curves.html#example-26",
  "type": "Example",
  "number": "2.2.33",
  "title": "",
  "body": "  For the helix, is constant, so the acceleration is entirely angular.   This makes sense, since the linear speed doesn't every change; only the direction changes as the helix curves and twists.   "
},
{
  "id": "week2-activity",
  "level": "1",
  "url": "week2-activity.html",
  "type": "Section",
  "number": "2.3",
  "title": "Week 2 Activity",
  "body": " Week 2 Activity   Examples Parametric Curves    Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     The coordinate is always positive, starting at , dropping back down to and then rising up to again. The coordinates starts at and increases to . Since the two coordinates have different exponents, I expect a non-linear shape following the trends I just described. This parametric curve is shown in               Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     Both coordinates are period functions, so I expect a shape that loops around and return to its starting point. The coordinate has a larger amplitude, but both have the same period, so I expect this to be stretch out in the direction. Possible an ellipse. This parametric curve is shown in               Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     This is hard to immediately guess the shape. Both coordinates are bounded and periodic, so I do expect a shape that loops around in some way and return to the origin. However, since we have sums of trig functions with different amplitues and periods, I expect a slightly complicated kind of looping. Possible like a sinusoidal oscilaton along a circle, but maybe with self-intersections as well. This parametric curve is shown in               Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     The coordinates is just the parameter , so I can think of this as a graph of the other coordinate (with the axes reverse, since here will be a function of . The coordinate is a quadratic, so I expect a sideways parabola. This parametric curve is shown in               Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     This is a typical setup for a spiral, with sine and cosine terms of the same period but an amplitude which changes with the parameter. Here, the amplitude is decreasing, so I expect an curve spiraling inward. This parametric curve is shown in               Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     I expect a curved path out from the origin to . This parametric curve is shown in               Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     Both the radius and the angle grow at the same rate. I expect a spiral with linearly growing radius. This parametric curve is shown in    and            Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     As the angle goes around, the radius oscilated between and . I expect a wobbly kind of circle, or perhaps more like an ellipse, since there is only one period of the oscilations as we go around the circle. This parametric curve is shown in    and            Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     The rate of revolution is increasing. At the same time, the radius is increasing. I expect a spiral into the origin. This parametric curve is shown in    and            Reparametrization    Consider a general parametric curve (in either or ) with . For each of these substitutions, describe how the reparametrization changes the movement along the curve and the domain of the parameter.                                  The movement will be consistently three times faster. For any value of , the position based on the original parameter would be three times further along the curve, so movement along the curve happens three times as fast. The domain is still .     The movement will be one quarter th eoriginal speed. For any value of , the position based on the original parameter would be only one quarter as far along the curve, so motvement along the curve happens at one quarter the original speed. The domain is still      The speed doesn't change. However, at (the starting time for the new variable), the position is already partially along the curve, where the original parametrization would have been at . The domain, to match the original curve, would be .     The speed doesn't change. However, at (the starting time for the new variable), the position has moved back along the curve to . If doesn't take negative values, then the curve would have to start the new variable at . The domain, to match the original curve, would be .     By squaring the new variable, the movement will be faster and faster compared with the old variable. Moving linearly in is moving quadratically in . The domain is still .     By taking the square root, movement along the curve will be going slower and slower compared with the old variable. Moving linearly in is moving only in .The domain is still .     The speed will accelerate more and more compared with the old variable. This is like the quadratic change, but more dramatic, since the exponential function grows faster. The domain cannot actually match the original curve, since producing is impossible with the new variable. The closest domain is .     The speed will not change, but the direction of movement along the curve will be reversed. The domain is .         Arclength    Calculate the arclength of this parametric curve.     I calculate the derivatives of the two coordinates. I then put them into a pythagorian combination. For arclength, I need to integrate this expression over the length of the curve. The result of this integral is the arclength of the curve.      Calculate the arclength of this parametric curve.     I calculate the derivatives of the two coordinates. I then put these into a pythagorian combination. For arclength, I need to integrate this expression over the length of the curve. The result of this integral is the arclength of the curve.      Calculate the arclength of this parametric curve.     I calculate the derivatives of the two coordinates. I then put these into a pythagorian combination. For arclength, I need to integrate this expression over the length of the curve. The result of this integral is the arclength of the function.      This is a multi-part question on a historically important arclength calculation. (Some historical context is given and the end of the solution).  Find a parametric curve which descrives an ellipse with semimajor axis and semiminor axis . (It is easiest for future stpes to orient the larger ellipse axis along the axis.)  Set up the arclength calculation to find the circumference of the ellipse.  Factor out of the square root and subtract a cosine term so that you can simplify using .  The eccentricity of the ellipse is defined to be the number . Manipulate the integral so that shows up under the square root, but amd are no longer under the square root.  Calculate the integral in the special case . (Since this happens only when , this is a circle with radius ; you should recover the familiar circumference of a circle).  Try to solve the integral for general eccentricity . Comment on the problems and barriers to integration.         Find a parametric curve which descrives an ellipse with semimajor axis and semiminor axis .  I can take the standard curve for the circle and just scale the amplitude of the two coordinate functions. The shape is given by one period of the sine and cosine functions, so .    Set up the arclength calculation to find the circumference of the ellipse.  The derivatives are and . I put these in a pythagorian combination and integrate to find the arclength.     Factor out of the square root and subtract a cosine term to that you can simplify using .     The eccentricity of the ellipse is defined to be the number . Manipulate the integral so that shows up under the square root, but amd are no longer under the square root.     Calculate the integral in the special case .     Try to solve the integral for general eccentricity . Comment on the problems and barriers to integration.  This is an impossible integral to solve with the methods in this course, or even with more advanced method. Without , I can't make use of a trig identity to remove all the trig functions. I am left with this annoying function inside the integral. No substitution works, since there are no trig functions outside the integral.  This is called an elliptic integral (of the second kind, technically). It was a major motivator in 19th century mathematics, since the circumference of the ellipse was considered an important geometric problem. It led, indirectly, to the objects known as elliptic curves. These are very important geometric object which seem strangely named, since they don't look like they have anything to do with ellipses. The connection is these integrals. Elliptic curves were invented as part of some clever and complicated new methods to approach ellitpic integrals. In this sense, elliptic curves are not curves which are like ellipses , but rather, curves that solve some elliptic integrals.          Parametrization by Arclength    Parametrize this curve by arclength.     First, I calculate the derivatives of the coordinate functions. Then I calculate the pythagorian combination of these. This is a pretty long calculation, but I will be able to make use of a number of trig identities to simplify the terms inside the square root, and some terms cancel. Then I set up the arclength function, which is the integral of this pythagorian combination. I can use a substitution here. Then I invert the arclength function. Finally, I repalce with this expression to get a parametrization in , which is the parametrization by arclength.       Parametrize this curve by arclength. (The function will turn out to be imposible to invert algebraically. You can just leave the inverse implicit. Also, the integral is a difficult trig substitution; please just ask a computer algebra system for the result of the integral.)     First, I calculate the derivatives of the coordinate functions. Then I calculate the pythagorian combination of these. Then I set up the arclength function, which is the integral of this pythagorian combination. I asked a computer algebra system for the value of this integral. This is not algebraically invertible. All I can do is call the inverse and replace it implicitly.       Parametrize this curve by arclength. (The function will turn out to be impossible to invert algebraically. You can just leave the inverse implicit. Also, the integral is a difficult trig substitution; please just ask a computer algebra system for the result of the integral.)     First, I calculate the derivatives of the coordinate functions. Then I calculate the pythagorian combination of these. I'm going to complete the square here to make this more approachable. Then I set up the arclength function, which is the integral of this pythagorian combination. I can shift using the substitution  This is a trig substitution. I asked a computer algebra for the solution. This is not algebraically invertible. All I can do is implicitly write for the inverse. Then I can replace with this in this curve.       Tangents to Parametric Curves    Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to            Calculate the tangent to this parametric curve. (This is the same curve from . Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to            Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to            Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to            Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to            Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in .  Tangents to            Full Descriptions of Curves in    For this curve, calculate the speed, curvature, torsion. Also calculate the tangent vector, normal vector and binormal vector. Interpret the curve using the three scalars, focusing on the asymptotic behaviour. (The expressions get very hectic in this example -- it is very hard to construct examples where the functions don't quickly grow difficult. Use a computer to do the derivatives and cross product to save yourself some calculation. I used Wolfram Alpha for all the derivatives and cross products, and some of the algebraic simplifications as well. By the time you get to , expect some complicated results.)    I follow the lengthy process of calculating speed, curvature, torsion, the tangent vector, the normal vector, and the binormal vector. As I warned you, this got pretty intense. However, I can simplify and gain useful information by just looking at the asymptotic order of the three scalars. The speed is increasing. This makes sense, since the components are cubic and quadratic. The curve covers more distance as the inputs to these polynomials become large. The curvature starts out significant, incidating a curving shape at the start. However, asymptotically, the curvature drops to zero, making this approach a straight line. Something similar is true for torsion. Torsion is large when is small, showing the twisting of the curve near the origin. Asymptotically, torsion decays very quickly, so the twisting quickly become insignificant as the curve straightens out.      Conceptual Review Questions    What is a parametric curve?  What is a parametrization?  What is the difference between a parametric curve and an implicit curve?  What is the arclength of a curve?  What is special about the parametrization by arclength?  What is a tangent to a parametric curve?  What is the relationship betwee arclength and tangents?  What are normals and binormals?  What is curvature?  What is the osculating plane and how does it relate to torsion?  How to tangents, normals and binormals (alternativley speed, curvature and torsion) completely describe the motion of curves in ?     "
},
{
  "id": "activity-pc1",
  "level": "2",
  "url": "week2-activity.html#activity-pc1",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     The coordinate is always positive, starting at , dropping back down to and then rising up to again. The coordinates starts at and increases to . Since the two coordinates have different exponents, I expect a non-linear shape following the trends I just described. This parametric curve is shown in            "
},
{
  "id": "activity-pc2",
  "level": "2",
  "url": "week2-activity.html#activity-pc2",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     Both coordinates are period functions, so I expect a shape that loops around and return to its starting point. The coordinate has a larger amplitude, but both have the same period, so I expect this to be stretch out in the direction. Possible an ellipse. This parametric curve is shown in            "
},
{
  "id": "activity-pc3",
  "level": "2",
  "url": "week2-activity.html#activity-pc3",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     This is hard to immediately guess the shape. Both coordinates are bounded and periodic, so I do expect a shape that loops around in some way and return to the origin. However, since we have sums of trig functions with different amplitues and periods, I expect a slightly complicated kind of looping. Possible like a sinusoidal oscilaton along a circle, but maybe with self-intersections as well. This parametric curve is shown in            "
},
{
  "id": "activity-pc4",
  "level": "2",
  "url": "week2-activity.html#activity-pc4",
  "type": "Activity",
  "number": "2.3.4",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     The coordinates is just the parameter , so I can think of this as a graph of the other coordinate (with the axes reverse, since here will be a function of . The coordinate is a quadratic, so I expect a sideways parabola. This parametric curve is shown in            "
},
{
  "id": "activity-pc5",
  "level": "2",
  "url": "week2-activity.html#activity-pc5",
  "type": "Activity",
  "number": "2.3.5",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     This is a typical setup for a spiral, with sine and cosine terms of the same period but an amplitude which changes with the parameter. Here, the amplitude is decreasing, so I expect an curve spiraling inward. This parametric curve is shown in            "
},
{
  "id": "activity-pc6",
  "level": "2",
  "url": "week2-activity.html#activity-pc6",
  "type": "Activity",
  "number": "2.3.6",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     I expect a curved path out from the origin to . This parametric curve is shown in            "
},
{
  "id": "activity-14",
  "level": "2",
  "url": "week2-activity.html#activity-14",
  "type": "Activity",
  "number": "2.3.7",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     Both the radius and the angle grow at the same rate. I expect a spiral with linearly growing radius. This parametric curve is shown in    and         "
},
{
  "id": "activity-15",
  "level": "2",
  "url": "week2-activity.html#activity-15",
  "type": "Activity",
  "number": "2.3.8",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     As the angle goes around, the radius oscilated between and . I expect a wobbly kind of circle, or perhaps more like an ellipse, since there is only one period of the oscilations as we go around the circle. This parametric curve is shown in    and         "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "week2-activity.html#activity-16",
  "type": "Activity",
  "number": "2.3.9",
  "title": "",
  "body": "  Give an informal analysis of this curve by looking at its component functions, perhaps calculating some sample points, and trying to determine the behaviour of the shape. Check your informal analysis by computer to see the actual shape of the curve.     The rate of revolution is increasing. At the same time, the radius is increasing. I expect a spiral into the origin. This parametric curve is shown in    and         "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "week2-activity.html#activity-17",
  "type": "Activity",
  "number": "2.3.10",
  "title": "",
  "body": "  Consider a general parametric curve (in either or ) with . For each of these substitutions, describe how the reparametrization changes the movement along the curve and the domain of the parameter.                                  The movement will be consistently three times faster. For any value of , the position based on the original parameter would be three times further along the curve, so movement along the curve happens three times as fast. The domain is still .     The movement will be one quarter th eoriginal speed. For any value of , the position based on the original parameter would be only one quarter as far along the curve, so motvement along the curve happens at one quarter the original speed. The domain is still      The speed doesn't change. However, at (the starting time for the new variable), the position is already partially along the curve, where the original parametrization would have been at . The domain, to match the original curve, would be .     The speed doesn't change. However, at (the starting time for the new variable), the position has moved back along the curve to . If doesn't take negative values, then the curve would have to start the new variable at . The domain, to match the original curve, would be .     By squaring the new variable, the movement will be faster and faster compared with the old variable. Moving linearly in is moving quadratically in . The domain is still .     By taking the square root, movement along the curve will be going slower and slower compared with the old variable. Moving linearly in is moving only in .The domain is still .     The speed will accelerate more and more compared with the old variable. This is like the quadratic change, but more dramatic, since the exponential function grows faster. The domain cannot actually match the original curve, since producing is impossible with the new variable. The closest domain is .     The speed will not change, but the direction of movement along the curve will be reversed. The domain is .      "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "week2-activity.html#activity-18",
  "type": "Activity",
  "number": "2.3.11",
  "title": "",
  "body": "  Calculate the arclength of this parametric curve.     I calculate the derivatives of the two coordinates. I then put them into a pythagorian combination. For arclength, I need to integrate this expression over the length of the curve. The result of this integral is the arclength of the curve.   "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "week2-activity.html#activity-19",
  "type": "Activity",
  "number": "2.3.12",
  "title": "",
  "body": "  Calculate the arclength of this parametric curve.     I calculate the derivatives of the two coordinates. I then put these into a pythagorian combination. For arclength, I need to integrate this expression over the length of the curve. The result of this integral is the arclength of the curve.   "
},
{
  "id": "activity-20",
  "level": "2",
  "url": "week2-activity.html#activity-20",
  "type": "Activity",
  "number": "2.3.13",
  "title": "",
  "body": "  Calculate the arclength of this parametric curve.     I calculate the derivatives of the two coordinates. I then put these into a pythagorian combination. For arclength, I need to integrate this expression over the length of the curve. The result of this integral is the arclength of the function.   "
},
{
  "id": "activity-21",
  "level": "2",
  "url": "week2-activity.html#activity-21",
  "type": "Activity",
  "number": "2.3.14",
  "title": "",
  "body": "  This is a multi-part question on a historically important arclength calculation. (Some historical context is given and the end of the solution).  Find a parametric curve which descrives an ellipse with semimajor axis and semiminor axis . (It is easiest for future stpes to orient the larger ellipse axis along the axis.)  Set up the arclength calculation to find the circumference of the ellipse.  Factor out of the square root and subtract a cosine term so that you can simplify using .  The eccentricity of the ellipse is defined to be the number . Manipulate the integral so that shows up under the square root, but amd are no longer under the square root.  Calculate the integral in the special case . (Since this happens only when , this is a circle with radius ; you should recover the familiar circumference of a circle).  Try to solve the integral for general eccentricity . Comment on the problems and barriers to integration.         Find a parametric curve which descrives an ellipse with semimajor axis and semiminor axis .  I can take the standard curve for the circle and just scale the amplitude of the two coordinate functions. The shape is given by one period of the sine and cosine functions, so .    Set up the arclength calculation to find the circumference of the ellipse.  The derivatives are and . I put these in a pythagorian combination and integrate to find the arclength.     Factor out of the square root and subtract a cosine term to that you can simplify using .     The eccentricity of the ellipse is defined to be the number . Manipulate the integral so that shows up under the square root, but amd are no longer under the square root.     Calculate the integral in the special case .     Try to solve the integral for general eccentricity . Comment on the problems and barriers to integration.  This is an impossible integral to solve with the methods in this course, or even with more advanced method. Without , I can't make use of a trig identity to remove all the trig functions. I am left with this annoying function inside the integral. No substitution works, since there are no trig functions outside the integral.  This is called an elliptic integral (of the second kind, technically). It was a major motivator in 19th century mathematics, since the circumference of the ellipse was considered an important geometric problem. It led, indirectly, to the objects known as elliptic curves. These are very important geometric object which seem strangely named, since they don't look like they have anything to do with ellipses. The connection is these integrals. Elliptic curves were invented as part of some clever and complicated new methods to approach ellitpic integrals. In this sense, elliptic curves are not curves which are like ellipses , but rather, curves that solve some elliptic integrals.       "
},
{
  "id": "activity-22",
  "level": "2",
  "url": "week2-activity.html#activity-22",
  "type": "Activity",
  "number": "2.3.15",
  "title": "",
  "body": "  Parametrize this curve by arclength.     First, I calculate the derivatives of the coordinate functions. Then I calculate the pythagorian combination of these. This is a pretty long calculation, but I will be able to make use of a number of trig identities to simplify the terms inside the square root, and some terms cancel. Then I set up the arclength function, which is the integral of this pythagorian combination. I can use a substitution here. Then I invert the arclength function. Finally, I repalce with this expression to get a parametrization in , which is the parametrization by arclength.    "
},
{
  "id": "activity-23",
  "level": "2",
  "url": "week2-activity.html#activity-23",
  "type": "Activity",
  "number": "2.3.16",
  "title": "",
  "body": "  Parametrize this curve by arclength. (The function will turn out to be imposible to invert algebraically. You can just leave the inverse implicit. Also, the integral is a difficult trig substitution; please just ask a computer algebra system for the result of the integral.)     First, I calculate the derivatives of the coordinate functions. Then I calculate the pythagorian combination of these. Then I set up the arclength function, which is the integral of this pythagorian combination. I asked a computer algebra system for the value of this integral. This is not algebraically invertible. All I can do is call the inverse and replace it implicitly.    "
},
{
  "id": "activity-24",
  "level": "2",
  "url": "week2-activity.html#activity-24",
  "type": "Activity",
  "number": "2.3.17",
  "title": "",
  "body": "  Parametrize this curve by arclength. (The function will turn out to be impossible to invert algebraically. You can just leave the inverse implicit. Also, the integral is a difficult trig substitution; please just ask a computer algebra system for the result of the integral.)     First, I calculate the derivatives of the coordinate functions. Then I calculate the pythagorian combination of these. I'm going to complete the square here to make this more approachable. Then I set up the arclength function, which is the integral of this pythagorian combination. I can shift using the substitution  This is a trig substitution. I asked a computer algebra for the solution. This is not algebraically invertible. All I can do is implicitly write for the inverse. Then I can replace with this in this curve.    "
},
{
  "id": "activity-25",
  "level": "2",
  "url": "week2-activity.html#activity-25",
  "type": "Activity",
  "number": "2.3.18",
  "title": "",
  "body": "  Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to         "
},
{
  "id": "activity-26",
  "level": "2",
  "url": "week2-activity.html#activity-26",
  "type": "Activity",
  "number": "2.3.19",
  "title": "",
  "body": "  Calculate the tangent to this parametric curve. (This is the same curve from . Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to         "
},
{
  "id": "activity-27",
  "level": "2",
  "url": "week2-activity.html#activity-27",
  "type": "Activity",
  "number": "2.3.20",
  "title": "",
  "body": "  Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to         "
},
{
  "id": "activity-28",
  "level": "2",
  "url": "week2-activity.html#activity-28",
  "type": "Activity",
  "number": "2.3.21",
  "title": "",
  "body": "  Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to         "
},
{
  "id": "activity-29",
  "level": "2",
  "url": "week2-activity.html#activity-29",
  "type": "Activity",
  "number": "2.3.22",
  "title": "",
  "body": "  Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in   Tangents to         "
},
{
  "id": "activity-30",
  "level": "2",
  "url": "week2-activity.html#activity-30",
  "type": "Activity",
  "number": "2.3.23",
  "title": "",
  "body": "  Calculate the tangent to this parametric curve. (This is the same curve from ). Choose some points and draw some tangents to inspect if they fit the curve.     The tangent is the derivative calculated termwise. This parametric curve with some example tangents is shown in .  Tangents to         "
},
{
  "id": "activity-31",
  "level": "2",
  "url": "week2-activity.html#activity-31",
  "type": "Activity",
  "number": "2.3.24",
  "title": "",
  "body": "  For this curve, calculate the speed, curvature, torsion. Also calculate the tangent vector, normal vector and binormal vector. Interpret the curve using the three scalars, focusing on the asymptotic behaviour. (The expressions get very hectic in this example -- it is very hard to construct examples where the functions don't quickly grow difficult. Use a computer to do the derivatives and cross product to save yourself some calculation. I used Wolfram Alpha for all the derivatives and cross products, and some of the algebraic simplifications as well. By the time you get to , expect some complicated results.)    I follow the lengthy process of calculating speed, curvature, torsion, the tangent vector, the normal vector, and the binormal vector. As I warned you, this got pretty intense. However, I can simplify and gain useful information by just looking at the asymptotic order of the three scalars. The speed is increasing. This makes sense, since the components are cubic and quadratic. The curve covers more distance as the inputs to these polynomials become large. The curvature starts out significant, incidating a curving shape at the start. However, asymptotically, the curvature drops to zero, making this approach a straight line. Something similar is true for torsion. Torsion is large when is small, showing the twisting of the curve near the origin. Asymptotically, torsion decays very quickly, so the twisting quickly become insignificant as the curve straightens out.   "
},
{
  "id": "section-scalar-fields",
  "level": "1",
  "url": "section-scalar-fields.html",
  "type": "Section",
  "number": "3.1",
  "title": "Scalar Fields",
  "body": " Scalar Fields   Definitions  First year calculus dealt with functions . Parametric curves dealt with functions . Multivariable functions are functions . They having an arbitrary number of inputs and outputs. I can distinguish between two main categories, classified by output.    A scalar function or scalar field is a function .      A vector function or vector field is a function for .    Vector fields are the most difficult and complicated, since they have both multiple inputs and multiple outputs. The study of vector functions will follow in a future section of this course.    There are many familiar scalar fields. The potential energy due to gravity on an object with mass and height above the surface of the earth is is a two variable function. In a circuit, voltage in terms of current and reisistance is is another two variable function. The force of gravity between two celestial object is a three-variable function which depends on both masses, and , as well as the distance between them . Any quantity which can vary in three dimensional space, such a pressure, temperature, humidity, is a function of the three variables of location .      Here are some explicit functions .   Any other algebraic expression in and would also define a function .      The domain of a scalar field is the subset of where the function can be defined.    Domain has the same kind of restrictions as for single-variable functions: no division by zero, no negative even roots, no negative logarithms, etc. However, now domain restrictions may apply to any of the input variables. The domains themselves may be very complicated subsets of .    I'll start with at the domains of the five explicitly stated functions in the Example .    and are polynomials (in two variables), so there are no restrictions. Their domain is .     is a sine function, which again imposes no restrictions, so it also has domain .     has two square roots, one involving and one involving . Therefore, and are necessary to define . That domain is the positive and quadrant, including the origin and the positive pieces of both axes.     also has a square root. To ensure that the square root has a positive argument, I require , or . This domain is a a circular disc of radius , including its boundary.    Lastly, , has an strange exponential. This leads to very strange domain behaviour. If is an integer, can be any non-zero real number. If is a fraction, must be positive if the denominator of is even, to avoid square roots of negative numbers. If is irrational, must be positive. This all leads to a very complicated domain in , something hard to describe directly as a shape.         Geometry and Graphs of Functions  The graph of a single variable was a curve in where one axis was input and one axis was output. The idea generalizes, but in all cases, a graph has to show both the inputs and output.    Let be the domain of a scalar field . The graph of the scalar field is the subset of consisting of all points for .    Since the graph must show inputs and outputs, it need many dimensions. If , then the graph is in or some other higher dimensional space. I can only actually see graphs of scalar field on .  The case is useful to understand the general situation. In this case, and are in input (domain) and is the output (range). I can think of the graph as a height function: over some point in the domain of , the graph sits at some height .   The graph of       I used graphs extensively in single-variable calculus to understand derivatives and integrals: derivative were slopes of tangent lines and integrals were area under curves. I want to generalize this to the new higher-dimensional graphs. For scalar fields , it's not too difficult to extend the notions. Instead of tangent line, the graph will now have a tangent plane . Instead of area under the curve, a graph has volume under the surface. For , there are tangent n-spaces and (n+1)-hyper-volume under the n-dimensions graph surface.    Contour Plots  As an alternative to conventional graphs of function, a nice way to visualize height functions is as topological maps. These visualizations are called plots.    Let be a scalar field for a domain . A contour plot for is a plot of curves in where each curve is a locus of the form for some constant .    A contour plot has a series of implicit curves at constant elevation; the constants are the elevation. It shows curves where the function takes a specific value. By looking at the relationships of the curves, I can intuit how the function behaves.    Consider . It's graph is Figure . This function has a simple hill at the origin and slopes down in all directions. The contours are loci of the form , which can be rearranged as . These contours are all circles, and are shown in Figure .     The circular contours of         Contour diagrams can show many behaviours. Figure shows a pass or saddle point. (The saddle point will be formally defined in Definition ).     The contours of a saddle point      These contour plots lead to a general definition.    Let be a scalar field. A level set for is a subset of given by the equation for some .    Then a contour plot is just a drawing of a variety of level sets of a scalar field . It is useful to see where a function is constant. The resulting shapes tell a great deal about the behaviour of the function. Level sets for are called level surfaces.   "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "section-scalar-fields.html#definition-30",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A scalar function or scalar field is a function .   "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "section-scalar-fields.html#definition-31",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  A vector function or vector field is a function for .   "
},
{
  "id": "example-27",
  "level": "2",
  "url": "section-scalar-fields.html#example-27",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  There are many familiar scalar fields. The potential energy due to gravity on an object with mass and height above the surface of the earth is is a two variable function. In a circuit, voltage in terms of current and reisistance is is another two variable function. The force of gravity between two celestial object is a three-variable function which depends on both masses, and , as well as the distance between them . Any quantity which can vary in three dimensional space, such a pressure, temperature, humidity, is a function of the three variables of location .   "
},
{
  "id": "example-multivariable1",
  "level": "2",
  "url": "section-scalar-fields.html#example-multivariable1",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  Here are some explicit functions .   Any other algebraic expression in and would also define a function .   "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "section-scalar-fields.html#definition-32",
  "type": "Definition",
  "number": "3.1.5",
  "title": "",
  "body": "  The domain of a scalar field is the subset of where the function can be defined.   "
},
{
  "id": "example-29",
  "level": "2",
  "url": "section-scalar-fields.html#example-29",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  I'll start with at the domains of the five explicitly stated functions in the Example .    and are polynomials (in two variables), so there are no restrictions. Their domain is .     is a sine function, which again imposes no restrictions, so it also has domain .     has two square roots, one involving and one involving . Therefore, and are necessary to define . That domain is the positive and quadrant, including the origin and the positive pieces of both axes.     also has a square root. To ensure that the square root has a positive argument, I require , or . This domain is a a circular disc of radius , including its boundary.    Lastly, , has an strange exponential. This leads to very strange domain behaviour. If is an integer, can be any non-zero real number. If is a fraction, must be positive if the denominator of is even, to avoid square roots of negative numbers. If is irrational, must be positive. This all leads to a very complicated domain in , something hard to describe directly as a shape.      "
},
{
  "id": "definition-33",
  "level": "2",
  "url": "section-scalar-fields.html#definition-33",
  "type": "Definition",
  "number": "3.1.7",
  "title": "",
  "body": "  Let be the domain of a scalar field . The graph of the scalar field is the subset of consisting of all points for .   "
},
{
  "id": "figure-3d-graph1",
  "level": "2",
  "url": "section-scalar-fields.html#figure-3d-graph1",
  "type": "Figure",
  "number": "3.1.8",
  "title": "",
  "body": " The graph of      "
},
{
  "id": "definition-34",
  "level": "2",
  "url": "section-scalar-fields.html#definition-34",
  "type": "Definition",
  "number": "3.1.9",
  "title": "",
  "body": "  Let be a scalar field for a domain . A contour plot for is a plot of curves in where each curve is a locus of the form for some constant .   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "section-scalar-fields.html#example-30",
  "type": "Example",
  "number": "3.1.10",
  "title": "",
  "body": "  Consider . It's graph is Figure . This function has a simple hill at the origin and slopes down in all directions. The contours are loci of the form , which can be rearranged as . These contours are all circles, and are shown in Figure .   "
},
{
  "id": "figure-contour-plot1",
  "level": "2",
  "url": "section-scalar-fields.html#figure-contour-plot1",
  "type": "Figure",
  "number": "3.1.11",
  "title": "",
  "body": " The circular contours of      "
},
{
  "id": "example-31",
  "level": "2",
  "url": "section-scalar-fields.html#example-31",
  "type": "Example",
  "number": "3.1.12",
  "title": "",
  "body": "  Contour diagrams can show many behaviours. Figure shows a pass or saddle point. (The saddle point will be formally defined in Definition ).   "
},
{
  "id": "figure-contour-plot2",
  "level": "2",
  "url": "section-scalar-fields.html#figure-contour-plot2",
  "type": "Figure",
  "number": "3.1.13",
  "title": "",
  "body": " The contours of a saddle point     "
},
{
  "id": "definition-35",
  "level": "2",
  "url": "section-scalar-fields.html#definition-35",
  "type": "Definition",
  "number": "3.1.14",
  "title": "",
  "body": "  Let be a scalar field. A level set for is a subset of given by the equation for some .   "
},
{
  "id": "section-scalar-field-limits",
  "level": "1",
  "url": "section-scalar-field-limits.html",
  "type": "Section",
  "number": "3.2",
  "title": "Multivariable Limits",
  "body": " Multivariable Limits   Definition of Limits of Multivariable Functions  I want to re-establish the tools of calculus for multi-variable functions. As with single-variable functions, the starting point is limits. Again, as with single-variable functions, limit are required for the definition of both the deriavtive and the integral. I'll start with the full, formal, definition.    Let be a scalar field. Let be a point in . Then the statement means that  such that if then .    The definition is essentially the same as the single-variable definition: as the input gets closer and closer to a specific point, the output gets closer and closer to a fixed value . The only issue is that closer and closer now happens in instead of .  In , there were only two directions of approach: from the left and from the right. If the behaviour from both sides was the same, then the limit existed. In for , there are infinitely many ways to approach any given point. I can approach along lines in infinitely many directions out from the point. Even more, I can approach along other paths, such as spiral paths or strange jagged paths. This makes it much more difficult to determine the behaviour and much more difficult to prove existence of various limits. However, I do have some good news. First, the definition of continuity remains the same.    A scalar field is called continuous at if the limit approaching exists and is the same as .    So limits for continuous functions are still reasonable: I just evaluate. But what functions are continuous?    A function is continuous if and only if it is continuous independently in each of its variables.    This is the first application of a very important technique: treating the function as a function of only one variable and ignoring the others, pretending that they are constant. If I do that, I end up consider different single variable functions. The proposition says that the function is continuous in the new definition if and only if all of the different single variable functions are continuous.  This proposition tells me how to recognize continuous functions. Anything involving polynomials, roots, rational functions, trig, exponentials and logarithms is continuous on its domain.    Evaluating Multivariable Limits  As I mentioned before, proving the existence of limits is difficult. However, the algebraic techniques of first year calculus can still work for calculations. Here are some examples where I can use algebraic manipulation to simplify limits so that they can be evaluated.     The limit cannot be directly evaluated. However, with the factoring of the numerator, I can cancel of the term. That removes the division by zero problem and lets me evaluate the limit. This limit means that no matter which direction I choose to approach from, the function gets closer and closer to zero.       This is another limit that cannot be directly evaluated, since it has type . To deal with this denominator, I will multiply by its conjugate (in both numerator and denominator, of course). The conjugate gets rid of the square roots in the denominator Then I can factor a out of the numerator and find a common term, , which I can cancel off. At the end, having removed the division by zero, I just evaluate the limit.        This is another limit where multiplying by a conjugate is helpful. The conjugate removes the square roots from the numerator. Then I can cancel off the common term, which removes the division by zero. After that, I can simply evaluate the limit.     When a limit doesn't exist, I can prove its non-existence by looking at various directions of approach. If the limit along different directions is different, then there can be no cohesive limit. There are several ways to do this, depending on what kind of approach I want to take. I'll do two examples with different paths of approach, each chosen to suit the specific function under consideration.   The graph of          I will approach along the line . That lets me replace with in the calculation and the limit because .   This limit depend on the choice of . I can get infinitely many values (all between 0 and 1) out of this limit depending on which line I use to approach . With all these possible answers, the limit cannot exist. It is interesting to try to visualize the graph: as the values get close to zero, there are pieces of the graph getting close to any number between and . Figure shows some of this behaviour: approaching from the front of figure leads to , but approaching from the sides leads to larger numbers. (The graph is slightly flawed, due to the graphing algorithm. The two cliffs should meet, even though the graph shows a gap between them. Where the two cliffs meet is the line with all the problematic limits.)      In this example, I approach along parabolic paths of the form . This lets me replace with and get a single variable limit. Like the previous example, I get a limit that depends on the path of approach, so I conclude that the limit cannot exists.     It is important to note that this technique (choosing multiple paths of approach) can only be used to proves that limits fail. It cannot be used to prove that limits exists (at least not in the way that I have presented it here), since it doesn't cover any possible path of approach.   "
},
{
  "id": "definition-36",
  "level": "2",
  "url": "section-scalar-field-limits.html#definition-36",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  Let be a scalar field. Let be a point in . Then the statement means that  such that if then .   "
},
{
  "id": "definition-37",
  "level": "2",
  "url": "section-scalar-field-limits.html#definition-37",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "  A scalar field is called continuous at if the limit approaching exists and is the same as .   "
},
{
  "id": "proposition-7",
  "level": "2",
  "url": "section-scalar-field-limits.html#proposition-7",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "",
  "body": "  A function is continuous if and only if it is continuous independently in each of its variables.   "
},
{
  "id": "example-32",
  "level": "2",
  "url": "section-scalar-field-limits.html#example-32",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "   The limit cannot be directly evaluated. However, with the factoring of the numerator, I can cancel of the term. That removes the division by zero problem and lets me evaluate the limit. This limit means that no matter which direction I choose to approach from, the function gets closer and closer to zero.   "
},
{
  "id": "example-33",
  "level": "2",
  "url": "section-scalar-field-limits.html#example-33",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "   This is another limit that cannot be directly evaluated, since it has type . To deal with this denominator, I will multiply by its conjugate (in both numerator and denominator, of course). The conjugate gets rid of the square roots in the denominator Then I can factor a out of the numerator and find a common term, , which I can cancel off. At the end, having removed the division by zero, I just evaluate the limit.    "
},
{
  "id": "example-34",
  "level": "2",
  "url": "section-scalar-field-limits.html#example-34",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": "   This is another limit where multiplying by a conjugate is helpful. The conjugate removes the square roots from the numerator. Then I can cancel off the common term, which removes the division by zero. After that, I can simply evaluate the limit.    "
},
{
  "id": "figure-3d-graph2",
  "level": "2",
  "url": "section-scalar-field-limits.html#figure-3d-graph2",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " The graph of      "
},
{
  "id": "example-35",
  "level": "2",
  "url": "section-scalar-field-limits.html#example-35",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "   I will approach along the line . That lets me replace with in the calculation and the limit because .   This limit depend on the choice of . I can get infinitely many values (all between 0 and 1) out of this limit depending on which line I use to approach . With all these possible answers, the limit cannot exist. It is interesting to try to visualize the graph: as the values get close to zero, there are pieces of the graph getting close to any number between and . Figure shows some of this behaviour: approaching from the front of figure leads to , but approaching from the sides leads to larger numbers. (The graph is slightly flawed, due to the graphing algorithm. The two cliffs should meet, even though the graph shows a gap between them. Where the two cliffs meet is the line with all the problematic limits.)   "
},
{
  "id": "example-36",
  "level": "2",
  "url": "section-scalar-field-limits.html#example-36",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": "  In this example, I approach along parabolic paths of the form . This lets me replace with and get a single variable limit. Like the previous example, I get a limit that depends on the path of approach, so I conclude that the limit cannot exists.    "
},
{
  "id": "section-partial-derivatives",
  "level": "1",
  "url": "section-partial-derivatives.html",
  "type": "Section",
  "number": "3.3",
  "title": "Partial Derivatives",
  "body": " Partial Derivatives   Definition  A major goal of this course is extending the notion of the derivative to multivariable functions. For parametric curves, the previous idea of the derivative (measuring the slope of a tangent line) became the tangent vector instead. For scalar fields which depend on multiple inputs, the extension of the derivative is more difficult. In this and the following sections, I'm going to introduce a variety of different ways to extend the derivative, each trying to capture some aspect of the single variable derivative. The first extention is the partial derivative.    Let be a scalar field. If is one of the variables, then the derivative of which pretends that all other variables are constant is called the partial derivative of in the variable .    The notation for partial derivatives resembles Leibniz notation for ordinary derivatives: . Leibniz style notation is useful since the variable of differentiation is explicit. The partial derivatives of in terms of , , , or are written with a stylized version of in Leibniz notation.   For interpretation, the partial derivative gives the rate of change of with respect to one of its variables. There isn't a holisitic notion of rate of change, but this definitions hows how a function changes in each variable.  If we wanted to be formal, pretending that all the other variales are constant is the same as taking limits in one variable. For , these limits defined the two partial derivatives.   Notice that the value of still depends on the value of the coordinate . Different values identify different points in the domain, where the rate of change with respect to may differ. The partial derivative pretends that is constant, but the value of that constant can have an effect on the partial derivative.  As was the case for single-variable calculus, I use and similar expressions as operators the things that take derivatives.  There are various notational conventions for partial derivatives. In addition to , I can also write this as , and . The first of these is a nice short-hand which I will use frequently.    Here is a function of two variables. I'll calculate both the partial derivatives. In each partial derivative, I pretend the other variable is constant and use the ordinary rules of single-variable derivatives.       Here is a function of two variables. I'll calculate both the partial derivatives. In each partial derivative, I pretend the other variable is constant and use the ordinary rules of single-variable derivatives.       Here is a function of two variables. I'll calculate both the partial derivatives. In each partial derivative, I pretend the other variable is constant and use the ordinary rules of single-variable derivatives.       Differentiability  The partial derivative allows me to define a holistic notion of the differentiability of a scalar field.    A function is differentiable at if all of its partial derivatives exist at that point.    In this sense, the partial derivatives will be the building blocks of all the various extensions of the single-variable derivative to scalar fields. If all the partial derivatives exists, then any extension of the derivative will work. All of the other extensions I define can be expressed in terms of the partial derivatives. One could consider the collection of all partial derivatives as the derivative of a scalar field (though I will eventually argue that other extensions have a better claim to the term).    Higher Partial Derivatives and Clairaut's Theorem  Like the ordinary single variable derivative, I can iterate partial derivatives to get higher derivatives. First, I can iterate the same partial derivative, with the pretense that the other variables are constant. If involves any of the variablse or , then here are the second partials.   However, I can also iterate partial derivatives in different variables. Consider a function of two variables . I can pretend is constant and take the derivative in . Then, having done that, I can switch and present is constant to take the derivative in . This is called a mixed partial and is written with the following notation. In the denominator of this notation, , the derivative in happens first and the derivative in happens second. This is like the right-to-left notation for functions. This notation (hopefully) makes sense in terms of of differential operators. An operator acts on functions on the left, so the piece closest to the function (the derivative in this case) happens first.  I can iterate this as many times as I want. If I have a function of three variables, , consider this mixed partial. In this partial, I differentiate first in , then in , then in again, and finally in .  There is a useful piece of notation to refer to the differentiability of multivariables functions.   Let be a scalar field. Then is in the class is all of its degree partial derivatives (both pure and mixed) exist and are continuous. This property is often written . If I want to specify the domain, say some subset , I can write , meaning that all the partial derivatives of degree exist over that domain. If the function is infinitely differentiable, this notation becomes .     I'll calcualte a variety of non-mixed higher partial derivatives for this function. Now I'll calculate the first two mixed the partial derivatives Curiously, I get the same answer from either order of the mixed partial derivatives.    The situation in the previous example was not a coincidence. There is a very useful theorem for calculating mixed partial derivativaes.     (Clairaut's Theorem) Let be an open subset. Let be a function and let and represent any two of the variables. If (that is, all the second partial derivatives of exist and are continuous an the pen set ), then on that set. Informally. for function, I can do mixed second partial derivatives in any order.    All of our elementary functions (polynomials, roots, exponentials, etc) will have this property of having continuous second derivative. That means for most usual functions, I can be flexible in the order in which I calculate mixed partials. This flexibility is over very useful, since partial derivatives in one variable might be much easier to calculate than partials in a different variable.   "
},
{
  "id": "definition-38",
  "level": "2",
  "url": "section-partial-derivatives.html#definition-38",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  Let be a scalar field. If is one of the variables, then the derivative of which pretends that all other variables are constant is called the partial derivative of in the variable .   "
},
{
  "id": "example-37",
  "level": "2",
  "url": "section-partial-derivatives.html#example-37",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Here is a function of two variables. I'll calculate both the partial derivatives. In each partial derivative, I pretend the other variable is constant and use the ordinary rules of single-variable derivatives.    "
},
{
  "id": "example-38",
  "level": "2",
  "url": "section-partial-derivatives.html#example-38",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Here is a function of two variables. I'll calculate both the partial derivatives. In each partial derivative, I pretend the other variable is constant and use the ordinary rules of single-variable derivatives.    "
},
{
  "id": "example-39",
  "level": "2",
  "url": "section-partial-derivatives.html#example-39",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Here is a function of two variables. I'll calculate both the partial derivatives. In each partial derivative, I pretend the other variable is constant and use the ordinary rules of single-variable derivatives.    "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "section-partial-derivatives.html#definition-39",
  "type": "Definition",
  "number": "3.3.5",
  "title": "",
  "body": "  A function is differentiable at if all of its partial derivatives exist at that point.   "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "section-partial-derivatives.html#definition-40",
  "type": "Definition",
  "number": "3.3.6",
  "title": "",
  "body": " Let be a scalar field. Then is in the class is all of its degree partial derivatives (both pure and mixed) exist and are continuous. This property is often written . If I want to specify the domain, say some subset , I can write , meaning that all the partial derivatives of degree exist over that domain. If the function is infinitely differentiable, this notation becomes .  "
},
{
  "id": "example-40",
  "level": "2",
  "url": "section-partial-derivatives.html#example-40",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "  I'll calcualte a variety of non-mixed higher partial derivatives for this function. Now I'll calculate the first two mixed the partial derivatives Curiously, I get the same answer from either order of the mixed partial derivatives.   "
},
{
  "id": "proposition-8",
  "level": "2",
  "url": "section-partial-derivatives.html#proposition-8",
  "type": "Proposition",
  "number": "3.3.8",
  "title": "",
  "body": "   (Clairaut's Theorem) Let be an open subset. Let be a function and let and represent any two of the variables. If (that is, all the second partial derivatives of exist and are continuous an the pen set ), then on that set. Informally. for function, I can do mixed second partial derivatives in any order.   "
},
{
  "id": "section-gradients",
  "level": "1",
  "url": "section-gradients.html",
  "type": "Section",
  "number": "3.4",
  "title": "Gradients",
  "body": " Gradients   Definition of the Gradient  After partial derivatives, I want to proceed to define several other generalizations of the derivative. The first is the gradient.    The gradient of a function is written and defined as     The gradient is a new function . It ouputs the vector of partial derivatives of at any point in its domin. Note that the gradient is a local direction vector in the domain .    Interpretation of the Gradient  The best interpretation of the gradient comes from contour plots. Like the gradient, countour plots live in , the domain, and show the level (hyper)surfaces of the function. If, as in , I interpret the function as a height function and the countour plot as a topographical map, the gradient shows direction of greatest increase.  If we draw topographical lines on a countour plot, the gradient will always be locally perpendicular to those lines and will point in the direction of greatest increase. Rephrased, this is a useful result: is always the normal to the level sets of . If those level sets are hypersurfaces, their tangent (hyper)planes can be determined by the normal .    Gradient Examples    A central example of gradients is found by considering the gravitational potential energy function caused by a mass at the the origin. Another object of mass and position has potential gravitational energy of .  By convention, this potential energy is negative. It approaches in the limit at the origin, and approaches as the distance from the origin grows to . I'll writ the gradient of this potential energy; I seperate it into two pieces, one of magnitude and one of diection (where direction is given by a unit vector). .  This is precisely the force of gravity. The gradient points in the direction of maximum increase in potential energy (directly outward from the origin) with magnitude where is the distance between the two objects. This is a common situation we will discuss in Calculus IV: many forces are the result of gradients of potential energy functions. These forces are called conservative forces . Gravity, like these other forces, can be thought of as the tendency for objects to lower their potential energy as efficiently as possible.      In another example, consider a function which measures the pressure in a rotating cylindrial drum. (Think of a centrifuge). With bounds and , the function is   The gradient is   This points in the direction of greatest increase in pressure. It is perpendicular to the surfaces of constant pressure. If there is a difference in media in the drum, the lighter medium will be force towards the edges of the drum in the direction of this gradient.      Extensions of the Gradient  In addition to the gradient, itself is the following differential operator.   This is a vector-valued differential operator: it outputs the vector of partial derivatives . Now that I have defined this operator, there are other operations I can use it for. Most of those operations come in Calculus IV, but I can define one such operation here.    If is a scalar function, the Laplacian of is given by applying twice. Since outputs a vector, the second application uses the dot product to output a scalar.     The Laplacian, as a second derivative, measure some kind of multi-dimensional concavity. I considered the heat equation in one dimension; in that equation, concavity measured local displacement from equilibrium. The Laplacian does the same in multiple dimensions. The general Heat Equation is .  Similarly, the general Wave Equation is .   "
},
{
  "id": "definition-41",
  "level": "2",
  "url": "section-gradients.html#definition-41",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  The gradient of a function is written and defined as    "
},
{
  "id": "example-41",
  "level": "2",
  "url": "section-gradients.html#example-41",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": "  A central example of gradients is found by considering the gravitational potential energy function caused by a mass at the the origin. Another object of mass and position has potential gravitational energy of .  By convention, this potential energy is negative. It approaches in the limit at the origin, and approaches as the distance from the origin grows to . I'll writ the gradient of this potential energy; I seperate it into two pieces, one of magnitude and one of diection (where direction is given by a unit vector). .  This is precisely the force of gravity. The gradient points in the direction of maximum increase in potential energy (directly outward from the origin) with magnitude where is the distance between the two objects. This is a common situation we will discuss in Calculus IV: many forces are the result of gradients of potential energy functions. These forces are called conservative forces . Gravity, like these other forces, can be thought of as the tendency for objects to lower their potential energy as efficiently as possible.   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "section-gradients.html#example-42",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "  In another example, consider a function which measures the pressure in a rotating cylindrial drum. (Think of a centrifuge). With bounds and , the function is   The gradient is   This points in the direction of greatest increase in pressure. It is perpendicular to the surfaces of constant pressure. If there is a difference in media in the drum, the lighter medium will be force towards the edges of the drum in the direction of this gradient.   "
},
{
  "id": "definition-42",
  "level": "2",
  "url": "section-gradients.html#definition-42",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "  If is a scalar function, the Laplacian of is given by applying twice. Since outputs a vector, the second application uses the dot product to output a scalar.    "
},
{
  "id": "week3-activity",
  "level": "1",
  "url": "week3-activity.html",
  "type": "Section",
  "number": "3.5",
  "title": "Week 3 Activity",
  "body": " Week 3 Activity   Contour Plots    Draw the contour graph for using a range of contour values . Use the contour graphs to give a qualitative description of the graph.     Countour Plot for      The graph looks like a sloped ridge. The ridge goes upward along the positive axis and slopes down to either side in the positive and negative directions.      Draw the contour graph for using a range of contour values . Use the contour graphs to give a qualitative description of the graph.     Countour Plot for      The graph looks like a well with a curve bottom. Near the origin, there is a slowly growing circular depression. As the function moves away from the origin, the shape remains circular but the walls get steep very quickly.      Draw the contour graph for using a range of contour values . Use the contour graphs to give a qualitative description of the graph.     Countour Plot for      The graph is a series of ridges, alternating between ridges that grow in the positive direction and ridges that grow in the negative direction. The graph is undefined between the ridges due to the zeros of sine in the denominator.      Draw the contour graph for using a range of contour values . Use the contour graphs to give a qualitative description of the graph.     Countour Plot for      Near the origin, the graph is a hill-shape which cascades down quickly in all directions. Approaching the lines , the graph descends to . Away from the origin, the graph has very steep walls growing to infinity near the lines , but they shrink down to a flat plane as the input moves farther from the origin in the direction.       Partial Derivatives    Calculate this partial derivative.     I differetiate in the variable, treating other variables as constant.       Calculate this partial derivative.     I differetiate in the variable, treating other variables as constant.       Calculate this partial derivative.     I differetiate in the variable, treating other variables as constant.       Calculate this partial derivative.     I differetiate in the variable twice, treating other variables as constant. I use the chain rule in the first step, and then the product rule and the chain rule for the second partial derivative.       Calculate this partial derivative.     I differetiate in the variable twice, treating other variables as constant.       Calculate this partial derivative.     I differetiate in the variable twice, treating other variables as constant.       Calculate this partial derivative.     I differetiate in and then in , in each step treating other variables as constant. I use the chain rule in the first derivative, then product rule and chain rule in the second derivative.       Calculate this partial derivative.     I differetiate in and then in , in each step treating other variables as constant. I use the chain rule in the first step, and then the quotient rule in the second.       Calculate this partial derivative.     I differetiate in and then in , in each step treating other variables as constant.       Calculate this partial derivative.     I differetiate in , then in , and then in , in each step treating other variables as constant.       Calculate this partial derivative.     I differetiate in twice and the in , in each step treating other variables as constant.       Gradients    Calculate the gradient of this function. Use the countour plots from the activity from Week 8 and draw some of the gradient directions, showing that the gradients are indeed perpendicular to the coutour plots.     I calculate the two partial derivative. The gradient has these two as components. I've chosen some points and drawn the gradients in             Calculate the gradient of this function. Use the countour plots from the activity from Week 8 and draw some of the gradient directions, showing that the gradients are indeed perpendicular to the coutour plots.     I calculate the two partial derivative. The gradient has these two as components. I've chosen some points and drawn the gradients in             Calculate the gradient of this function. Use the countour plots from the activity from Week 8 and draw some of the gradient directions, showing that the gradients are indeed perpendicular to the coutour plots.     I calculate the two partial derivative. The gradient has these two as components. I've chosen some points and drawn the gradients in             Calculate the gradient of this function. Use the countour plots from the activity from Week 8 and draw some of the gradient directions, showing that the gradients are indeed perpendicular to the coutour plots.     I calculate the two partial derivative. The gradient has these two as components. I've chosen some points and drawn the gradients in             Conceptual Review Questions    What is a multivariable function?  What is a countour plot?  How do multivariable limits differ from single variable limits?  What is a partial derivative?  What is a gradient?     "
},
{
  "id": "activity-32",
  "level": "2",
  "url": "week3-activity.html#activity-32",
  "type": "Activity",
  "number": "3.5.1",
  "title": "",
  "body": "  Draw the contour graph for using a range of contour values . Use the contour graphs to give a qualitative description of the graph.     Countour Plot for      The graph looks like a sloped ridge. The ridge goes upward along the positive axis and slopes down to either side in the positive and negative directions.   "
},
{
  "id": "activity-33",
  "level": "2",
  "url": "week3-activity.html#activity-33",
  "type": "Activity",
  "number": "3.5.2",
  "title": "",
  "body": "  Draw the contour graph for using a range of contour values . Use the contour graphs to give a qualitative description of the graph.     Countour Plot for      The graph looks like a well with a curve bottom. Near the origin, there is a slowly growing circular depression. As the function moves away from the origin, the shape remains circular but the walls get steep very quickly.   "
},
{
  "id": "activity-34",
  "level": "2",
  "url": "week3-activity.html#activity-34",
  "type": "Activity",
  "number": "3.5.3",
  "title": "",
  "body": "  Draw the contour graph for using a range of contour values . Use the contour graphs to give a qualitative description of the graph.     Countour Plot for      The graph is a series of ridges, alternating between ridges that grow in the positive direction and ridges that grow in the negative direction. The graph is undefined between the ridges due to the zeros of sine in the denominator.   "
},
{
  "id": "activity-35",
  "level": "2",
  "url": "week3-activity.html#activity-35",
  "type": "Activity",
  "number": "3.5.4",
  "title": "",
  "body": "  Draw the contour graph for using a range of contour values . Use the contour graphs to give a qualitative description of the graph.     Countour Plot for      Near the origin, the graph is a hill-shape which cascades down quickly in all directions. Approaching the lines , the graph descends to . Away from the origin, the graph has very steep walls growing to infinity near the lines , but they shrink down to a flat plane as the input moves farther from the origin in the direction.   "
},
{
  "id": "activity-36",
  "level": "2",
  "url": "week3-activity.html#activity-36",
  "type": "Activity",
  "number": "3.5.5",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in the variable, treating other variables as constant.    "
},
{
  "id": "activity-37",
  "level": "2",
  "url": "week3-activity.html#activity-37",
  "type": "Activity",
  "number": "3.5.6",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in the variable, treating other variables as constant.    "
},
{
  "id": "activity-38",
  "level": "2",
  "url": "week3-activity.html#activity-38",
  "type": "Activity",
  "number": "3.5.7",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in the variable, treating other variables as constant.    "
},
{
  "id": "activity-39",
  "level": "2",
  "url": "week3-activity.html#activity-39",
  "type": "Activity",
  "number": "3.5.8",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in the variable twice, treating other variables as constant. I use the chain rule in the first step, and then the product rule and the chain rule for the second partial derivative.    "
},
{
  "id": "activity-40",
  "level": "2",
  "url": "week3-activity.html#activity-40",
  "type": "Activity",
  "number": "3.5.9",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in the variable twice, treating other variables as constant.    "
},
{
  "id": "activity-41",
  "level": "2",
  "url": "week3-activity.html#activity-41",
  "type": "Activity",
  "number": "3.5.10",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in the variable twice, treating other variables as constant.    "
},
{
  "id": "activity-42",
  "level": "2",
  "url": "week3-activity.html#activity-42",
  "type": "Activity",
  "number": "3.5.11",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in and then in , in each step treating other variables as constant. I use the chain rule in the first derivative, then product rule and chain rule in the second derivative.    "
},
{
  "id": "activity-43",
  "level": "2",
  "url": "week3-activity.html#activity-43",
  "type": "Activity",
  "number": "3.5.12",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in and then in , in each step treating other variables as constant. I use the chain rule in the first step, and then the quotient rule in the second.    "
},
{
  "id": "activity-44",
  "level": "2",
  "url": "week3-activity.html#activity-44",
  "type": "Activity",
  "number": "3.5.13",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in and then in , in each step treating other variables as constant.    "
},
{
  "id": "activity-45",
  "level": "2",
  "url": "week3-activity.html#activity-45",
  "type": "Activity",
  "number": "3.5.14",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in , then in , and then in , in each step treating other variables as constant.    "
},
{
  "id": "activity-46",
  "level": "2",
  "url": "week3-activity.html#activity-46",
  "type": "Activity",
  "number": "3.5.15",
  "title": "",
  "body": "  Calculate this partial derivative.     I differetiate in twice and the in , in each step treating other variables as constant.    "
},
{
  "id": "activity-47",
  "level": "2",
  "url": "week3-activity.html#activity-47",
  "type": "Activity",
  "number": "3.5.16",
  "title": "",
  "body": "  Calculate the gradient of this function. Use the countour plots from the activity from Week 8 and draw some of the gradient directions, showing that the gradients are indeed perpendicular to the coutour plots.     I calculate the two partial derivative. The gradient has these two as components. I've chosen some points and drawn the gradients in          "
},
{
  "id": "activity-48",
  "level": "2",
  "url": "week3-activity.html#activity-48",
  "type": "Activity",
  "number": "3.5.17",
  "title": "",
  "body": "  Calculate the gradient of this function. Use the countour plots from the activity from Week 8 and draw some of the gradient directions, showing that the gradients are indeed perpendicular to the coutour plots.     I calculate the two partial derivative. The gradient has these two as components. I've chosen some points and drawn the gradients in          "
},
{
  "id": "activity-49",
  "level": "2",
  "url": "week3-activity.html#activity-49",
  "type": "Activity",
  "number": "3.5.18",
  "title": "",
  "body": "  Calculate the gradient of this function. Use the countour plots from the activity from Week 8 and draw some of the gradient directions, showing that the gradients are indeed perpendicular to the coutour plots.     I calculate the two partial derivative. The gradient has these two as components. I've chosen some points and drawn the gradients in          "
},
{
  "id": "activity-50",
  "level": "2",
  "url": "week3-activity.html#activity-50",
  "type": "Activity",
  "number": "3.5.19",
  "title": "",
  "body": "  Calculate the gradient of this function. Use the countour plots from the activity from Week 8 and draw some of the gradient directions, showing that the gradients are indeed perpendicular to the coutour plots.     I calculate the two partial derivative. The gradient has these two as components. I've chosen some points and drawn the gradients in          "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
