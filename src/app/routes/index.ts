import express from "express";
import authRoutes from "../modules/auth/auth.route";
const router = express.Router();

const allRoutes = [
  {
    route: authRoutes,
    path: "/users",
  },
];

allRoutes.forEach((item) => router.use(item.path, item.route));

const rootRouter = router;
export default rootRouter;
