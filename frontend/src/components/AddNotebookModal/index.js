import React, { useState, useEffect } from "react";

import '../NotebooksList/NotebookList.css'
import AddNotebookForm from './AddNotebookForm'
import { Modal } from '../../context/Modal';

function AddNotebookModal({ notebookId, title }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='add-notebook-button' onClick={() => setShowModal(true)}>Add Notebook</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div>Create Notebook: {title}</div>
          <AddNotebookForm />
        </Modal>
      )}
    </>
  );
}

export default AddNotebookModal
