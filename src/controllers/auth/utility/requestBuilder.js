import config from "config";
import queryString from "query-string";
import axios from "axios";

const CLIENT_ID = config.get("Spotify.CLIENT_ID");
const CLIENT_SECRET = config.get("Spotify.CLIENT_SECRET");
const scopes = 'user-read-private user-read-email';
const redirect_uri = "http://localhost:8080/requestTokens";
const TOKEN_URL = "https://accounts.spotify.com/api/token";
let access_token = "";


export const buildRequest = (code) => {
    const header = getHeaders();
    const data = queryString.stringify(getData(code));
    sendRequest(header, data);
}

const sendRequest = async (header, data) => {
    await axios.post(TOKEN_URL, data, header)
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
