import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import  { getNotesOfNotebook }  from '../../store/notes'

export default function NotesList () {
      const dispatch = useDispatch()
      const { id:notebookId } = useParams()

      useEffect(() => {
            dispatch(getNotesOfNotebook(notebookId))
      }, [notebookId])

      const noteObjects =  useSelector(state => (state.notes.notes))
      const notes = noteObjects?.map(object => {
            return <div>{object.title}</div>
      })
      return(
            <div className='NotesList'>
                  Notes of Notebook: {notebookId}
                  {notes}
            </div>
      )
}
