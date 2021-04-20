import config from 'config';
import logging from '../../logger/logger.js';
import { redirectStringBuilder } from './utility/stringUtils.js';

const NAMESPACE = 'requestAuth'
const CLIENT_ID = config.get('Spotify.CLIENT_ID');
const scopes = 'user-read-private user-read-email';
const redirect_uri = 'http://localhost:8080/requestTokens';


export const requestAuth = (req, res) => {
    try {
        logging.info(NAMESPACE, "Requesting Authorization");
        res.redirect(redirectStringBuilder(scopes, redirect_uri, CLIENT_ID));
    } catch (error) {
        logging.error(NAMESPACE, "Authorization Request Failed.", error);
    }
};
