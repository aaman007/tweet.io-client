import { Link } from "react-router-dom";
import { useState } from "react";
import classes from './AuthForm.module.css';
import Input from "../Input";
import Button from "../../ui/Button";
import Card from "../../ui/Card";


const formValidation = data => {
    if (!data.username || data.username.length === 0) {
        return false;
    }
    else if(!data.password || data.password.length < 8) {
        return false;
    }
    return true;
}


const AuthForm = ({ title, buttonText, showNameFields, onSubmit, formSwitchInfo }) => {
    const [formData, setFormData] = useState({});
    const [forceBlur, setForceBlur] = useState(false);
    const hasError = !formValidation(formData);

    const handleSubmit = event => {
        event.preventDefault();
        if (hasError) {
            setForceBlur(true);
            return;
        }
        onSubmit(formData);
    };

    const renderNameFields = () => {
        return (
            <>
                <Input
                    id={"firstname"}
                    label={"First Name"}
                    forceBlur={forceBlur}
                    validator={value => {
                        setFormData(prev => ({ ...prev, first_name: value.trim() }));
                        return true;
                    }}
                    inputProps={{
                        type: "text",
                        placeholder: "First Name"
                    }}
                />
                <Input
                    id={"lastname"}
                    label={"Last Name"}
                    forceBlur={forceBlur}
                    validator={value => {
                        setFormData(prev => ({ ...prev, last_name: value.trim() }));
                        return true;
                    }}
                    inputProps={{
                        type: "text",
                        placeholder: "Last Name"
                    }}
                />
            </>
        )
    }

    return (
        <Card className={classes.formCard}>
            <h2 className={classes.formTitle}> { title } </h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Input
                    id={"username"}
                    label={"Username"}
                    forceBlur={forceBlur}
                    initialError={true}
                    errorText={'Username cannot be empty.'}
                    validator={value => {
                        value = value.trim();
                        setFormData(prev => ({ ...prev, username: value }))
                        return value.length !== 0;

                    }}
                    inputProps={{
                        type: "text",
                        placeholder: "Username"
                    }}
                />

                { showNameFields && renderNameFields() }

                <Input
                    id={"password"}
                    label={"Password"}
                    forceBlur={forceBlur}
                    initialError={true}
                    errorText={'Password must be at least 8 characters.'}
                    validator={value => {
                        value = value.trim();
                        setFormData(prev => ({ ...prev, password: value }))
                        return value.length >= 8;

                    }}
                    inputProps={{
                        type: "password",
                        placeholder: "Password"
                    }}
                />
                <div className={classes.buttonWrapper}>
                    <Button className={classes.button}> { buttonText } </Button>
                </div>
            </form>

            <div className={classes.formSwitchWrapper}>
                { formSwitchInfo.text } <Link to={formSwitchInfo.url}> {formSwitchInfo.title} </Link>
            </div>
        </Card>
    );
}

export default AuthForm;