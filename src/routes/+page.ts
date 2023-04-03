export async function load({ url }) {
	const limit = Number(url.searchParams.get('l')) || 10;
	const skip = Number(url.searchParams.get('s')) || 0;

	async function getProducts(limit: number = 10, skip: number = 0) {
		const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
		const data = await res.json();
		data.total = 88;
		return data;
	}

	return {
		products: getProducts(limit, skip)
	};
}
