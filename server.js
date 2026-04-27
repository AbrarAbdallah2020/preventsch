const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 8080);
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon",
};

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  res.end(body);
}

function safePathFromUrl(reqUrl) {
  const url = new URL(reqUrl, "http://localhost");
  const decoded = decodeURIComponent(url.pathname);
  const pathname = decoded === "/" ? "/index.html" : decoded;
  const normalized = path.normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, "");
  return path.join(ROOT, normalized);
}

const server = http.createServer((req, res) => {
  if (!req.url) {
    send(res, 400, { "Content-Type": "text/plain; charset=utf-8" }, "Bad request");
    return;
  }

  const filePath = safePathFromUrl(req.url);
  if (!filePath.startsWith(ROOT)) {
    send(res, 403, { "Content-Type": "text/plain; charset=utf-8" }, "Forbidden");
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      send(res, 404, { "Content-Type": "text/plain; charset=utf-8" }, "Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || "application/octet-stream";

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        send(res, 500, { "Content-Type": "text/plain; charset=utf-8" }, "Server error");
        return;
      }
      send(res, 200, { "Content-Type": type, "Cache-Control": "no-cache" }, data);
    });
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`PrevenTech local server running at http://localhost:${PORT}`);
});

