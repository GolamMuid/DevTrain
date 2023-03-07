import { useQuery } from "@tanstack/react-query";

function useUserInfo() {
	let TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
	const { refetch, isLoading, isError, error, isSuccess, data } = useQuery({
		queryKey: ["userInfo"],
		queryFn: async () => {
			const res = await fetch(`https://devtrain.cyclic.app/api/v1/auth/me`, {
				headers: {
					Authorization: `Bearer ${TOKEN}`,
				},
			});
			const result = await res.json();
			const data = await result.data;
			return data;
		},
	});
	return [data, isLoading, isError, error, isSuccess, refetch];
}

export default useUserInfo;
