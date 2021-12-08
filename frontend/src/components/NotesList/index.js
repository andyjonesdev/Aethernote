import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import  { getNotesOfNotebook }  from '../../store/notes'
import '../NotebooksList/NotebookList.css'

export default function NotesList () {
      const dispatch = useDispatch()
      const { id:notebookId } = useParams()

      useEffect(() => {
            dispatch(getNotesOfNotebook(notebookId))
      }, [notebookId, dispatch])

      const noteObjects =  useSelector(state => (state.notes.notes))
      const notes = noteObjects?.map(object => {
            return <div key={object.id} class='notes'>{object.title}</div>
      })
      return(
            <div className='notes-list'>
                  Notes of Notebook: {notebookId}
                  {notes}
            </div>
      )
}
