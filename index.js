const { server } = require("./dist/main")
const mongo = require("./dist/mongo")

mongo.open()
server.listen()
