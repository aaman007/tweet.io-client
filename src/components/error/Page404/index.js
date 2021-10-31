import { useHistory } from 'react-router-dom';
import classes from './Page404.module.css';
import Button from "../../ui/Button";

const Page404 = () => {
    const history = useHistory();

    const handlePreviousClick = () => {
        history.goBack();
    }

    return (
        <div className={classes.page}>
            <div className={classes.title}> Page Not Found! </div>
            <div className={classes.description}>
                The page you are looking for could not be found!
            </div>
            <Button onClick={handlePreviousClick}> Back to previous page </Button>
        </div>
    )
};

export default Page404;