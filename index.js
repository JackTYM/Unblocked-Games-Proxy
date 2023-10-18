const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const target = 'https://games.jacktym.dev';

const server = http.createServer(function (req, res) {
  req.headers.host = new URL(target).host;
  proxy.web(req, res, { target });
});

server.listen(80);
