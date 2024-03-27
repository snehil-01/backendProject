/*require("dotenv").config({
  path: "./.env",
});*/   // not working
import dotenv from 'dotenv' // isko jld se jld setup karo taaki saari files m env varibles availble hojae
import connectDB from "./db/index.js";  //poora likho extenttion sahit

dotenv.config({
    path: './.env'
})
connectDB();

/*
    database se baat krte waqt error aa skti h --> try catch
    database dusre continent mein rakha rehta  toh baat krne mein time lagta hain -> code async rehta h mtlb

*/

/*

import express from "express";
const app = express();
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); // iske aage slash / and database ka naam bhi dena padta hain
    app.on("error", (error) => {
      console.log(error);
      process.exit(1);  // seedha program band krdo mtlb server band krdo
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`ERROR: ${error}`);
    process.exit(1);
  }
})(); // iffe  ke aage ; bhi ek prof practise hain kai baar iske brakets uske uper wale se merge hojaate hain

*/
