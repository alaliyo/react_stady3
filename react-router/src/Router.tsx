import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from "./page/Home";
import About from './page/About';
import NotFound from "./page/NotFound";
import User from './page/User';
import Followers from './page/Followers';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "user/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />,
                    }
                ]
            },
        ],
        errorElement: <NotFound />
    },
]);

export default router;