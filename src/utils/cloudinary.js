import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on cloudinary
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file hasbeen uploaded successfully!
    console.log(result);
    console.log(result.url);
    return result;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locaaly saved temporary file as the upload oprn got failed!!
    return null;
  }
};