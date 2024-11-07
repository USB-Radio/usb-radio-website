import chalk from "chalk";
import RadioDataFormat from "../scripts/formatRadioData.js";
import { getRadioStatus } from "../api/apis.js";
import { AzuraUrl } from "../config.js";

// Variable global para almacenar los datos recibidos
let monitoringData = null;

// Guarda los datos obtenidos de acrcloud_monitor.
export const sendSongData = async (req, res) => {
  try {
    console.log(chalk.green("\n============ Datos de ACR Cloud ============"));
    monitoringData = req.body;
    res.status(200).send({
      message: "Los datos han sido guardados",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const sendSpeechData = async (req, res) => {
  try {
    // const radioData = await
    console.log(chalk.green("\n========== Datos de Google Cloud ============"));
    monitoringData = req.body;
    res.status(200).send({
      message: "Los datos han sido guardados",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Envia los datos almacenados de acrcloud_monitor.
export const getMonitoringData = async (req, res) => {
  try {
    res.status(200).json(monitoringData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Obtiene los datos de la API de AzuraCast
export const getRadioData = async (req, res) => {
  try {
    const radioData = await getRadioStatus(AzuraUrl);
    const radio = RadioDataFormat(radioData.data);
    res.status(200).json(radio);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
