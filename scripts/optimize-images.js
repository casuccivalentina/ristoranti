import path from "node:path"
import { mkdir } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const publicDir = path.join(root, "public")
const outputDir = path.join(publicDir, "optimized")

const images = [
  { source: "lagreca/pesce.png" },
  { source: "lagreca/forno.jpeg" },
  { source: "lagreca/paella.png" },
  { source: "lagreca/forno.jpg", output: "lagreca/forno-location.webp" },
  { source: "doppiozero/filetto.jpeg" },
  { source: "doppiozero/Pizzaviola.JPG" },
  { source: "doppiozero/piante.JPG" },
  { source: "doppiozero/vinop.JPG" },
  { source: "doppiozero/locale.jpeg" },
  { source: "doppiozero/tavoli.JPG" },
  { source: "doppiozero/mela.JPG" },
  { source: "doppiozero/pizzaiolo.JPG", output: "doppiozero/pizzaiolo-location.webp" },
  { source: "vecchialira/pizzacapr.png" },
  { source: "vecchialira/pizza.png" },
  { source: "vecchialira/tavolo.png" },
  { source: "vecchialira/vongole.png" },
  { source: "vecchialira/pizzaverd.png" },
  { source: "vecchialira/locale.png", output: "vecchialira/locale-location.webp" },
]

const toOutputPath = ({ source, output }) => {
  if (output) {
    return path.join(outputDir, output)
  }

  const imagePath = source
  const parsed = path.parse(imagePath)
  return path.join(outputDir, parsed.dir, `${parsed.name}.webp`)
}

await Promise.all(
  images.map(async (image) => {
    const input = path.join(publicDir, image.source)
    const output = toOutputPath(image)

    await mkdir(path.dirname(output), { recursive: true })

    await sharp(input)
      .rotate()
      .resize({
        width: 1400,
        withoutEnlargement: true,
      })
      .webp({
        quality: 72,
        effort: 6,
      })
      .toFile(output)
  })
)

console.log(`Optimized ${images.length} images in ${path.relative(root, outputDir)}`)
