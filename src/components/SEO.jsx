import { useEffect } from "react";

const SITE_URL = "https://www.scaligerafood.it";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/og/scaligera-food.jpg",
  imageAlt = "Scaligera Food, ristoranti a Verona e Villafranca di Verona",
  type = "website",
  robots = "index, follow",
  structuredData,
}) {
  const url = new URL(path, SITE_URL).href;
  const imageUrl = new URL(image, SITE_URL).href;

  useEffect(() => {
    document.querySelectorAll("[data-seo-static]").forEach((element) => element.remove());
  }, []);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Scaligera Food" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData).replace(/</g, "\\u003c")}
        </script>
      )}
    </>
  );
}
