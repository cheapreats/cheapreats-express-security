import {authorizationMiddleware} from "./middlewares/authorizationMiddleware";

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
    app.use(config.path, authorizationMiddleware);
}
