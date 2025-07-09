import  { Router } from "express";
const routes=new Router();

import customers from "./app/controllers/CustomersController";


routes.get("/customers",customers.index);
routes.get("/customers/:id",customers.show);
routes.post("/customers",customers.create);
routes.put("/customers/:id",customers.update);
routes.delete("/customers",customers.destroy);

export default routes;
