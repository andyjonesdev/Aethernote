import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { getNotebooks } from '../../store/notebooks'

export default function NotebooksList () {
      const dispatch = useDispatch()

      const user = useSelector(state => (state.session.user))

      useEffect(() => {
            dispatch(getNotebooks(user))
      }, [user, dispatch])

      const notebookObjects =  useSelector(state => (state.notebooks.notebooks))
      const notebooks = notebookObjects?.map(object => {
            return <div>{object.title}</div>
      })

      return (
      <div>
            Notebooks
            {notebooks}
      </div>)
}
