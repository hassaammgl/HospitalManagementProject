import mongoose, { Mongoose } from "mongoose";

const mongo_uri: string = process.env.MONGODB_URI!;
const dbName: string = process.env.MONGODB_DATABASE_NAME!;

const connectDatabase = async () => {
  return new Promise<Mongoose>((resolve, reject) => {
    mongoose
      .connect(mongo_uri, { dbName })
      .then((mongoose: any) => {
        resolve(mongoose);
        console.log("connected to Mongoose");
      })
      .catch((err: any) => {
        console.log("error connecting to Mongoose");
        reject(err);
      });
  });
};

export default connectDatabase;
