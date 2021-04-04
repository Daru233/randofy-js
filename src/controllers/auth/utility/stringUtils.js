

export const redirectStringBuilder = (scopes, redirect_uri, CLIENT_ID) => {
    let redirectString ='https://accounts.spotify.com/authorize';
    redirectString += '?response_type=code';
    redirectString += '&client_id=' + CLIENT_ID;
    redirectString += (scopes ? '&scope=' + encodeURIComponent(scopes) : '');
    redirectString += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    return redirectString;
}


export const getQueryValue = (req) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const arrayResult = fullUrl.split("=");
    const queryParamsValue = arrayResult[1];
    return queryParamsValue;
}
