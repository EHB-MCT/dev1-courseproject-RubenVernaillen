
"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;
let x = width / 2
let y = height / 2
draweye();

function draweye() {
    Utils.strokeEllipse(x, y, 100, 50)
    Utils.strokeEllipse(x, y, 10, 10)
    Utils.strokeEllipse(x, y, 50, 50)
}