// Select canvas and set context
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// Adjust canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fill the canvas with a plain color
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);
// Draw the background gradient
let drawBackground = () => {
	let gradient = context.createLinearGradient(
		0,
		0,
		canvas.width,
		canvas.height
	);
	gradient.addColorStop(0, "#0000ff"); // Blue
	gradient.addColorStop(1, "#800080"); // Purple
	context.fillStyle = gradient;
	context.fillRect(0, 0, canvas.width, canvas.height);
};

// Call the background function
drawBackground();
// Draw centered text
let drawCenteredText = () => {
	context.fillStyle = "#ffffff"; // White color
	context.font = "bold 48px Arial";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText("Rayane El Haddouti", canvas.width / 2, canvas.height / 2);
};

// First, draw the background again
drawBackground();

// Then, add the text
drawCenteredText();
