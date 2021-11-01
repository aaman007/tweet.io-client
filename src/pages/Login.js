import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAction } from "../store/actions/auth";
import { register as registerUrl } from "../urls";
import AuthForm from "../components/form/AuthForm";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFormSubmit = data => {
        dispatch(loginAction(data, history));
    }

    return (
        <AuthForm
            title={"Login to tweets.io"}
            buttonText={"Login"}
            onSubmit={handleFormSubmit}
            formSwitchInfo={{
                text: 'Don\'t Have An Account?',
                title: 'Register',
                url: registerUrl()
            }}
        />
    );
};

export default Login;