async function get(req, res, next) {
  try {
    res.status(200).send("this is get method is called");
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    res.status(200).send("this updata is successful");
  } catch (error) {
    next(error);
  }
}

async function post(req, res, next) {
    console.log(req.params)
  res.status(200).send("this is post method is called and its id " + req.params.id);
}
export default { get, update, post };
