import config from "config";
import { app } from "./app.js";

const PORT = config.get("App.PORT");

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});