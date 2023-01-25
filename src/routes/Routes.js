import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
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
		],
	},
]);

export default router;
