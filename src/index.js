import connectDB from "./db/index.js";
import { app } from "../commented/app.js";

const port = process.env.PORT || 5050;

console.log(port);
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    }).on('error' , (error) => {
        console.log(error);
        process.exit(1)
    })
  })
  .catch((err) => {
    console.error(`MONGODB CONNECTION FAILED !! ${err}`);
    process.exit(1);
  });
