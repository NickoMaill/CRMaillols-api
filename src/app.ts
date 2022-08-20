import express, { NextFunction, Response, Request } from 'express';
import cors from "cors";
import { HttpError } from 'http-errors'
import { StandardError } from './core/standardError';
import listEndpoints from "express-list-endpoints"
import logColors from './helpers/logColors';
import configManager from './manager/configManager';
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

console.log(configManager.__env);


const PORT = process.env.PORT || 8000 || 8001;

app.get("/", (_req: Request, res: Response) => {    
    res.send("<h1>Welcome on CRMaillols Backend</h1><br><span>please visite our website at <a href='https://crmaillols.fr/'>https://crmaillols.fr/</a></span>");
});

app.use(async (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof StandardError) {
        const error = err as StandardError<any>;

        if (!res.headersSent) {
            let statusCode = null;

            if (error.status === 'BAD_REQUEST') statusCode = 400;
            else if (error.status === 'UNAUTHORIZED') statusCode = 401;
            else if (error.status === 'FORBIDDEN') statusCode = 403;
            else if (error.status === 'NOT_FOUND') statusCode = 404;
            else if (error.status === 'UNAVAILABLE') statusCode = 503;
            else statusCode = 500;
        }
    } else if (err instanceof HttpError) {
        const error = (err as Error);
        res.status(err.status).json({ errorCode: 'internal_error', message: "" ? error.message : `Internal Server Error` })
    } else {
        const error =(err as Error);
        res.status(500).json({ errorCode: 'internal_error', message: "" ? error.message : `Internal Server Error` })
    }
});

app.listen(PORT, () => {
    console.log("\n", logColors.BgGreen, logColors.FgBlack, "[Untel's Backend configuration loaded] ⚠️ local only ⚠️", logColors.Reload, "\n");

	for (let variable in configManager.__env) 
        console.log(logColors.FgRed, `${variable.padEnd(30, " ")}`, logColors.Reload, `= ${configManager.__env[variable]}`)

	console.log("\n______________________________________________________________\n");
	console.warn("");

	listEndpoints(app).map((info) => {
		const nameRoute = info.middlewares[1] || info.middlewares[0];
		const arrow: string = "⇨";
		console.info(`${nameRoute.padEnd(30, " ")}`, logColors.FgYellow, `${info.methods[0].padEnd(10)}`, logColors.Reload, `${arrow.padEnd(10, " ")} "${info.path}"`);
	});

	console.warn(logColors.FgMagenta, `[${new Date().toISOString()}] ||===========================================||`, logColors.Reload);
	console.warn(logColors.FgMagenta, `[${new Date().toISOString()}] `, logColors.Reload, logColors.BgGreen, "Untel Official Website Backend startup...", logColors.Reload);
	console.warn(logColors.FgMagenta, `[${new Date().toISOString()}] ||===========================================||`, logColors.Reload);
	console.warn("");

	console.log(`listening on http://localhost:${PORT} ✅`);
})
