
"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;
let eyelist = [];
for (let i = 0; i < 10; i++) {
    let x = Utils.randomNumber(0, width)
    let y = Utils.randomNumber(0, height)
    eyelist.draweye.push(createye(x, y))
}

function createye(x, y) {

    return {
        oogX: x,
        oogY: y,
        irisX: x,
        irisY: y,
        iriskleur: Utils.rgb(Utils.randomNumber(0, 360), Utils.randomNumber(0, 360), Utils.randomNumber(0, 360)),

    }
}





draweye();



function draweye() {




    context.lineWidth = 1;
    Utils.strokeEllipse(eyelist.oogX, eyelist.oogY, 50, 25)
    context.fillStyle = "rgba(0, 0, 0, 0.1)"
    Utils.fillEllipse(eyelist.oogX, eyelist.oogX, 45, 20)
    context.fillStyle = eyelist.iriskleur
    Utils.fillEllipse(eyelist.irisX, eyelist.irisY, 25, 25)
    context.fillStyle = "#000000"
    Utils.fillEllipse(eyelist.irisX, eyelist.irisY, 8, 8)
    context.lineWidth = 0.5;
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX + 15, eyelist.irisY + 15)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 15, eyelist.irisY - 15)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX + 15, eyelist.irisY - 15)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 15, eyelist.irisY + 15)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX, eyelist.irisY - 20)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 20, eyelist.irisY)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX, eyelist.irisY + 20)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX + 20, eyelist.irisY)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX + 14, eyelist.irisY - 6)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 14, eyelist.irisY - 6)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX + 14, eyelist.irisY + 6)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 14, eyelist.irisY - 6)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 14, eyelist.irisY + 6)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX + 6, eyelist.irisY - 14)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 6, eyelist.irisY - 14)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX + 6, eyelist.irisY + 14)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 6, eyelist.irisY - 14)
    Utils.drawLine(eyelist.irisX, eyelist.irisY, eyelist.irisX - 6, eyelist.irisY + 14)

    context.fillStyle = "#FFFFFF"

    Utils.fillEllipse(eyelist.irisX - 14, eyelist.irisY - 14, 8, 8)
    Utils.fillEllipse(eyelist.irisX + 14, eyelist.irisY + 14, 4, 4)

}



