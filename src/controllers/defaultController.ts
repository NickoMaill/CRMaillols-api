import ControllerBase, { AppRequest, AppResponse } from "~/core/controllerBase";
import logManager from "~/manager/logManager";

class DefaultController extends ControllerBase {
    constructor() {
        super()
    }

    public async defaultController(req: AppRequest, res: AppResponse) {
            logManager.error("hello", "log ok")
            res.send("Salut default controller")
    }
}

export default new DefaultController()