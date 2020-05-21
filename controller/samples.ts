import DBI from "../plugins/dbi/dbi.ts"

/**
 * @desc    example routes
 * @route   GET /api/v1/products
 */
const getSamples = async ({ response }:{ response: any }) => {

    let db = new DBI()
    let x = await db.firstRow(`SELECT * FROM users`, [])

    response.body = {
        success: true,
        data: "Welcome to DenoIgniter!",
        x
    }
}

export { getSamples }