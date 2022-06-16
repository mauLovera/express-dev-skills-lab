import { Router } from "express";
import * as skillsCtrl from "../controllers/skills.js";

// skillsCtrl is an object

const router = Router()

router.get('/', skillsCtrl.index)

export {
  router
}