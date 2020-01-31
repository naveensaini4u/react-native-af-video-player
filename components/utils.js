export const checkSource = (uri) => {
  return typeof uri === 'string' ?
    { uri: { uri } } : { uri: uri }
}
