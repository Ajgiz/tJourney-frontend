import useSwr from "swr";

export const useGetFetch = <R>(key: string, fetch: () => Promise<R>) => {
	const { data, error } = useSwr(key, fetch);
	return {
		loading: !error && !data,
		isError: error,
		data,
	};
};
