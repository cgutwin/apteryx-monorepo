import mongoose, { Connection, Error } from "mongoose"

const connectionURL: string = ((process.env.MONGO_URL as unknown) as string) || ""

async function open(url = connectionURL) {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  }
  mongoose.connection.on("open", (): void => console.log(`Connected to ${connectionURL}.`))
  mongoose.connection.on("error", (err: Error): void => console.error(err))
  return mongoose.connect(url, options)
}

async function close(connection: Connection, force: boolean = false) {
  return connection.close(force)
}

export { open, close }
