const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { User, Notebook, Note } = require('../../db/models');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//backend route hit by getNotebooks
router.get('/user/:id', asyncHandler(async (req, res) => { //displays the logged in user's notebooks
      //grab user obj from req body
      const { id } = req.params
      const foundUser = await User.findByPk(id, {
            include: Notebook
      })

      const notebooks = foundUser.Notebooks

      if (notebooks.length > 0) {
            return res.json(notebooks)
      } else return res.json('No notebooks were found')
}))

router.post('/', restoreUser, asyncHandler(async(req, res, next) => {
      const { title } = req.body

      const createError = new Error('You must login before creating a notebook')
      createError.status = 401
      createError.title = ('Server fetch rejected')
      createError.errors = ['You must login before creating a notebook']

      if (!req.user) return next(createError)

      const userId = req.user.id

      if (userId === undefined) {
            return next(createError)
      } else {
            const newNotebook = await Notebook.create({
                  userId,
                  title
            })
            return res.json(newNotebook)
      }
}))

router.patch('/:id', restoreUser, asyncHandler(async(req, res, next) => {

      const { id } = req.params
      const { title } = req.body
      const notebookToEdit = await Notebook.findByPk(id)
      const editError = new Error('You are not authorized to edit this notebook')
      editError.status = 401
      editError.title = ('Server fetch rejected')
      editError.errors = ['You are not authorized to edit this notebook']

      if (!req.user) return next(editError)

      const sessionUserId = req.user.id

      if (sessionUserId !== notebookToEdit.userId) return next(editError)

      await notebookToEdit.update({ title })
      return res.json(notebookToEdit)
}))

router.delete('/:id', restoreUser, asyncHandler(async(req, res, next) => {
      const { id } = req.params

      const deleteError = new Error('You are not authorized to delete this notebook')
      deleteError.status = 401
      deleteError.title = ('Server fetch rejected')
      deleteError.errors = ['You are not authorized to delete this notebook']

      if (!req.user) return next(deleteError)

      const sessionUserId = req.user.id

      const notebookToDelete = await Notebook.findByPk(id)
      if (notebookToDelete.userId !== sessionUserId) {
            return next(deleteError)
      } else {
            const notebookNotesToDestroy = await Note.findAll({
                  where: { notebookId: id }
            })

            if (notebookNotesToDestroy.length) {
                  for (let i = 0; i < notebookNotesToDestroy.length; i++) {
                        await notebookNotesToDestroy[i].destroy()
                  }
            }

            await notebookToDelete.destroy()
            return res.json({ notebookId: id, message: 'success' })
      }
}))

module.exports = router;
