module.exports = (req, res, next) => {
  if (req.credits < 1) {
    return res.status(401).send({ error: "Not enough credits" });
  }

  next();
};
