export async function load({ params, fetch }) {
	const page = Number(params.page);

	async function getProducts(page: number) {
		const limit = 10;
		const res = await fetch(
			`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
		);
		const data = await res.json();
		return data;
	}

	return {
		products: getProducts(page)
	};
}
