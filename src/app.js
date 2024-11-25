import express from "express";
import morgan from "morgan";
import cors from "cors";
import radioRoutes from "./routes/radio.routes.js";

const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [
  "http://64.227.11.166:5173", // Origen existente
  "http://radiousbbog.tech"    // Nuevo origen
];

// Configuración de CORS con múltiples orígenes
app.use(
  cors({
    origin: (origin, callback) => {
      // Si no hay origen (por ejemplo, solicitud desde Postman) o el origen está en la lista permitida
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Permitir acceso
      } else {
        callback(new Error("No permitido por CORS")); // Bloquear acceso
      }
    }
  })
);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/api", radioRoutes);

export default app;
