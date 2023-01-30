import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import AddBootcampPage from "../pages/addBootcamp/AddBootcampPage";
import BootcampPage from "../pages/bootcamp/BootcampPage";
import BootcampsPage from "../pages/bootcamps/BootcampsPage";
import Homepage from "../pages/homepage/Homepage";
import ManageBootcampPage from "../pages/manageBootcamp/ManageBootcampPage";

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
				path: "/bootcamp",
				element: <BootcampPage />,
			},
			{
				path: "/add-bootcamp",
				element: <AddBootcampPage />,
			},
			{
				path: "/manage-bootcamp",
				element: <ManageBootcampPage />,
			},
		],
	},
]);

export default router;
