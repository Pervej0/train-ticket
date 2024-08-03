import express, { Request, Response } from "express";
const app = express();

// json parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to Train Service Management System Server Site",
  });
});

export default app;
