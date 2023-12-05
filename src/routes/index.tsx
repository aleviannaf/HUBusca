import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/profile/:user"
                element={<ProfilePage/>}
            />
        </Route>
    )
)


export default router