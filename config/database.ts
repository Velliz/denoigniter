const mysql:Database =  {
    host: "localhost",
    user: "root",
    pass: "",
    dbName: "denoigniter",
    port: 3306,
    cache: false
}

interface Database {
    host: string
    user: string
    pass: string
    dbName: string
    port: number
    cache: boolean
}

export { mysql }