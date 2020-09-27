import {authorizationMiddleware} from "./middlewares/authorizationMiddleware";
import {OauthConfig}             from "./config/oauth";

/**
 * @typedef OAuthConfig
 * @property {!string} clientId Client ID
 * @property {!any} path Path that requires OAuth
 */

/**
 *
 * @param app
 * @param {!OAuthConfig} config
 */
export function configureOAuth(app, config) {
    OauthConfig.CLIENT_ID = config.clientId;
    app.use(config.path, authorizationMiddleware);
}
