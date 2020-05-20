import DBI from "../plugins/dbi/dbi.ts"

/**
 * @desc    example routes
 * @route   GET /api/v1/products
 */
const getSamples = ({ response }: { response: any }) => {

    let db = new DBI()
    let save:any = db.save(`users`, {
        name: "Didit Velliz",
        age: 27,
        gadget: "Samsung"
    })

    response.body = {
        success: true,
        data: "Welcome to DenoIgniter!",
        save
    }
}

export { getSamples }