import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthForm from "../components/form/AuthForm";
import { registerAction } from "../store/actions/auth";
import { login as loginUrl } from "../urls";

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFormSubmit = data => {
        dispatch(registerAction(data, history));
    }

    return (
        <AuthForm
            title={"Join now tweets.io"}
            buttonText={"Register"}
            showNameFields={true}
            onSubmit={handleFormSubmit}
            formSwitchInfo={{
                text: 'Already Have An Account?',
                title: 'Login',
                url: loginUrl()
            }}
        />
    );
};

export default Register;