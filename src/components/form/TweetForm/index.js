import { useRef } from "react";
import classes from './TweetForm.module.css';
import Button from "../../ui/Button";
import {uiActions} from "../../../store/slices/ui";
import {useDispatch} from "react-redux";

const TweetForm = ({ onSubmit, buttonText, initialValue }) => {
    const dispatch = useDispatch();
    const tweetRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const value = tweetRef.current?.value.trim() || "";
        if (value.length === 0 || value.length > 120) {
            dispatch(uiActions.setAlert({
                type: 'error',
                title: 'Tweet Failed',
                description: 'Tweet must contains number of characters between 1 and 120.'
            }));
            return;
        }
        onSubmit(value);
        tweetRef.current.value = '';
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <textarea
                ref={tweetRef}
                className={classes.textarea}
            >
                {initialValue}
            </textarea>
            <hr />
            <Button className={classes.button}> {buttonText} </Button>
        </form>
    )
};

export default TweetForm;