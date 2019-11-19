

document.addEventListener("DOMContentLoaded",function(){
	let img;

	function preload() {
		img = loadImage('../img/car-topdown.png');
	}

	function setup() {
		createCanvas(269, 150);
		background(255);
		image(img, 10, 10, 249, 131);
	}

	function draw() {}

	function mouseClicked() {
		noFill();
		stroke(255,0,0);
		strokeWeight(3);
		ellipse(mouseX, mouseY, 35, 35);
	}
})