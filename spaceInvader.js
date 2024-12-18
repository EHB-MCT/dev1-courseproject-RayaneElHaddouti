/*
Rayane El Haddouti
*/
/** @type {CanvasRenderingContext2D} */
    let context

    let canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let size = 50;
    let x = 50;
    let y = 50;

    let StartX = x + (size * 6) / 2;
    let StartY = y + (size * 6) / 2;

    // Dessiner le fond noir avant les signatures
    blackBackground(x, y);

    signature(StartX -75, StartY -100, size, size);
    signature(StartX + 25, StartY - 100, size, size);
    signature(StartX - 75, StartY + 0, size*3, size);
    signature(StartX - 125, StartY - 50, size*5, size);
    signature(StartX - 125, StartY + 50, size*5, size);


    function blackBackground(x, y) {
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(x, y, size * 6, size * 6);
        context.fill();
    }

    function signature(x, y, w, h) {
        context.beginPath();
        context.fillStyle = "purple";
        context.fillRect(x, y, w, h);
        context.fill();
    }