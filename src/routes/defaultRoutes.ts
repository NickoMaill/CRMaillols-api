import defaultController from "~/controllers/defaultController";

defaultController._route.get("/", defaultController.defaultController)

export const route = defaultController._route