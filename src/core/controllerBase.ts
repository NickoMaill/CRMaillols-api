import { Router, Response, Request } from 'express';

export interface AppRequest<T = any> extends Request<any,any,T> {}
export interface AppQuery<T = any> extends Request<any,any,any,T> {}
export interface AppResponse<T = any> extends Response<T> {}

export default class ControllerBase {
    public _route: Router;

    constructor() {
        this._route = Router();
    }
}
