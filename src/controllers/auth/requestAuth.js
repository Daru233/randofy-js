import config from "config";
import axios from "axios";
import btoa from "btoa";
import queryString from "query-string";
import { getQueryValue, redirectStringBuilder} from './utility/stringUtils.js';

const CLIENT_ID = config.get("Spotify.CLIENT_ID");
const CLIENT_SECRET = config.get("Spotify.CLIENT_SECRET");
const scopes = 'user-read-private user-read-email';
const redirect_uri = "http://localhost:8080";
const TOKEN_URL = "https://accounts.spotify.com/api/token";


const callAuth = (code) => {

    const headers = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };

    let data = {
        grant_type: "client_credentials",
        code: code,
        redirectUri: redirect_uri,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    }

    // const requestBody = accessTokenBodyBuilder(queryValue, CLIENT_ID, CLIENT_SECRET, redirect_uri);

    axios.post(
        TOKEN_URL,
        queryString.stringify(data),
        // requestBody,
        headers
    )
    .then(response => {
        console.log(response);
    })
    .catch(response => {
        console.log(response);
    });

}

export const requestAuth = (req, res) => {
    try {
        console.log("Requesting Auth");
        res.redirect(redirectStringBuilder(scopes, redirect_uri, CLIENT_ID));
    } catch (error) {
        console.log(error);
    }
};

export const codeHandler = (req, res) => {
    res.send("Hello World!");
    console.log(getQueryValue(req));
    console.log("Code captured successfuly");
    console.log("Fetching access token");
    callAuth(getQueryValue(req));
};
