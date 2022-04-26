const updateItem = require("./updateItem");
const getAll = require("./getAll");


const remove = async (itemId) => {
  try {
    const items = await getAll();
    const idx = items.findIndex(
      (item) => String(item.id) === String(itemId)
    );
    if (idx === -1) {
      return null;
    };

    const newItems = items.filter(
      item => String(item.id) !== String(itemId)
    )

    await updateItem(newItems);
    return items[idx];

  } catch (error) {
    next(error);
  }
};

module.exports = remove;