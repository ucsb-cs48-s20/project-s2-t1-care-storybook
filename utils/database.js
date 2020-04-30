import { MongoClient } from "mongodb";
import config from "./config";

const client = new MongoClient(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function database() {
  if (!client.isConnected()) await client.connect();
  return client.db("Plant");
}
