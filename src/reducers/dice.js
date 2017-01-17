const initialState = { rolls: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DICE_ROLLED':
      return Object.assign({}, state, {
        rolls: state.rolls.concat([action.number]),
      });
    default:
      return state;
  }
};
