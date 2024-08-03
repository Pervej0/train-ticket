import { Server } from "http";
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";
const PORT = 8080;

let server: Server;

const main = async () => {
  await mongoose.connect(config.URI as string);
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  server = app.listen(config.PORT, () => {
    console.log("Server is running on port: ", PORT);
  });
};

// unhandledRejection and uncaughtException error handling--
process.on("unhandledRejection", () => {
  console.log("unhandledRejection error detected, server is shutting down!");

  if (server) {
    server.close();
    process.exit(1);
  } else {
    process.exit(1);
  }
});

process.on("uncaughtException", () => {
  console.log("UncaughtException error detected, server is shutting down!");
  process.exit(1);
});

try {
  main();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
  console.log(error);
}
