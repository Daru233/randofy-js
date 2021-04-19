import config from "config";
import { app } from "./app.js";

const PORT = process.env.SERVER_PORT || config.get("App.PORT");

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});