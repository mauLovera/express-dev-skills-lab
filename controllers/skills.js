import { Skill } from "../models/skill.js"

function index(req, res) {
  res.render('skills/index', { Skill })
}

export {
  index
}