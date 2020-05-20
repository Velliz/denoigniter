import { Client as MySqlClient } from "https://deno.land/x/mysql/mod.ts"

import { mysql } from "../../config/database.ts"

/**
 * Class DataBases Instance
 */
class DBI {

    client:any

    public async save(table:string, data:any) {
        this.client = await new MySqlClient().connect({
            hostname: mysql.host,
            username: mysql.user,
            db: mysql.dbName,
            password: mysql.pass,
        })

        let sql = `INSERT INTO ${table} (`
        let length = Object.keys(data).length
        let values = []
        let pos = 0
        for (const k in data) {
            if ((length - 1) !== pos) {
                sql += `\`${k}\`,`
            } else {
                sql += `\`${k}\``
            }
            pos++
        }
        sql += `) VALUES (`
        pos = 0
        for(const k in data) {
            values.push(data[k])
            if ((length - 1) !== pos) {
                sql += `?,`
            } else {
                sql += `?`
            }
            pos++
        }
        sql += `)`
        
        let res = await this.client.execute(sql, values)
        
        await this.client.close()
        
        return res
    }

    update(where:any, data:any) {

    }

    delete(where:any) {

    }

    run(where:any) {

    }

    firstRow(where:any) {

    }

    getData(where:any) {

    }

}

export default DBI