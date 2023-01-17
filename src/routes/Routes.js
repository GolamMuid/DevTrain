import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Homepage from "../pages/homepage/Homepage";

const router = createBrowserRouter([
	{
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Homepage />,
			},
		],
	},
]);

export default router;
