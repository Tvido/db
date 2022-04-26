const fs = require("fs/promises");

const filePath = require("./filePath");

const updateItem = async (newItem) => {
  const itemsString = JSON.stringify(newItem);
  await fs.writeFile(filePath, itemsString);
};

module.exports = updateItem;