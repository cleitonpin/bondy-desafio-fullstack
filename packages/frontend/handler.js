import fs from 'node:fs';
import http from 'node:http';

const BASE_PATH = './public'
const CONTENT_TYPES = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
}

const handler = (req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url
  const path = `${BASE_PATH}${url}`
  const contentType = CONTENT_TYPES[url.split('.').pop()] || 'text/plain'

  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('Not Found')
    } else {
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data)
    }
  })
}

const server = http.createServer(handler)


server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001')
})