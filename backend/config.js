module.exports = {
    test: {
        dsn: "sqlite::memory:",
        dialect: "sqlite"
    },
    development: {
        dsn: "mysql://To-Do:todo@localhost/To-Do",
        dialect: "mysql"
    }
};