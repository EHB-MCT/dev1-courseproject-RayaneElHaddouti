//Rayane

import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";
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
			size: 50,
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
	context.fillStyle = color;
	Utils.fillEllipse(x * 2, y, x, y - space);

	context.fillStyle = "white";
	// Left and right eyes as rectangles
	Utils.fillRect(x * 1.5, y, size / 2, size); 
	Utils.fillRect(x * 2.5, y, size / 2, size);

	// Mouth as a rectangle
	Utils.fillRect(x * 1.5 + size / 2, y + size / 1.5, size, size / 5);

	context.fillStyle = "black";
	// Pupil positions
	Utils.fillRect(x * 1.5 + lefteye, y, size / 8, size / 4); 
	Utils.fillRect(x * 2.5 + righteye, y, size / 8, size / 4);
}
