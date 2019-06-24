import {  NestMiddleware} from "@nestjs/common";
import OAuth2Server = require("oauth2-server");
import {oauth2Model} from "../oauth/models";

const oauth2Server = new OAuth2Server({
    model: oauth2Model
});
 
export class OAuthMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: () => void) {
        const options: undefined | any = {};
        const request = new OAuth2Server.Request(req);
        const response = new OAuth2Server.Response(res);
        console.log(request.headers);
        try {
            const token = await oauth2Server.authenticate(request, response, options);
            req.user = token;
            next();
        } catch (err) {
            res.status(err.code || 500).json(err);
        }
    }

    // async resolve(authenticateOptions?: any): Promise<ExpressMiddleware> {
    //     return async (req, res, next) => {
    //         const options: undefined | any = authenticateOptions || {};
    //         const request = new OAuth2Server.Request(req);
    //         const response = new OAuth2Server.Response(res);
    //         console.log(request.headers);
    //         try {
    //             const token = await oauth2Server.authenticate(request, response, options);
    //             req.user = token;
    //             next();
    //         } catch (err) {
    //             res.status(err.code || 500).json(err);
    //         }
    //     };

    // }

}