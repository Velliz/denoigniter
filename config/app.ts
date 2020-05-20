const app:App = {
    appname: "denoigniter",
    port: 5000,
    cache: {
        kind: "",
        expired: 10000,
        host: "localhost",
        port: 11211
    },
    logs: {
        slack: {
            url: "",
            secure: "",
            username: "",
            active: false
        },
        hook: {
            url: "",
            secure: "",
            username: "",
            active: false
        },
    }
};

interface Logs {
    url: string
    secure: string
    username: string
    active: boolean
}

interface Cache {
    kind: string
    expired: number
    host: string
    port: number
}

interface App {
    appname: string
    port: number
    cache: Cache
    logs: {
        slack: Logs,
        hook: Logs
    }
}

export default app