import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const distDir = path.join(rootDir, "dist")
const template = await readFile(path.join(distDir, "index.html"), "utf8")
const siteUrl = "https://www.scaligerafood.it"
const homeTitle = "Scaligera Food | Ristoranti a Verona e Villafranca"

const pages = [
  {
    path: "la-greca",
    title: "La Greca | Ristorante Pizzeria a Villafranca di Verona",
    description: "Scopri La Greca, ristorante pizzeria in Viale Postumia 73 a Villafranca di Verona. Consulta il menù, gli orari e le indicazioni stradali.",
    image: "/og/la-greca.jpg",
    imageAlt: "Specialità di pesce del ristorante La Greca a Villafranca di Verona",
    name: "La Greca",
    address: "Viale Postumia, 73, 37069 Villafranca di Verona VR",
    phone: "+39 045 6304499",
    menu: "/menu/LagrecaMenu.pdf",
    addressData: { streetAddress: "Viale Postumia, 73", postalCode: "37069", addressLocality: "Villafranca di Verona", addressRegion: "VR", addressCountry: "IT" },
    openingHours: ["Mo-Su 12:00-14:30", "Mo-Su 19:00-23:00"],
    sameAs: ["https://www.facebook.com/pizzerialagreca/?locale=it_IT", "https://www.instagram.com/lagreca.villafranca?xtok=ZnFzMzRyZWJpbHF1&utm_source=qr"],
  },
  {
    path: "la-vecchia-lira",
    title: "La Vecchia Lira | Ristorante Pizzeria a San Massimo, Verona",
    description: "Scopri La Vecchia Lira, ristorante pizzeria in Via Calabria 7 a San Massimo, Verona. Consulta il menù, gli orari e le indicazioni stradali.",
    image: "/og/la-vecchia-lira.jpg",
    imageAlt: "Pizza della Vecchia Lira a San Massimo, Verona",
    name: "La Vecchia Lira",
    address: "Via Calabria, 7, 37139 San Massimo VR",
    phone: "+39 045 8901188",
    menu: "/menu/VecchialiraMenu.pdf",
    addressData: { streetAddress: "Via Calabria, 7", postalCode: "37139", addressLocality: "Verona", addressRegion: "VR", addressCountry: "IT" },
    openingHours: ["Mo-Su 12:00-14:30", "Mo-Su 19:00-23:30"],
    sameAs: ["https://www.facebook.com/VecchiaLiraSanMassimo/?locale=it_IT"],
  },
]

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
}

function validateTitle(html, expectedTitle, label) {
  const titles = [...html.matchAll(/<title\b([^>]*)>([^<]*)<\/title>/g)]

  if (titles.length !== 1) {
    throw new Error(`${label}: expected exactly one title, found ${titles.length}`)
  }

  const [, attributes, title] = titles[0]

  if (!/\bdata-seo-static\b/.test(attributes)) {
    throw new Error(`${label}: title is missing data-seo-static`)
  }

  if (title !== escapeHtml(expectedTitle)) {
    throw new Error(`${label}: expected title "${expectedTitle}", found "${title}"`)
  }
}

function render(page) {
  const url = `${siteUrl}/${page.path}`
  const image = `${siteUrl}${page.image}`
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${url}#restaurant`,
    name: page.name,
    url,
    image,
    telephone: page.phone,
    address: { "@type": "PostalAddress", ...page.addressData },
    openingHours: page.openingHours,
    hasMenu: `${siteUrl}${page.menu}`,
    sameAs: page.sameAs,
  }).replaceAll("<", "\\u003c")
  const head = `
    <link data-seo-static rel="canonical" href="${url}">
    <meta data-seo-static property="og:title" content="${escapeHtml(page.title)}">
    <meta data-seo-static property="og:description" content="${escapeHtml(page.description)}">
    <meta data-seo-static property="og:url" content="${url}">
    <meta data-seo-static property="og:type" content="restaurant">
    <meta data-seo-static property="og:site_name" content="Scaligera Food">
    <meta data-seo-static property="og:locale" content="it_IT">
    <meta data-seo-static property="og:image" content="${image}">
    <meta data-seo-static property="og:image:alt" content="${escapeHtml(page.imageAlt)}">
    <meta data-seo-static property="og:image:type" content="image/jpeg">
    <meta data-seo-static property="og:image:width" content="1200">
    <meta data-seo-static property="og:image:height" content="630">
    <meta data-seo-static name="twitter:card" content="summary_large_image">
    <meta data-seo-static name="twitter:title" content="${escapeHtml(page.title)}">
    <meta data-seo-static name="twitter:description" content="${escapeHtml(page.description)}">
    <meta data-seo-static name="twitter:image" content="${image}">
    <meta data-seo-static name="twitter:image:alt" content="${escapeHtml(page.imageAlt)}">
    <script data-seo-static type="application/ld+json">${structuredData}</script>`
  const content = `<main><article><h1>${escapeHtml(page.name)}</h1><p>${escapeHtml(page.description)}</p><address>${escapeHtml(page.address)}</address><p><a href="tel:${page.phone.replaceAll(" ", "")}">${escapeHtml(page.phone)}</a></p></article></main>`

  return template
    .replace(/<title\b[^>]*>.*?<\/title>/, `<title data-seo-static>${escapeHtml(page.title)}</title>`)
    .replace(/<meta data-seo-static name="description" content="[^"]*"\s*\/>/, `<meta data-seo-static name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/\s*<link data-seo-static rel="canonical"[\s\S]*?<meta data-seo-static name="twitter:image:alt"[^>]*\/?>/, "")
    .replace("</head>", `${head}\n  </head>`)
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${content}</div>`)
}

validateTitle(template, homeTitle, "home")

for (const page of pages) {
  const outputDir = path.join(distDir, page.path)
  const html = render(page)

  validateTitle(html, page.title, page.path)
  await mkdir(outputDir, { recursive: true })
  await writeFile(path.join(outputDir, "index.html"), html)
}

console.log(`Prerendered ${pages.length} restaurant pages`)
