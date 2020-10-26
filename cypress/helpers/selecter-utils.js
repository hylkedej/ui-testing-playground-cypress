export function startsWithSelector(startsWith) {
  return `[class^="${startsWith}"]`;
};

export function containsSelector(contains) {
  return `[class*="${contains}"]`;
};