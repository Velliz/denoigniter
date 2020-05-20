const encryption:Encryption = {
    method: "AES-256-CBC",
    key: "122121231231",
    identifier: "denoigniter",
    cookies: "igniter",
    session: "igniter",
    expiredText: "Login to continue",
    errorText: "You don't have access in a moment"
}

interface Encryption {
    method: string
    key: string
    identifier: string
    cookies: string
    session: string
    expiredText: string
    errorText: string
}

export default encryption