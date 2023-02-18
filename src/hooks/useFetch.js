import { useQuery } from "@tanstack/react-query";

// function useFetch(url, key) {
// 	const { isLoading, error, data } = useQuery({
// 		queryKey: [key],
// 		queryFn: async () => {
// 			const res = await fetch(url);
// 			const data = await res.json();
// 			return data;
// 		},
// 	});
// 	return [data, isLoading, error];

// 	// return useQuery(url, async () => {
// 	// 	const response = await fetch(url);
// 	// 	const data = await response.json();
// 	// 	return data;
// 	// });
// }

// export default useFetch;

const useFetch = (url, key) => {
	const { refetch, isLoading, isError, error, isSuccess, data } = useQuery({
		queryKey: [key],
		queryFn: async () => {
			const res = await fetch(url);
			const result = await res.json();
			const data = await result.data;
			return data;
		},
	});
	return [data, isLoading, isError, error, isSuccess, refetch];
};

export default useFetch;
