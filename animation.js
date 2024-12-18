// Select canvas and set context
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// Adjust canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Mouse position variables
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Snowflake object constructor
class Snowflake {
	constructor() {
		this.reset();
	}

	// Reset position and properties
	reset() {
		this.x = Math.random() * canvas.width; // Random starting x position
		this.y = Math.random() * canvas.height; // Random starting y position
		this.size = Math.random() * 8 + 4; // Bigger sizes between 4px and 12px
		this.baseSpeed = Math.random() * 1 + 1; // Base fall speed
		this.speedX = 2; // Horizontal speed
		this.shape = "circle"; // Default shape
		this.color = this.getColorBasedOnPosition(); // Initial color
		this.opacity = Math.random() * 0.7 + 0.3; // Random transparency (0.3 - 1.0)
	}

	// Determine color based on horizontal position
	getColorBasedOnPosition() {
		if (this.x < canvas.width / 3) {
			return "rgba(0, 150, 255"; // Left: Blue
		} else if (this.x < (2 * canvas.width) / 3) {
			return "rgba(0, 255, 0"; // Middle: Green
		} else {
			return "rgba(255, 0, 0"; // Right: Red
		}
	}

	// Update position and movement
	update() {
		// Adjust horizontal movement based on mouse position
		let directionFactor = (mouseX - canvas.width / 2) / (canvas.width / 2);
		this.speedX = directionFactor * 2; // Move diagonally based on mouse direction

		// Move snowflake
		this.y += this.baseSpeed; // Vertical fall
		this.x += this.speedX; // Horizontal drift

		// Reset if snowflake goes off-screen
		if (this.y > canvas.height || this.x > canvas.width || this.x < 0) {
			this.reset();
		}
	}

	// Draw the snowflake
	draw() {
		context.beginPath();
		if (this.shape === "circle") {
			context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		}
		context.fillStyle = `${this.color}, ${this.opacity})`; // Add transparency
		context.fill();
	}
}

// Initialize snowflake array
let snowflakes = [];
let snowflakeCount = 200;

// Populate snowflake array
for (let i = 0; i < snowflakeCount; i++) {
	snowflakes.push(new Snowflake());
}

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

// Draw the "Rayane El Haddouti" text in the middle
let drawCenteredText = () => {
	context.fillStyle = "#ffffff"; // White color
	context.font = "bold 48px Arial";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText("Rayane El Haddouti", canvas.width / 2, canvas.height / 2);
};

// Add the signature in the bottom-right corner
function drawSignatureWithSquares() {
	// Define signature box size and position
	let size = 50; // Base size
	let x = canvas.width - (size * 6 + 20); // Offset from the right
	let y = canvas.height - (size * 6 + 20); // Offset from the bottom

	// Black background for signature area
	function blackBackground(x, y) {
		context.beginPath();
		context.fillStyle = "black";
		context.fillRect(x, y, size * 6, size * 6); // Fixed area
		context.fill();
	}

	// Draw purple signature blocks
	function signature(x, y, w, h) {
		context.beginPath();
		context.fillStyle = "purple";
		context.fillRect(x, y, w, h);
		context.fill();
	}

	// Calculate the center for purple blocks
	let StartX = x + (size * 6) / 2;
	let StartY = y + (size * 6) / 2;

	// Draw everything
	blackBackground(x, y);
	signature(StartX - 75, StartY - 100, size, size);
	signature(StartX + 25, StartY - 100, size, size);
	signature(StartX - 75, StartY + 0, size * 3, size);
	signature(StartX - 125, StartY - 50, size * 5, size);
	signature(StartX - 125, StartY + 50, size * 5, size);
}

// Update mouse position
canvas.addEventListener("mousemove", (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;
});

// Animation loop
let animate = () => {
	// Draw background gradient
	drawBackground();

	// Draw centered text
	drawCenteredText();

	// Update and draw snowflakes
	snowflakes.forEach((snowflake) => {
		snowflake.update();
		snowflake.draw();
	});

	// Draw bottom-right signature with squares
	drawSignatureWithSquares();

	// Request next frame
	requestAnimationFrame(animate);
};

// Start animation
animate();
