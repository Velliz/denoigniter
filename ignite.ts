import { Application } from "https://deno.land/x/oak/mod.ts"

import app from "./config/app.ts"
import router from "./config/router.ts"

const application = new Application()

application.use(router.routes())
application.use(router.allowedMethods())

console.log(`Server ignited and listening on port ${app.port}`)

await application.listen({
    port:app.port
})