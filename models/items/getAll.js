const fs = require("fs/promises");

const filePath = require("./filePath");

const getAll = async () => {
  try {
    const data = await fs.readFile(filePath);
    const items = JSON.parse(data);
    return items;
  } catch (err) {
    throw err;
  }
};

module.exports = getAll;