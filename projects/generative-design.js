
"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;


draweye();

function draweye() {
    for (let i = 0; i < 100; i++) {
        let x = Utils.randomNumber(0, width)
        let y = Utils.randomNumber(0, height)
        context.lineWidth = 1;

        Utils.strokeEllipse(x, y, 50, 25)
        context.fillStyle = "rgba(0, 0, 0, 0.1)"
        Utils.fillEllipse(x, y, 45, 20)
        context.fillStyle = Utils.rgb(Utils.randomNumber(0, 360), Utils.randomNumber(0, 360), Utils.randomNumber(0, 360))
        Utils.fillEllipse(x, y, 25, 25)
        context.fillStyle = "#000000"
        Utils.fillEllipse(x, y, 8, 8)
        context.lineWidth = 0.5;
        Utils.drawLine(x, y, x + 15, y + 15)
        Utils.drawLine(x, y, x - 15, y - 15)
        Utils.drawLine(x, y, x + 15, y - 15)
        Utils.drawLine(x, y, x - 15, y + 15)
        Utils.drawLine(x, y, x, y - 20)
        Utils.drawLine(x, y, x - 20, y)
        Utils.drawLine(x, y, x, y + 20)
        Utils.drawLine(x, y, x + 20, y)
        Utils.drawLine(x, y, x + 14, y - 6)
        Utils.drawLine(x, y, x - 14, y - 6)
        Utils.drawLine(x, y, x + 14, y + 6)
        Utils.drawLine(x, y, x - 14, y - 6)
        Utils.drawLine(x, y, x - 14, y + 6)
        Utils.drawLine(x, y, x + 6, y - 14)
        Utils.drawLine(x, y, x - 6, y - 14)
        Utils.drawLine(x, y, x + 6, y + 14)
        Utils.drawLine(x, y, x - 6, y - 14)
        Utils.drawLine(x, y, x - 6, y + 14)

        context.fillStyle = "#FFFFFF"

        Utils.fillEllipse(x - 14, y - 14, 8, 8)
        Utils.fillEllipse(x + 14, y + 14, 4, 4)



    }
}
