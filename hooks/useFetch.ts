import React from "react";
export const useFetch = (
	callback: () => void
): [() => void, boolean, string] => {
	const [error, setError] = React.useState("");
	const [loading, setLoding] = React.useState(false);

	const fetch = () => {
		try {
			setError("");
			setLoding(true);
			callback();
		} catch (e: any) {
			setError(e);
		} finally {
			setLoding(false);
		}
	};
	return [fetch, loading, error];
};
