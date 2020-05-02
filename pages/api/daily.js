import { database } from "../../utils/database";

async function getUser(req) {
  const { email } = req.body;

  if (!name) {
    throw {
      status: 400,
      message: "Missing Email",
    };
  }

  const client = await database();
  const users = client.collection("users");

  const query = {
    email,
  };

  return users.findOne(query);
}

async function updatePlantLevel(req) {
  const { user } = req.body;

  if (!user) {
    throw {
      status: 400,
      message: "Missing User",
    };
  }

  const client = await database();
  const users = client.collection("users");

  const query = {
    user,
  };

  const mutation = {
    $setOnInsert: {
      user,
    },
    $inc: {
      PlantLevel: req.body.plantLevel,
    },
  };

  const result = await users.findOneAndUpdate(query, mutation, {
    upsert: true,
    returnOriginal: false,
  });

  return result.value;
}

async function performAction(req) {
  switch (req.method) {
    case "GET":
      return getUser(req);
    case "POST":
      return updatePlantLevel(req);
  }
  throw { status: 405 };
}

export default performAction;
