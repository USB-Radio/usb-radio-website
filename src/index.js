import { port } from "./config.js";
import app from "./app.js";
import chalk from "chalk";
import figlet from "figlet";
// import "./scripts/acrcloud_monitor.js";

const main = () => {
  app.listen(port, () => {
    figlet("usb radio", (err, res) => {
      console.log(err || res);
    });
    console.log(chalk.yellow("\n============ Iniciando Servidor ============"));
    console.log(chalk.yellow(`\n* Ejecutando en puerto: ${port}`));
    console.table([
      {
        Categoría: "Cloud Services",
        Servicio: "Google Cloud",
        API: "Speech To Text",
      },
      {
        Categoría: "Audio Recognition",
        Servicio: "ACR Cloud",
        API: "Music Identifier",
      },
      { Categoría: "Streaming", Servicio: "AzuraCast", API: "Radio Streaming" },
    ]);
  });
};

(async () => {
  main();
})();
