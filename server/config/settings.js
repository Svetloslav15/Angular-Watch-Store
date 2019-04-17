module.exports = {
    development: {
        db: 'mongodb://localhost:27017/watch-store',
        port: 3000
    },
    production: {
        port: process.env.PORT,
        db: ""
    }
};