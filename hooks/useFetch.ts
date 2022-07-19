import React from "react";

export const useFetch = <T>(
	callback: (arg?: T) => void
): [(arg?: T) => void, boolean, string] => {
	const [error, setError] = React.useState("");
	const [loading, setLoding] = React.useState(false);

	const fetch = (arg?: T) => {
		try {
			setError("");
			setLoding(true);
			callback(arg);
		} catch (e: any) {
			setError(e);
		} finally {
			setLoding(false);
		}
	};
	return [fetch, loading, error];
};
