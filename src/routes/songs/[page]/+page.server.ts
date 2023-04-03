import { prisma } from '$lib/server/prisma';

export async function load({ params }) {
	const page = Number(params.page);
	async function getSongs() {
		const limit = 10;
		const songs = await prisma.song.findMany({
			skip: (page - 1) * limit,
			take: limit
		});
		return songs;
	}

	return {
		songs: getSongs(),
		totalSongs: prisma.song.count()
	};
}
