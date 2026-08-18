import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../config/seo';

/**
 * Per-page SEO tags: title, meta description, canonical, Open Graph,
 * Twitter card, and optional JSON-LD structured data.
 *
 * Note: because this is a client-rendered (CRA) app with no
 * server-side rendering, these tags are injected after JS executes.
 * Googlebot renders JS and will see them for indexing, but crawlers
 * that don't execute JS (Facebook/LinkedIn/Slack link-preview bots)
 * will only ever see the static tags in public/index.html — see the
 * SEO report for the prerendering recommendation that fixes this.
 */
const SEO = ({ title, description, path = '/', image = DEFAULT_OG_IMAGE, type = 'website', jsonLd, noindex = false }) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
