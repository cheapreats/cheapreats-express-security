import {OauthConfig}  from "../config/oauth";
import {OAuthService} from "../services/OAuthService";

const OAUTH_AUTHORIZE_PATH = '/oauth/authorize';

export async function authorizationMiddleware(req, res, next) {
    if (req.session[OauthConfig.ACCESS_TOKEN_SESSION_VAR]) {
        const user = await OAuthService.getIdentity(req.session[OauthConfig.ACCESS_TOKEN_SESSION_VAR]);
        if (user) {
            req.user_id = user['user_id'];
            return next();
        }
    }
    return res.redirect(OauthConfig.OAUTH_ENDPOINT + OAUTH_AUTHORIZE_PATH + `?response_type=code&client_id=${OauthConfig.CLIENT_ID}`);
}
