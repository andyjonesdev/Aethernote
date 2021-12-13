import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { editANotebook } from '../../store/notebooks'
import '../LoginFormModal/LoginForm.css'

function EditNotebookForm({ notebookId, title:prevTitle, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = []
    if (!title.length) errors.push('Title cannot be blank')
    if (title.length > 30) errors.push('Title must be shorter than 30 characters')
    setErrors(errors)
  }, [title])


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editANotebook({notebookId, title}))
    setShowModal(false)
    history.push(`/notebooks`)
    // setErrors([]);
    // return dispatch(sessionActions.login({ credential, password }))
    //   .catch(async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   });
  }

  return (
    <form className='modal-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li className='modal-errors' key={idx}>{error}</li>)}
      </ul>
      <label className='modal-form-label'>
        New Title for {prevTitle}
        <input
          className='modal-form-input'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <button disabled={errors.length} type="submit">Update</button>
    </form>
  );
}

export default EditNotebookForm
