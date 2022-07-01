module.exports = {
  "development": {
    "username": "MyNodeJSUser",
    "password": "MyNodeDBPassword",//your password here
    "database": "MyNodeJSUser",
    "host": "103.145.60.31",
    "dialect": "postgres",
    "port": 5432
    },
  "test": {
  "username": "root",
  "password": null,
  "database": "database_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
  },
  "production": {
  "username": "root",
  "password": null,
  "database": "database_production",
  "host": "127.0.0.1",
  "dialect": "mysql"
  }
 }