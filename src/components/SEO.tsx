import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  const router = useRouter();
  const currentURL = `https://digicat.tech${url || router.asPath}`;

  const defaultTitle = 'Digicat - Digitalize sua Empresa';
  const defaultDescription = 'Transforme sua empresa com uma experiência digital interativa.';
  const defaultImage = 'https://digicat.com/default-og-image.jpg';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content="Digicat" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={currentURL} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:image:alt" content="Logotipo da Digicat" />

      {/* Canonical Link */}
      <link rel="canonical" href={currentURL} />

      {/* Preload Important Assets */}
      <link rel="preload" href="/icons/digicatlogo.svg" as="image" fetchPriority="high" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Digicat",
          "url": "https://digicat.tech",
          "logo": "https://digicat.com/default-og-image.jpg",
          "sameAs": [
            "https://www.facebook.com/DigicatOfficial",
            "https://twitter.com/DigicatOfficial",
            "https://www.instagram.com/DigicatOfficial"
          ]
        })}
      </script>

      {/* Sitemap Link */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Head>
  );
};

export default SEO;