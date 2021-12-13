import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { createANotebook } from '../../store/notebooks'
import '../../components/NotebooksList/NotebookList.css'

function AddNotebookForm({ setShowModal }) {
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
    dispatch(createANotebook(title))
    setShowModal(false)
    history.push(`/notebooks`)
  }

  return (
    <form className='modal-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li className='modal-errors' key={idx}>{error}</li>)}
      </ul>
      <label className='modal-form-label'>
        Title
        <input
          className='modal-form-input'
          placeholder='Title for your notebook'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <button disabled={errors.length} type="submit">Create</button>
    </form>
  );
}

export default AddNotebookForm
