//Rayane

import context from "./script/context.js";
import * as Utils from "./script/utils.js";
/** @type {CanvasRenderingContext2D} */

let w = canvas.width;
let h = canvas.height;
let width = w / 2;
let height = h / 2;
let botBuddies = [];

setup();
draw();

//setup
function setup() {
	for (let i = 0; i < 1; i++) {
		let botBuddy = {
			x: width / 2,
			y: height,
			size: 300,
			space: 1,
			color: Utils.hsl(Utils.randomNumber(0, 50), 87, 64),
			lefteye: Utils.randomNumber(-30, 30),
			righteye: Utils.randomNumber(-30, 30),
		};

		botBuddies.push(botBuddy);
	}
}

//draw
function draw() {
	for (let i = 0; i < botBuddies.length; i++) {
		// Draw botBuddy
		let botBuddy = botBuddies[i];
		drawBotBuddy(
			botBuddy.x,
			botBuddy.y,
			botBuddy.size,
			botBuddy.space,
			botBuddy.color,
			botBuddy.lefteye,
			botBuddy.righteye
		);
	}
}

function drawBotBuddy(x, y, size, space, color, lefteye, righteye) {
	// Draw the body
	context.fillStyle = color;
	context.beginPath();
	context.ellipse(x, y, size, size * 1.2, 0, 0, Math.PI * 2);
	context.fill();

	// Draw the eyes (circles)
	context.fillStyle = "white";
	const eyeRadius = size / 8; // Radius of the eyes
	const eyeOffsetX = size / 3; // Horizontal offset for eyes
	const eyeOffsetY = size / 4; // Vertical offset for eyes

	// Left eye
	context.beginPath();
	context.arc(x - eyeOffsetX, y - eyeOffsetY, eyeRadius, 0, Math.PI * 2);
	context.fill();

	// Right eye
	context.beginPath();
	context.arc(x + eyeOffsetX, y - eyeOffsetY, eyeRadius, 0, Math.PI * 2);
	context.fill();

	// Draw the pupils (smaller circles within eyes)
	context.fillStyle = "black";
	const pupilRadius = size / 16;

	// Left pupil
	context.beginPath();
	context.arc(
		x - eyeOffsetX + lefteye,
		y - eyeOffsetY,
		pupilRadius,
		0,
		Math.PI * 2
	);
	context.fill();

	// Right pupil
	context.beginPath();
	context.arc(
		x + eyeOffsetX + righteye,
		y - eyeOffsetY,
		pupilRadius,
		0,
		Math.PI * 2
	);
	context.fill();

	// Draw the mouth
	context.fillStyle = "white";
	const mouthWidth = size / 2;
	const mouthHeight = size / 10;
	const mouthOffsetY = size / 5; // Vertical offset for the mouth
	context.fillRect(
		x - mouthWidth / 2,
		y + mouthOffsetY,
		mouthWidth,
		mouthHeight
	);
}
