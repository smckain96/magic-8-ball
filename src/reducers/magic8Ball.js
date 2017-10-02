export default(state = [], action) => {
  switch (action.type) {
    case 'MAGIC_8_BALL_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}
