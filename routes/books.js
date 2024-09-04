const express = require("express");
const router = express.Router();

// Import Controller
const { add, update, deletebooks, getbooks, getid } = require("../controllers/bookController");
// APIs Routing Config
router.post('/',add);
router.put('/:id',update);
router.delete('/:id',deletebooks);
router.get('/',getbooks);
router.get('/:genre',getid);
// Export router
module.exports=router;