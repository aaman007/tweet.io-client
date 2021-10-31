import {useEffect, useReducer} from "react";
import classes from './Input.module.css';

const initialState = {
    value: '',
    isTouched: false,
    error: false
};

const types = {
    ON_INPUT: 'ON_INPUT',
    SET_ERROR: 'SET_ERROR',
    ON_BLUR: 'ON_BLUR'
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_INPUT:
            return {
                ...state,
                value: action.payload.value,
                error: action.payload.error
            };
        case types.SET_ERROR:
            return { ...state, error: action.payload };
        case types.ON_BLUR:
            return { ...state, isTouched: true }
        default:
            return state;
    }
};

const Input = ({ id, label, className, forceBlur, validator, initialError, errorText, inputProps }) => {
    const [state, dispatch] = useReducer(inputReducer, initialState);
    const showError = (state.isTouched || forceBlur) && state.error;
    const classNames = className ? `${classes.inputWrapper} ${className}` : classes.inputWrapper;

    useEffect(() => {
        dispatch({ type: types.SET_ERROR, payload: Boolean(initialError) })
    }, [initialError]);

    const handleOnChange = event => {
        const value = event.target.value;
        const error = !validator(value);
        dispatch({
            type: types.ON_INPUT,
            payload: {
                value: value,
                error: error
            }
        });
    };

    const handleOnBlur = () => {
        const error = !validator(state.value);
        dispatch({ type: types.ON_BLUR });
        dispatch({
            type: types.SET_ERROR,
            payload: error
        });
    };

    return (
        <div className={classNames}>
            <label htmlFor={id} className={classes.label}>
                {label}
            </label>
            <div>
                <input
                    className={showError ? `${classes.input} ${classes.invalid}` : classes.input}
                    id={id}
                    value={state.value}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    {...inputProps}
                />
                {showError && <p className={classes.error}> {errorText} </p>}
            </div>
        </div>
    )
};

Input.defaultProps = {
    id: '',
    label: '',
    input: {}
}

export default Input;