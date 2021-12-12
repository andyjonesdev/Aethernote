import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { getNotebooks, createANotebook, editANotebook, deleteANotebook } from '../../store/notebooks'
import './NotebookList.css'

export default function NotebooksList () {
      const dispatch = useDispatch()
      const history = useHistory()

      const user = useSelector(state => (state.session.user))

      useEffect(() => {
            dispatch(getNotebooks(user))
      }, [user, dispatch])

      const notebookObjects =  useSelector(state => (state.notebooks.notebooks))
      const notebooks = notebookObjects?.map(object => {
            return(
            <div className='make-me-relative'>
                  <NavLink
                  to={`/notebooks/${object.id}/notes`}
                  key={object.id} className='notebooks'
                  activeClassName='selected-notebook'>
                        <div className='title-of-notebook'>
                        {object.title}
                        </div>
                  </NavLink>
                  <button
                  onClick={() => {
                  dispatch(deleteANotebook(+object.id))
                  history.push(`/notebooks`)
                  }}
                  className='delete-note-button'>
                  <i className="far fa-trash-alt"></i>
                  </button>
                  <button
                  onClick={() => {
                  dispatch(deleteANotebook(+object.id))
                  history.push(`/notebooks`)
                  }}
                  className='edit-note-button'>
                  <i class="far fa-edit"></i>
                  </button>
            </div>
            )
      })

      return (
      <div className='notebooks-list'>
            <div className='list-title'>
            My Notebooks
            </div>
            <button onClick={() => {
                  dispatch(createANotebook('Test Notebook'))
            }} className='add-note-button'>Add Notebook </button>
            <button
            className='add-note-button'
            onClick={() => {
                  dispatch(editANotebook({ notebookId: 12, title: 'New Short Title Test' }))
            }}
            >
                  Test Edit Notebook
            </button>
            {notebooks}
      </div>)
}
