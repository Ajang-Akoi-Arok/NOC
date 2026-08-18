import { SITE_URL, SITE_NAME } from './seo';

// Organization/NGO structured data using only information that is
// actually and consistently present on the site (name, URL, logo,
// description, email, city/country). Phone number is deliberately
// omitted: the Contact page currently shows a literal placeholder
// ("+211 XXX XXX XXX") that doesn't match the Footer's number, so
// neither is verified — see the SEO report. Social profile links
// ("sameAs") are omitted too since the footer's social icons are
// placeholder "#" links, not real profile URLs.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/noc_logo.png`,
  description:
    'Nile Orphan Care supports orphaned and vulnerable children in South Sudan through education, child protection, nutrition, healthcare, and youth empowerment programs.',
  email: 'info@nileorphancare.org',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Juba',
    addressCountry: 'SS',
  },
};

export default organizationSchema;
