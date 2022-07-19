export const getQueryParams = <T>(query: T): string => {
	const queries = Object.entries(query).map((q) => q[1] && `&${q[0]}=${q[1]}`);
	return queries.join("").replace("&", "?");
};
