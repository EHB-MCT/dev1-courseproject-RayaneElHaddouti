// Select canvas and set context
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// Adjust canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fill the canvas with a plain color
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);
