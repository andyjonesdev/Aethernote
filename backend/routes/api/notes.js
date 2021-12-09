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
router.get('/notebooks/:id', asyncHandler(async(req, res) => {
      const { id } = req.params
      const foundNotes = await Note.findAll({
            where: {
                  notebookId: id
            }
      })
      if (foundNotes.length > 0) {
            return res.json(foundNotes)
      } else return res.json('No notes were found')
}))

// GET a specific note
router.get('/:id', asyncHandler(async(req, res) => {
      const { id } = req.params
      const foundNote = await Note.findByPk(id)
      if (foundNote) {
            return res.json(foundNote)
      } else return res.json('Requested note could not be found')
}))

// Create a new Note using info supplied in req.body
router.post('/', asyncHandler(async(req, res) => {
      const { userId, title, content, notebookId } = req.body
      const newNote = await Note.create({
            userId,
            title,
            content,
            notebookId
      })
      return res.json(newNote)
}))


// Update a Note's title and/or content in DB
router.patch('/:id', asyncHandler(async(req, res) => {
      const { id:noteId } = req.params
      const noteToEdit = await Note.findByPk(noteId)
      const { title, content } = req.body
      // We either update both fields, update title, or update content
      if (title === null) {
            await noteToEdit.update({
                  content
            })
      } else if (content === null) {
            await noteToEdit.update({ title })
      } else {
            await noteToEdit.update({ title, content })
      }
      return res.json(noteToEdit)
}))

// Delete a Note from DB
router.delete('/:id', asyncHandler(async(req, res) => {
      const { id:noteId } = req.params;
      const noteToDelete = await Note.findByPk(noteId)
      await noteToDelete.destroy()
      return res.json({noteId , message: 'success'})
}))

module.exports = router
