import { rm } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, "..", "dist")
const extensions = new Set([".jpg", ".jpeg", ".png"])
const unusedFiles = ["vecchialira/video.mp4"]

async function removeOriginalImages(dir) {
  const entries = await import("node:fs/promises").then(({ readdir }) =>
    readdir(dir, { withFileTypes: true })
  )

  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        await removeOriginalImages(entryPath)
        return
      }

      if (extensions.has(path.extname(entry.name).toLowerCase())) {
        await rm(entryPath)
      }
    })
  )
}

await removeOriginalImages(distDir)
await Promise.all(
  unusedFiles.map((file) =>
    rm(path.join(distDir, file), {
      force: true,
    })
  )
)
console.log("Removed original JPG/PNG images from dist")
