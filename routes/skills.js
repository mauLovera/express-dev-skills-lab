import { Router } from "express";
import * as skillsCtrl from "../controllers/skills.js";
// skillsCtrl is an object

const router = Router()

// GET - localhost:3000/skills
router.get('/', skillsCtrl.index)

// GET - localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

// GET - localhost:3000/skills/show
router.get('/:id', skillsCtrl.show)

// POST - localhost:3000/skills/new
router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)

export {
  router
}