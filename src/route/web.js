import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/huyvu", (req, res) => {
    return res.send("Tran Huy Vu");
  });
  return app.use("/", router);
};
module.exports = initWebRoute;
