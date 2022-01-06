"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
const connectDB = (uri) => {
    try {
        (0, mongoose_1.connect)(uri);
        console.log('Succesfully connected to Database!');
    }
    catch (error) {
        console.error(error);
    }
};
exports.connectDB = connectDB;
