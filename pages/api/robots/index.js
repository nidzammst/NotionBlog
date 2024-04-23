export default function handler(req, res) {
  const textSiteMap =
    'User-agent: *\nAllow: *\n# Host\nHost: https://mstblog.vercel.app\n\nSitemap: https://mstblog.vercel.app/sitemap.xml'
  res.send(textSiteMap)
}
