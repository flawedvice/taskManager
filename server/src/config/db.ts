import { Console } from "console";
import { connect } from "mongoose";

export const connectDB = (uri: string): void => {
    try {
        connect(uri)
            .then(data => console.log('Successfully connected to Database'));
    }
    catch (error: any) {
        console.log(error);
    }
};