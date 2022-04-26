const { v4 } = require("uuid");

const getAll = require("./getAll");
const update = require("./update");

const add = async (body) => {
  try {
    const newItem = { ...body, id: v4() };
    const items = await getAll();
    items.push(newItem);
    await update(items);
    console.log(newItem);
    return newItem;
  } catch (error) {
    throw error;
  }
};

module.exports = add;