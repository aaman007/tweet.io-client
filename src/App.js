import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import Loader from "./components/ui/Loader";

const App = () => {
  return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
