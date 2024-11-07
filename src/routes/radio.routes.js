import { Router } from "express";
import {
  sendSongData,
  sendSpeechData,
  getMonitoringData,
  getRadioData,
} from "../controllers/radio.controller.js";
import { validateContent } from "../middlewares/content.controller.js";

const router = Router();

// rutas de monitoreo ACR Cloud & Google Cloud
router.post("/song", validateContent, sendSongData);
router.post("/speech", validateContent, sendSpeechData);

router.get("/data", getMonitoringData);

// rutas de AzuraCast
router.get("/radio", getRadioData);

export default router;
