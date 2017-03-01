var jsonServer = require('json-server')
var server = jsonServer.create()
var path = require('path')
var router = jsonServer.router(path.join(__dirname, 'db.json'))
var middlewares = jsonServer.defaults()

server.use(middlewares)

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