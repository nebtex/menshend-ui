var jsonServer = require('json-server')
var server = jsonServer.create()
var path = require('path')
var router = jsonServer.router(path.join(__dirname, 'db.json'))
var middlewares = jsonServer.defaults()

server.use(middlewares)

// Default routes
server.get('/v1/adminServices/roles/role-0/subdomain-0', function (req, res) {
  res.jsonp({
    "id": "roles/role-0/subdomain-0",
    "roleId": "role-0",
    "logo": "http://placehold.it/64x64",
    "name": "SkyCenta",
    "shortDescription": "Non tempor ante facilisis sagittis scelerisque orci morbi sed eti.",
    "longDescription": "Leo viverra pretium lobortis consectetur eros. Elit condimentum etiam metus nunc gravida imperdiet. Orci aliquet au eget, neque nibh facilisis.",
    "longDescriptionUrl": "skycenta.gov/longDescription",
    "proxyCode": "__ === your code here ===",
    "proxyCodeLanguage": 0,
    "impersonateWithinRole": false,
    "isActive": true,
    "csrf": false,
    "strategy": 0,
    "cache": {
      "active": false,
      "ttl": 0
    },
    "cors": {
      "allowedOrigins": [
        "string"
      ],
      "allowedMethods": [
        "string"
      ],
      "allowedHeaders": [
        "string"
      ],
      "allowCredentials": true,
      "optionsPassthrough": false,
      "maxAge": false,
      "exposedHeaders": [
        "string"
      ]
    },
    "secretPaths": [
      "string"
    ]
  })
});

server.put('/v1/adminServices/roles/role-0/subdomain-0', function (req, res) {
  res.jsonp(req.body);
});

server.delete('/v1/adminServices/roles/role-0/subdomain-0', function (req, res) {
  res.jsonp({});
});

server.use(jsonServer.rewriter({
  '/v1/clientServices': '/clientServices'
}));

server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})