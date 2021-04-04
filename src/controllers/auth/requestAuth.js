import config from "config";
import { getQueryValue, redirectStringBuilder } from './utility/stringUtils.js';
import url from 'url';

const CLIENT_ID = config.get("Spotify.CLIENT_ID");
const CLIENT_SECRET = config.get("Spotify.CLIENT_SECRET");
const scopes = 'user-read-private user-read-email';
const redirect_uri = "http://localhost:8080"

const handleRedirect = () => {
    console.log("Haspidufhapoweuhfaowiuef");
}

const onPageLoad = (req) => {
    console.log(req.query.code);
}

const fetchAccessToken = () => {

}

export const requestAuth = async (req, res) => {
    try {
        console.log("Requesting Auth");
        res.redirect(redirectStringBuilder(scopes, redirect_uri, CLIENT_ID));
    } catch (error) {
        console.log(error);
    }
};

export const codeHandler = async (req, res) => {
    res.send("Hello World!");

    console.log(getQueryValue(req));
};
