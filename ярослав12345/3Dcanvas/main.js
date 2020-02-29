function setup(){
	createCanvas(innerWidth,innerHeight,WEBGL);
	
}
function draw(){
    background(100,39,56);
	rotateX(mouseY / 200);
	rotateY(mouseX / 200);
    normalMaterial()
	cone(50,159,4,10);
}