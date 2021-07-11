import fetch from "node-fetch";

export default async (req, res) => {
  // slugが存在しない場合は404を返す
  if (!req.query.slug) {
    return res.status(404).end();
  }

  const content = await fetch(
    `https://yuktnk-blog.microcms.io/api/v1/blog/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-API-KEY": process.env.apiKey || "" } }
  )
    .then((res) => res.json())
    .catch((error) => null);

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // 本来の記事のパスにリダイレクト
  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/${content.id}` });
  res.end("Preview mode enabled");
};
