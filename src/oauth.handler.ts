// tslint:disable-next-line: quotemark
import { AuthorizationCodeModel, Client, User, AuthorizationCode, Callback, Token } from "oauth2-server";


export class OAuthHandler implements AuthorizationCodeModel {
    generateRefreshToken?(client: Client, user: User, scope: string | string[], callback?: Callback<string>): Promise<string> {
        throw new Error("Method not implemented.");
    } generateAuthorizationCode?(client: Client, user: User, scope: string | string[], callback?: Callback<string>): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getAuthorizationCode(authorizationCode: string, callback?: Callback<AuthorizationCode>): Promise<false | "" | 0 | AuthorizationCode> {
        throw new Error("Method not implemented.");
    }
    // tslint:disable-next-line: max-line-length
    saveAuthorizationCode(code: AuthorizationCode, client: Client, user: User, callback?: Callback<AuthorizationCode>): Promise<false | "" | 0 | AuthorizationCode> {
        throw new Error("Method not implemented.");
    }
    revokeAuthorizationCode(code: AuthorizationCode, callback?: Callback<boolean>): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    validateScope?(user: User, client: Client, scope: string | string[], callback?: Callback<string | false | 0>): Promise<string | false | 0 | string[]> {
        throw new Error("Method not implemented.");
    }
    generateAccessToken?(client: Client, user: User, scope: string | string[], callback?: Callback<string>): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getClient(clientId: string, clientSecret: string, callback?: Callback<false | "" | 0 | Client>): Promise<false | "" | 0 | Client> {
        throw new Error("Method not implemented.");
    }
    saveToken(token: Token, client: Client, user: User, callback?: Callback<Token>): Promise<false | "" | 0 | Token> {
        throw new Error("Method not implemented.");
    }
    getAccessToken(accessToken: string, callback?: Callback<Token>): Promise<false | "" | 0 | Token> {
        throw new Error("Method not implemented.");
    }
    verifyScope(token: Token, scope: string | string[], callback?: Callback<boolean>): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


}