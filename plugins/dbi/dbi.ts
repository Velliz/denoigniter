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
        sql += `);`
        
        let res = await this.client.execute(sql, values)
        
        await this.client.close()
        
        return res
    }

    public async update(table:string, where:any, data:any) {
        this.client = await new MySqlClient().connect({
            hostname: mysql.host,
            username: mysql.user,
            db: mysql.dbName,
            password: mysql.pass,
        })

        let sql = `UPDATE ${table} SET `
        let length = Object.keys(data).length
        let values = []
        let pos = 0
        for (const k in data) {
            values.push(data[k])
            if ((length - 1) !== pos) {
                sql += `\`${k}\` = ?, `
            } else {
                sql += `\`${k}\` = ?`
            }
            pos++
        }
        sql += ` WHERE `
        length = Object.keys(where).length
        pos = 0
        for(const k in where) {
            values.push(where[k])
            if ((length - 1) !== pos) {
                sql += `\`${k}\` = ?, `
            } else {
                sql += `\`${k}\` = ?`
            }
            pos++
        }
        sql += `;`

        let res = await this.client.execute(sql, values)
        
        await this.client.close()
        
        return res
    }

    public async delete(table:string, where:any) {
        this.client = await new MySqlClient().connect({
            hostname: mysql.host,
            username: mysql.user,
            db: mysql.dbName,
            password: mysql.pass,
        })

        let sql = `DELETE FROM ${table} WHERE `
        let length = Object.keys(where).length
        let values = []
        let pos = 0
        for(const k in where) {
            values.push(where[k])
            if ((length - 1) !== pos) {
                sql += `\`${k}\` = ? AND `
            } else {
                sql += `\`${k}\` = ?`
            }
            pos++
        }
        sql += `;`

        console.log(sql, values)


        let res = await this.client.execute(sql, values)
        
        await this.client.close()
        
        return res
    }

    run(where:any) {

    }

    firstRow(where:any) {

    }

    getData(where:any) {

    }

}

export default DBI