const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { User, Notebook, Note } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//backend route hit by getNotebooks
router.get('/user/:id', asyncHandler(async (req, res) => { //displays the logged in user's notebooks
      //grab user obj from req body
      const { id } = req.params
      const foundUser = await User.findByPk(id, {
            include: Notebook       //how do i grab these now?
      })

      const notebooks = foundUser.Notebooks

      if (notebooks.length > 0) {
            return res.json(notebooks)
      } else return res.json('No notebooks were found')
}))

module.exports = router;
