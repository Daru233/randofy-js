

export const redirectStringBuilder = (scopes, redirect_uri, CLIENT_ID) => {
    const redirectString =
    'https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' +
    CLIENT_ID +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri);
    return redirectString;
}


export const getQueryValue = (req) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const arrayResult = fullUrl.split("=");
    const queryParamsValue = arrayResult[1];
    return queryParamsValue;
}