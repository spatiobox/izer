import { NestMiddleware } from "@nestjs/common";


export class LoggerMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.log({ headers: req.headers, body: req.body });
        next();
    }

    // async resolve(name:string): Promise<ExpressMiddleware> {
    //     return async (req, res, next) => {
    //         console.log({headers: req.headers, body: req.body});
    //         next();
    //     };

    // }

}