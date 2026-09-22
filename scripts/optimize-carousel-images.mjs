import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDirectory = 'static/images';
const outputDirectory = path.join(sourceDirectory, 'carousel');
const widths = [640, 960, 1365];

await mkdir(outputDirectory, { recursive: true });

const sourceImages = (await readdir(sourceDirectory))
	.filter((file) => /^\d+\.webp$/.test(file))
	.sort((a, b) => Number.parseInt(a) - Number.parseInt(b));

await Promise.all(
	sourceImages.flatMap((file) => {
		const name = path.basename(file, '.webp');

		return widths.map((width) =>
			sharp(path.join(sourceDirectory, file))
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 76, effort: 6 })
				.toFile(path.join(outputDirectory, `${name}-${width}.webp`))
		);
	})
);

console.log(`Generated ${sourceImages.length * widths.length} responsive carousel images.`);
