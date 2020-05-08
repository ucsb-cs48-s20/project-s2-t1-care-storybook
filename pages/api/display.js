import { database } from "../../utils/database";

async function getPlantLevel(req) {
  const { user } = req.body;

  if (!req.body) {
    throw {
      status: 400,
      message: "Missing User",
    };
  }

  const client = await database();
  const users = client.collection("users");

  const result = await users.findOne(
    { "user.sub": req.body.user.sub },
    { PlantLevel: 1 }
  );

  return result;
}

export default getPlantLevel;
