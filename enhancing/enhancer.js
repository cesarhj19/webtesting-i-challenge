function succeed(item) {
  if (item.enhancement < 20) {
    const newItem = {
      ...item,
      enhancement: item.enhancement + 1,
    };
    return newItem;
  }
  return item;
}

function fail(item) {
  if (item.enhancement < 15) {
    const newItem = {
      ...item,
      durability: item.durability - 5,
    };
    return newItem;
  }
  if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      const newItem = {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
      };
      return newItem;
    }
    const newItem = {
      ...item,
      durability: item.durability - 10,
    };
    return newItem;
  }
  return item;
}

function repair(item) {
  const newItem = {
    ...item,
    durability: 100,
  };
  return newItem;
}

function get(item) {
  return { ...item };
}

module.exports = {
  succeed,
  fail,
  repair,
  get,
};
