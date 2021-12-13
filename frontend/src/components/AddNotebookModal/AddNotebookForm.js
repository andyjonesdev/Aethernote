import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { createANotebook } from '../../store/notebooks'
import '../../components/NotebooksList/NotebookList.css'

function AddNotebookForm() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createANotebook(title))
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
      <button type="submit">Create</button>
    </form>
  );
}

export default AddNotebookForm
