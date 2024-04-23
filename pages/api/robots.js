export default function handler(req, res) {
    res.send(`User-agent: *\nAllow: *\n# Host\nHost: https://mstblog.vercel.app/\n\nSitemap: https://mstblog.vercel.app/sitemap.xml`);
}