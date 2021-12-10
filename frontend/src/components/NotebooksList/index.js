import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { getNotebooks } from '../../store/notebooks'
import './NotebookList.css'

export default function NotebooksList () {
      const dispatch = useDispatch()

      const user = useSelector(state => (state.session.user))

      useEffect(() => {
            dispatch(getNotebooks(user))
      }, [user, dispatch])

      const notebookObjects =  useSelector(state => (state.notebooks.notebooks))
      const notebooks = notebookObjects?.map(object => {
            return <NavLink
            to={`/notebooks/${object.id}/notes`}
            key={object.id} className='notebooks'
            activeClassName='selected-notebook'>
            <div className='title-of-notebook'>
            {object.title}
            </div>
            </NavLink>
      })

      return (
      <div className='notebooks-list'>
            <div className='list-title'>
            My Notebooks
            </div>
            {notebooks}
      </div>)
}
