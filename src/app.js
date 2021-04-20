import Express from "express";
import { requestAuth} from "./controllers/auth/requestAuth.js";
import { requestTokens } from './controllers/auth/requestTokens.js';
import { home } from "./controllers/home.js";
import logging from "./logger/logger.js";

export const app = Express();
 
const NAMESPACE = "App";

logging.info(NAMESPACE, "Starting App");

app.get("/", home);
app.get("/login", requestAuth);
app.get("/requestTokens", requestTokens);
