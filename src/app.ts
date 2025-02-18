import express, { Request, Response } from "express";
import notFound from "./app/middleware/notFound";
import rootRouter from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
const app = express();

// json parser
app.use(express.json());

// all routes
app.use("/api/v1", rootRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to Train Service Management System Server Site",
  });
});

app.use(globalErrorHandler);
// not found api middleware
app.use(notFound);

export default app;
