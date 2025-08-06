import mongoose from "mongoose";

export const connectDB = async () => {
    try {

       await mongoose.connect(process.env.MONGO_URI);
       console.log("MONGOBD connected success");
    } catch (error) {
        consol.error("Error connecting to MONGODB",error);
        process.exit(1);
    }
};