import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

/*handler.get(async (req, res) => {
  let doc = await req.db.collection("daily").findOne();
  console.log(doc);
  res.json(doc);
});*/

handler.post(async (req, res) => {
  const { sleep, mood } = req.body;
  if (err) throw err;
  res.status(201).json({});
});

export default handler;
