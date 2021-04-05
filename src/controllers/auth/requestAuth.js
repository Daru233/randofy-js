import config from "config";
import axios from "axios";
import queryString from "query-string";
import { getQueryValue, redirectStringBuilder } from './utility/stringUtils.js';

const CLIENT_ID = config.get("Spotify.CLIENT_ID");
const CLIENT_SECRET = config.get("Spotify.CLIENT_SECRET");
const scopes = 'user-read-private user-read-email';
const redirect_uri = "http://localhost:8080";
const TOKEN_URL = "https://accounts.spotify.com/api/token";

let access_token = "";


export const requestAuth = (req, res) => {
    try {
        console.info("Requesting Redirect... ")
        res.redirect(redirectStringBuilder(scopes, redirect_uri, CLIENT_ID));
    } catch (error) {
        console.warn("Redirect Request Failed.");
        console.log(error);
    }
};

export const codeHandler = (req, res) => {
    res.send("Handling Code");
    console.info("Starting Code Capture...")
    console.log(getQueryValue(req));
    console.info("Code Captured Successfuly.");
    callAuth(getQueryValue(req));
};

const callAuth = (code) => {
    console.info("Building headers and data...");
    const headers = getHeaders();
    const data = queryString.stringify(getData(code));

    console.info("Sending Request...");
    axios.post(TOKEN_URL, data, headers)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

}

const getHeaders = () => {
    const headers = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };
    return headers;
}

const getData = (code) => {
    let data = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirect_uri,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    }
    return data;
}