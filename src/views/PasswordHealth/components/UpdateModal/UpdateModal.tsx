import { ChangeEvent, FC, useCallback, useState } from 'react';
import Modal from 'react-modal';
import { IItem } from '~/services/getUserItems';
import updateItem from '~/services/updateItem';

interface IUpdateModal {
  item: IItem;
}

const UpdateModal: FC<IUpdateModal> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [newPass, setNewPass] = useState('');

  const openModal = useCallback(() => {
    setShowModal(true)
  }, [setShowModal])

  const closeModal = useCallback(() => {
    setNewPass('');
    setShowModal(false)
  }, [setNewPass, setShowModal])

  const onPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNewPass(event.target.value)
  }, [setNewPass])

  const handlePasswordChange = useCallback(async() => {
    await updateItem({
      ...item,
      password: newPass,
    })

    closeModal();
  }, [newPass, closeModal])

  return (
    <>
      <button className="update-btn" onClick={openModal}>
        Update Password
      </button>

      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Update Modal"
      >
        <h1>Update Password</h1>

        <p>for {item.title}</p>

        <input
          placeholder="Set new password"
          className="input"
          value={newPass}
          onChange={onPasswordChange}
        />

        {/* We could add some spinners/loading state here as well */}
        <div className="pt-24px text-center">
          <button className="button" onClick={handlePasswordChange}>Change</button>

          <button className="button ml-12px" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default UpdateModal
