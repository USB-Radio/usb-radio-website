import express from "express";
import morgan from "morgan";
import cors from "cors";
import radioRoutes from "./routes/radio.routes.js";

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: "http://radiousbbog.tech",
  })
);
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/api", radioRoutes);
app.use("/api", radioRoutes);

export default app;
