const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { User, Notebook, Note } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

router.get('/notebooks', asyncHandler(async (req, res) => { //displays the logged in user's notebooks
      //grab user obj from req body
      const { id } = req.body
      const foundUser = User.findByPk(id, {
            include: Notebook
      })
      //find this user's notebooks
      const userId = foundUser.id
      const notebooks = Notebook.findAll({
            where: {
                  userId
            }
      })
      if (notebooks.length > 0) {
            return res.json(notebooks)
      } else return res.json('No notebooks were found')
}))

module.exports = router;
