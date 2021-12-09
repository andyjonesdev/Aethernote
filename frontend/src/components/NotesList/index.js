import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

import  { getNotesOfNotebook, deleteANote }  from '../../store/notes'
import '../NotebooksList/NotebookList.css'

export default function NotesList () {
      const dispatch = useDispatch()
      const { id:notebookId } = useParams()

      useEffect(() => {
            dispatch(getNotesOfNotebook(notebookId))
      }, [notebookId, dispatch])

      const noteObjects =  useSelector(state => (state.notes.notes))
      let notes = 'There are no notes in this notebook'
      if (typeof noteObjects !== 'string') {
            notes = noteObjects?.map(object => {
                  return (<NavLink
                  to={`/notebooks/${object.notebookId}/notes/${object.id}`}
                  key={object.id} className='notes'
                  activeClassName='selected-note'>
                  <div className='title-of-note'>
                  {object.title}
                  </div>
                  <button
                  onClick={() => {
                        dispatch(deleteANote(object.id))
                  }}
                  className='delete-note-button'>
                  <i class="far fa-trash-alt"></i>
                  </button>
                  </NavLink>)
            })
      }
      return(
            <div className='notes-list'>
                  Notes of Notebook: {notebookId}
                  {notes}
            </div>
      )
}
