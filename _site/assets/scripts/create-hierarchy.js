export const getItemId = (item, config) => {
  return item && (item[config.id] || item);
};

export const makeLevel = (item, config) => {
  return {
    [config.id]: getItemId(item, config),
    [config.targetSet]: [],
    [config.ids]: {}
  }
};

export const getItemIfExistsInLevel = (level, item, config) => {
  return level[config.targetSet]
          [level[config.ids]
            [getItemId(item, config)]];
};

export const createItemInLevel = (level, item, config) => {
  const newLevel = makeLevel(item, config);
  level[config.targetSet].push(newLevel);
  level[config.ids][getItemId(item, config)] = level[config.targetSet].length - 1;
  return newLevel;
};

export const addItemToLevel = (level, item, config) => {
  return (getItemIfExistsInLevel(level, item, config)
    || createItemInLevel(level, item, config)
    );
};

export const createHierarchy = (data, config) => {
  const hierarchy = makeLevel('root', config);

  data[config.sourceSet].forEach(
    (item) => {
      let current = hierarchy;

      item[config.ancestors].forEach(
        (ancestor) => {
          return (current = addItemToLevel(
            current,
            { [config.id]: ancestor },
            config
          ));
        }
      );

      current[config.targetSet].push(item);
    }
  );

  return hierarchy;
};
