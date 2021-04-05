import { getQueryValue } from './utility/stringUtils.js';
import { buildRequest } from "./utility/requestBuilder.js";


export const requestTokens = (req, res) => {
    res.send("Requesting Tokens...");
    console.log("Auth Success");
    console.log(getQueryValue(req));
    console.log("Building Request");
    buildRequest(getQueryValue(req));
};
