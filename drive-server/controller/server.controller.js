import Folders from "../models/Folder.js";

async function folderCreate(req, res, next) {
  try {
    // console.log("folderCreate", req.body);
    const arr = await Folders.find();
    console.log("this is arr", arr);
    //to find out the search operation when same name as folder
    const body = {
      folderName: req.body.folderName,
      parentId: req.body.parentId,
    };
    arr.forEach((e) => {
      if (e.folderName === req.body?.folderName) {
        body.folderName = e.folderName + "(1)";
        return;
      }
    });
    const folder = new Folders(body);
    console.log(folder);
    const makeFolder = await folder.save();
    res.status(200).send("crated folder successfully");
    console.log(makeFolder);
  } catch (error) {
    next(error);
  }
}

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
  console.log(req.params);
  res
    .status(200)
    .send("this is post method is called and its id " + req.params.id);
}
export default { get, update, post, folderCreate };
