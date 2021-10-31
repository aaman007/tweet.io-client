import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { uiActions } from "./store/slices/ui";
import Routes from "./routes/Routes";
import Loader from "./components/ui/Loader";

toast.configure();

const App = () => {
    const dispatch = useDispatch();
    const alertNotification = useSelector(state => state.ui.alert);

    useEffect(() => {
        if (alertNotification) {
            const timeout = setTimeout(() => {
                dispatch(uiActions.clearAlert({}));
            }, 5000);

            if (alertNotification.type === 'error') {
                toast.error(alertNotification.description, { autoClose: 5000 });
            }
            else {
                toast.success(alertNotification.description, { autoClose: 5000 });
            }

            return () => clearTimeout(timeout);
        }
    }, [dispatch, alertNotification]);

    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    );
}

export default App;
