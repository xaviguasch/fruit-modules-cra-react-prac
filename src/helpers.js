const choiceFunc = items => {
  const randomItem = items[Math.floor(Math.random() * items.length)]

  return randomItem
}

const removeItems = (items, item) => {
  const removedIt = items.filter(it => it !== item)

  return removedIt
}

export { choiceFunc, removeItems }
