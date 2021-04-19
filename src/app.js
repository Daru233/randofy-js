import Express from "express";
import { requestAuth} from "./controllers/auth/requestAuth.js";
import { requestTokens } from './controllers/auth/requestTokens.js';
import { home } from "./controllers/home.js";

export const app = Express();


app.get("/", home);
app.get("/login", requestAuth);
app.get("/requestTokens", requestTokens)
