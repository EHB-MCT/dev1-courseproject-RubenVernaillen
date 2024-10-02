drawLine();

function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    context.lineWidth = 1
    context.strokeStyle = 'black'
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.stroke();
    context.fillStyle = 'black'
    context.fill();
    context.closePath();
    context.beginPath();
    context.strokeStyle = 'pink'
    context.moveTo(200, 100);
    context.lineTo(250, 100);
    context.lineTo(250, 150);
    context.lineTo(350, 150);
    context.lineTo(350, 350);
    context.lineTo(300, 350);
    context.lineTo(300, 250);
    context.lineTo(250, 250);
    context.lineTo(250, 200);
    context.lineTo(200, 200);
    context.lineTo(200, 250);
    context.lineTo(150, 250);
    context.lineTo(150, 350);
    context.lineTo(100, 350);
    context.lineTo(100, 150);
    context.lineTo(200, 150);
    context.lineTo(200, 100);
    context.stroke();
    context.fillStyle = 'pink'
    context.fill();
}