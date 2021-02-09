"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.port || 4005;
var runningMessage = "Testing NodeJS APP...";
app.get("/", function (req, res) {
    res.send(runningMessage);
});
var server = app.listen(port, function () {
    console.log("server now is running at port: " + port);
});
module.exports;
