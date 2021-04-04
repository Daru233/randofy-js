import config from "config";
import axios from "axios";
import queryString from "query-string";
import { getQueryValue, redirectStringBuilder } from './utility/stringUtils.js';

const CLIENT_ID = config.get("Spotify.CLIENT_ID");
const CLIENT_SECRET = config.get("Spotify.CLIENT_SECRET");
const scopes = 'user-read-private user-read-email';
const redirect_uri = "http://localhost:8080";
const TOKEN_URL = "https://accounts.spotify.com/api/token";


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

const callAuth = (code) => {

    const headers = getHeaders();
    const data = getData(code);

    axios.post(
        TOKEN_URL,
        queryString.stringify(data),
        headers
    )
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