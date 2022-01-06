import { connect } from "mongoose";

export const connectDB = (uri: string): void => {
    try {
        connect(uri);
        console.log('Succesfully connected to Database!');
    }
    catch (error) {
        console.error(error);
    }
};