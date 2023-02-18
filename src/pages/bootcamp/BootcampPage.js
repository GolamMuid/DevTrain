import React from "react";
import { useParams } from "react-router-dom";
import Bootcamp from "../../components/bootcamp/Bootcamp";

function BootcampPage() {
	const id = useParams();
	console.log(id);

	return (
		<div>
			<Bootcamp />
		</div>
	);
}

export default BootcampPage;
