import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://wongjulian4213:1234567890@plant-pmubx.azure.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export async function database() {
  if (!client.isConnected()) await client.connect();
  return client.db("Plant");
}
