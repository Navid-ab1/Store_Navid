const path = require('path')

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'store',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'Db381n#@',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
            port: process.env.DB_PORT || 3306,
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
