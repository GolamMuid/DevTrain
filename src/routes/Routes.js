import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import AddBootcampPage from "../pages/addBootcamp/AddBootcampPage";
import BootcampPage from "../pages/bootcamp/BootcampPage";
import BootcampsPage from "../pages/bootcamps/BootcampsPage";
import Homepage from "../pages/homepage/Homepage";
import LoginPage from "../pages/login/LoginPage";
import ManageBootcampPage from "../pages/manageBootcamp/ManageBootcampPage";
import ProfilePage from "../pages/profile/ProfilePage";

const router = createBrowserRouter([
	{
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Homepage />,
			},
			{
				path: "/bootcamps",
				element: <BootcampsPage />,
			},
			{
				path: "/bootcamps/:slug",
				element: <BootcampPage />,
			},
			{
				path: "/add-bootcamp",
				element: <AddBootcampPage />,
			},
			{
				path: "/manage-bootcamp/:id",
				element: <ManageBootcampPage />,
			},
			{
				path: "/profile",
				element: <ProfilePage />,
			},
		],
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

export default router;
