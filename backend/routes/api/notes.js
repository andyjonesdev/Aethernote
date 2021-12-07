// TODO
// write action creator
// write reducer case
// write thunk and use appropriately

const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { Notebook, Note } = require('../../db/models');

const router = express.Router();

// all routes will be prefixed by /notes
// GET Notes attached to a specific Notebook
router.get('notebooks/:id', asyncHandler(async(req, res) => {
      const { id } = req.params
      const foundNotes = Note.findAll({
            where: {
                notebookId: id
            }
      })
      if (foundNotes.length > 0) {
            return res.json(foundNotes)
      } else return res.json('No notes were found')
}))

module.exports = router
