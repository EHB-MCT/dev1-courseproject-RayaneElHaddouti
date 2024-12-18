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
// Define a single snowflake
let snowflake = {
	x: canvas.width / 2, // Center of the screen
	y: 0, // Start at the top
	size: 10, // Fixed size
	speed: 2, // Falls at a fixed speed
};

// Draw the snowflake
let drawSnowflake = () => {
	context.beginPath();
	context.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
	context.fillStyle = "white";
	context.fill();
};

// Update snowflake position
let updateSnowflake = () => {
	snowflake.y += snowflake.speed; // Move down
	if (snowflake.y > canvas.height) {
		snowflake.y = 0; // Reset to top
	}
};

// Animation loop
let animate = () => {
	drawBackground(); // Redraw background
	drawCenteredText(); // Redraw text
	updateSnowflake(); // Update snowflake position
	drawSnowflake(); // Draw the snowflake
	requestAnimationFrame(animate); // Loop
};

// Start the animation
animate();
