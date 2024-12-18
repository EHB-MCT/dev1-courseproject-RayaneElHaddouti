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
// Create multiple snowflakes
let snowflakes = [];
let snowflakeCount = 50;

// Populate the snowflake array
for (let i = 0; i < snowflakeCount; i++) {
	snowflakes.push({
		x: Math.random() * canvas.width, // Random horizontal position
		y: Math.random() * canvas.height, // Random vertical position
		size: Math.random() * 8 + 4, // Random size
		speed: Math.random() * 2 + 1, // Random speed
	});
}

// Draw all snowflakes
let drawSnowflakes = () => {
	snowflakes.forEach((snowflake) => {
		context.beginPath();
		context.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
		context.fillStyle = "white";
		context.fill();
	});
};

// Update all snowflakes
let updateSnowflakes = () => {
	snowflakes.forEach((snowflake) => {
		snowflake.y += snowflake.speed; // Move down
		if (snowflake.y > canvas.height) {
			snowflake.y = 0; // Reset to top
		}
	});
};

// Modify the animation loop
let animate = () => {
	drawBackground();
	drawCenteredText();
	updateSnowflakes();
	drawSnowflakes();
	requestAnimationFrame(animate);
};

// Restart the animation
animate();
