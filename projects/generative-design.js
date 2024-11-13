
"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


draw();
function draw() {

    context.lineWidth = 5;
    context.fillstyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height);




    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {


            if (Utils.randomNumber(0, 1)) {

                strokeCircle(canvas.width / 2, canvas.height / 2, i * 10);
            } else {

                strokeCircle(canvas.width / 2, canvas.height / 2, i * 50);
            }
        }
    }
}


function strokeCircle(x, y, radius) {

    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    context.strokeStyle = "rgb(" + red + "," + green + "," + blue + ")";


    Utils.strokeCircle(x, y, radius);
}