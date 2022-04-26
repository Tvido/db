const {getAll} = require("./getAll")

const getById = async (itemId) => {
  try {
    const items = await getAll();
    const selectItem = items.find(
      (item) => String(item.id) === String(itemId)
    );
    if (!selectItem) {
      return null;
    }
    return selectItem;
  } catch (error) {
    throw error;
  }
};

module.exports = getById;