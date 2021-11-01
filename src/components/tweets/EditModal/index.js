import Modal from "../../ui/Modal";
import classes from './EditModal.module.css';
import TweetForm from "../../form/TweetForm";

const EditModal = ({ onSubmit, onBackdropClick, initialValue }) => {
    return (
        <Modal onBackdropClick={onBackdropClick}>
            <div className={classes.editFormWrapper}>
                <TweetForm onSubmit={onSubmit} buttonText={"Update"} initialValue={initialValue} />
            </div>
        </Modal>
    );
};

export default EditModal;