import config from "config";
import { redirectStringBuilder } from './utility/stringUtils.js';

const CLIENT_ID = config.get("Spotify.CLIENT_ID");
const scopes = 'user-read-private user-read-email';
const redirect_uri = "http://localhost:8080/requestTokens";


export const requestAuth = (req, res) => {
    try {
        console.info("Requesting Authorization");
        console.log("Requesting Authorization");
        res.redirect(redirectStringBuilder(scopes, redirect_uri, CLIENT_ID));
    } catch (error) {
        console.warn("Authorization Request Failed.");
        console.log(error);
    }
};
