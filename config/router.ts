import { Router } from "https://deno.land/x/oak/mod.ts"

import { getSamples } from "../controller/samples.ts"

const router = new Router()

router.get('/', getSamples)

export default router