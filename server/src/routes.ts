import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import ItemsController from "./controllers/ItemsController";

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/items", upload.array("images"), ItemsController.create);
routes.get("/items", ItemsController.index);
routes.get("/items/:id", ItemsController.show);

export default routes;
