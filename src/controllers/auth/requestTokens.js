import logging from '../../logger/logger.js';
import { getQueryValue } from './utility/stringUtils.js';
import { buildRequest } from "./utility/requestBuilder.js";


const NAMESPACE = 'requestTokens'

export const requestTokens = (req, res) => {
    res.send("Requesting Tokens...");
    logging.info(NAMESPACE, "Building Request");
    buildRequest(getQueryValue(req));
};
