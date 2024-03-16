import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log(connnectionInstance); // kaafi bada object rehta h yeh
    console.log(
      `MongoDB connected successfully || DB HOST: ${connnectionInstance.connection.host}`   // last statement yeh batata h ki konsa db connected h. prod ka db alag hota h dev ka alag and testing ka alag. isiliye doubke check krne ke lie!!
    );
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB