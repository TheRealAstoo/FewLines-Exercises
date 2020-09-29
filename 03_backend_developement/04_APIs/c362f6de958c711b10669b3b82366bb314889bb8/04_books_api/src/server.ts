// DO NOT CHANGE ANYTHING IN THIS FILE
import * as jsonServer from "json-server"

function startServer(repositories: object): Express.Application {
  if (!process.env.BASE_URL || !process.env.PORT) {
    throw new Error(
      "No 'BASE_URL' and `PORT` env variable\n=> run `source .env_vars`"
    )
  }
  const middlewares = jsonServer.defaults()
  const server = jsonServer.create()
  const router = jsonServer.router(repositories)
  server.use(middlewares)
  server.use(router)
  
  return server.listen(process.env.PORT, () => {
    console.log(`JSON Server is running on ${process.env.BASE_URL}`)
  })
}

export { startServer }
