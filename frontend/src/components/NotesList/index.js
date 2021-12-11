import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory, NavLink, withRouter } from 'react-router-dom'
import { useEffect } from 'react'

import  { getNotesOfNotebook, deleteANote }  from '../../store/notes'
import '../NotebooksList/NotebookList.css'
export default function NotesList () {
      const dispatch = useDispatch()
      const { id:notebookId } = useParams()
      const history = useHistory()

      const sessionUserId = useSelector(state => (state.session.user)).id
      useEffect(() => {
            dispatch(getNotesOfNotebook(notebookId))
      }, [notebookId, dispatch])

      const redirect = () => {
            history.push(`/notebooks/${notebookId}/notes`)
      }

      const noteObjects =  useSelector(state => (state.notes.notes))
      let notes = 'There are no notes in this notebook'
      if (typeof noteObjects !== 'string') {
            notes = noteObjects?.map(object => {
                  return (
                  <div className='make-me-relative'>
                        <NavLink
                        to={`/notebooks/${object.notebookId}/notes/${object.id}`}
                        key={object.id} className='notes'
                        activeClassName='selected-note'>
                              <div className='title-of-note'>
                              {object.title}
                              </div>
                        </NavLink>
                        <button
                        onClick={e => {
                        dispatch(deleteANote(object.id))
                        history.push(`/notebooks/${object.notebookId}/notes`)
                        }}
                        className='delete-note-button'>
                        <i className="far fa-trash-alt"></i>
                        </button>
                  </div>
                  )
            })
      }
      return(
            <div className='notes-list'>
                  <div className='list-title'>
                  Notes in this Notebook
                  </div>
                  <button onClick={redirect} className='add-note-button'>Add Note</button>
                  {notes}
            </div>
      )
}
