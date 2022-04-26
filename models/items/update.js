const updateItem = require("./updateItem");
const getAll = require("./getAll");

const update = async (itemId, body) => {
  try {
    const items = await getAll();
    const idx = items.findIndex(
      (item) => String(item.id) === String(itemId)
    );
    if (idx === -1) {
      return null;
    }
    items[idx] = { ...items[idx], ...body };
    await updateItem(items);
    return items[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;