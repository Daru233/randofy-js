import Express from "express";
import cors from "cors";
import config from "config";
import { requestAuth, codeHandler } from "./controllers/auth/requestAuth.js";
import url from 'url';

const app = Express();
const PORT = config.get("App.PORT");

app.get("/", codeHandler);
app.get("/login", requestAuth);

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});
