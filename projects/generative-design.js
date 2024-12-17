
"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;


draweye();

function draweye() {
    //for (let i = 0; i < 10; i++) {
    let x = Utils.randomNumber(0, width)
    let y = Utils.randomNumber(0, height)




    Utils.strokeEllipse(x, y, 100, 50)
    context.fillStyle = Utils.rgb(Utils.randomNumber(0, 360), Utils.randomNumber(0, 360), Utils.randomNumber(0, 360))
    Utils.fillEllipse(x, y, 50, 50)
    context.fillStyle = "#000000"
    Utils.fillEllipse(x, y, 10, 10)
    context.lineWidth = 2;
    Utils.drawLine(x, y, x + 30, y + 30)
    Utils.drawLine(x, y, x - 30, y - 30)
    Utils.drawLine(x, y, x + 30, y - 30)
    Utils.drawLine(x, y, x - 30, y + 30)
    Utils.drawLine(x, y, x, y - 40)
    Utils.drawLine(x, y, x - 40, y)
    Utils.drawLine(x, y, x, y + 40)
    Utils.drawLine(x, y, x + 40, y)
    Utils.drawLine(x, y, x + 28, y - 12)
    Utils.drawLine(x, y, x - 28, y - 12)
    Utils.drawLine(x, y, x + 28, y + 12)
    Utils.drawLine(x, y, x - 28, y - 12)
    Utils.drawLine(x, y, x - 28, y + 12)
    Utils.drawLine(x, y, x + 12, y - 28)
    Utils.drawLine(x, y, x - 12, y - 28)
    Utils.drawLine(x, y, x + 12, y + 28)
    Utils.drawLine(x, y, x - 12, y - 28)
    Utils.drawLine(x, y, x - 12, y + 28)



    //}
}
