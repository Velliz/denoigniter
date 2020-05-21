import DBI from "../plugins/dbi/dbi.ts"

/**
 * @desc    example routes
 * @route   GET /api/v1/products
 */
const getSamples = async ({ response }:{ response: any }) => {

    let db = new DBI()
    let x = await db.save(`users`, 
        {
            name: "Velliz",
            age: 27,
            gadget: "Samsung"
        }
    )

    response.body = {
        success: true,
        data: "Welcome to DenoIgniter!",
        x
    }
}

export { getSamples }