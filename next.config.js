/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			"leonardo.osnova.io",
			"www.blexar.com",
			"http://localhost:3000",
			"https://www.w3schools.com/w3images",
		],
	},
};

module.exports = nextConfig;
