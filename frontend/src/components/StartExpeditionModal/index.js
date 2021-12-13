import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';

function StartExpeditionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='splash-button' onClick={() => setShowModal(true)}>Start your expedition</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default StartExpeditionModal;
