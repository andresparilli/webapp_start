"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use('/', function (req, res) { return res.send("Hola mundo en Typescript!"); });
app.listen(3000, function () { return console.log("Listening"); });
//# sourceMappingURL=index.js.map