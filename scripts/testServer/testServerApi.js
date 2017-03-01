var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)

// Custom responses for /v1/api/admin/role/:roleId/service/:serviceId
// server.put('/v1/api/admin/role/:roleId/service/:serviceId', function (req, res, next) {
//   // res.jsonp(req.body)
//   next()
// })


// Default routes
server.use(jsonServer.rewriter({
  "/v1/api/admin/role/:roleId/service/:serviceId": "/adminService/:serviceId?roleId=:roleId",
  "/v1/api/client/services": "/clientServices",
  "/v1/api/client/status": "/clientStatus"
}))

server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})