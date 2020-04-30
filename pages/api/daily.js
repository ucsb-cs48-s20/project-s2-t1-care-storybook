import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { extractState } from "../../lib/api-helpers";

const handler = nextConnect();

handler.use(middleware);

/*handler.get(async (req, res) => {
  let doc = await req.db.collection("daily").findOne();
  console.log(doc);
  res.json(doc);
});*/

handler.post(async (req, res) => {
  const { sleep, mood } = req.body;
  res.status(201).json({
    body: extractState(req),
  });
});

handler.get(async (req, res) => res.json({ body: extractState(req) }));

export default handler;
