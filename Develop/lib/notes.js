// delete, newNote
const fs = require("fs");

const readFiles = util.promisify(fs.reaFile);
const writeFiles = util.promisify(fs.writeFile);
