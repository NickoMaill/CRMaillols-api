import { NextFunction, Request, Response } from "express";
import { rateLimit } from "express-rate-limit";
import path from "path";

export const serverLimiter = rateLimit({
    windowMs: 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
	handler: (_req: Request, res: Response, next: NextFunction) => {
		console.warn("you've done too many requests...");
		res.status(403).sendFile(path.join(__dirname, '/views/403.html'))
        next();
	},
});