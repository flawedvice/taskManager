"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
const connectDB = (uri) => {
    try {
        (0, mongoose_1.connect)(uri)
            .then(data => console.log('Successfully connected to Database'));
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectDB = connectDB;
