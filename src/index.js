import Express from "express";
import cors from "cors";
import config from "config";
import { requestAuth} from "./controllers/auth/requestAuth.js";
import { requestTokens } from './controllers/auth/requestTokens.js';
import { home } from "./controllers/home.js";
import url from 'url';

const app = Express();
const PORT = config.get("App.PORT");

app.get("/", home);
app.get("/login", requestAuth);
app.get("/requestTokens", requestTokens)

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});
