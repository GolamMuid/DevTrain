import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import BootcampPage from "../pages/bootcamp/BootcampPage";
import BootcampsPage from "../pages/bootcamps/BootcampsPage";
import Homepage from "../pages/homepage/Homepage";

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
		],
	},
]);

export default router;
