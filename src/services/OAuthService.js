import axios            from "axios";
import {OauthConfig} from "../config/oauth";
import querystring      from 'querystring';

const OAUTH_TOKEN_PATH    = '/oauth/token';
const OAUTH_IDENTITY_PATH = '/oauth/identity';

export class OAuthService {

    static async getAccessToken(authCode) {
        const response = await axios.post(
            OauthConfig.OAUTH_ENDPOINT + OAUTH_TOKEN_PATH,
            querystring.stringify({
                code: authCode,
                grant_type: 'authorization_code',
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
        return response['data']['access_token'];
    }

    static async getIdentity(accessToken) {
        const response = await axios.get(`${OauthConfig.OAUTH_ENDPOINT}${OAUTH_IDENTITY_PATH}?token=${accessToken}`);
        return response['data'];
    }

}
