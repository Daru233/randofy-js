import config from "config";
import { app } from "./app.js";
import logging from "./logger/logger.js";

const NAMESPACE = "Server";
const PORT = process.env.SERVER_PORT || config.get("App.PORT");

app.listen(PORT, () => {
    logging.info(NAMESPACE, "Starting server at http://localhost:" + PORT);
});