import { database } from "../../utils/database";
import { extractState } from "../../lib/api-helpers";

export async function getPlantLevel() {
  const client = await database();
}
