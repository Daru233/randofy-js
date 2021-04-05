import { getQueryValue } from './utility/stringUtils.js';
import { buildRequest } from "./utility/requestBuilder.js";
import config from "config";


const CLIENT_ID = config.get("Spotify.CLIENT_ID");
const CLIENT_SECRET = config.get("Spotify.CLIENT_SECRET");
const scopes = 'user-read-private user-read-email';
const redirect_uri = "http://localhost:8080/requestTokens";
const TOKEN_URL = "https://accounts.spotify.com/api/token";
let access_token = "";

export const requestTokens = (req, res) => {
    res.send("Requesting Tokens...");
    console.log("Auth Success");
    console.log(getQueryValue(req));
    console.log("Building Request");
    buildRequest(getQueryValue(req));
};
