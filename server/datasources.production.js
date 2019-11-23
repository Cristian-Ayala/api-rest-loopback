module.exports = {
  "mysql": {
    "host": process.env.DB_HOST,
    "port": "3306",
    "database": process.env.DB_NAME,
    "password": process.env.DB_PASS,
    "name": "mysql",
    "user": process.env.DB_USER,
    "connector": "mysql",
  }
}
