import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {
	for (let i = 0; i < 100; i++) {
		await prisma.song.create({
			data: {
				title: faker.music.songName(),
				artist: faker.name.fullName(),
				genre: faker.music.genre()
			}
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
