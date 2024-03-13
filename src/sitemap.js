import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async (req, res) => {
  // List of pages for sitemap
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/process', changefreq: 'daily', priority: 0.7 },
    { url: '/contacts', changefreq: 'daily', priority: 0.7 },
    { url: '/about-us', changefreq: 'daily', priority: 0.7 },
    // add more routes here
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}/` });

  res.writeHead(200, {
    'Content-Type': 'application/xml'
  });

  const sitemap = Readable.from(links).pipe(stream);
  streamToPromise(sitemap).then((sm) => res.end(sm.toString()));
};