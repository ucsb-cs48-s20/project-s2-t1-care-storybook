export function extractState(req) {
  if (!req.body) return null;

  const { mood, sleep } = req.body;

  return {
    mood,
    sleep,
  };
}
