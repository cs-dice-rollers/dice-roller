import _ from 'lodash';

import {
  ROLLING_DICE,
  DICE_ROLLED,
} from '../constants/action-types';

const initialState = {
  rolling: false,
  rolls: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROLLING_DICE: {
      const updatedState = _.cloneDeep(state);
      return Object.assign(updatedState, {
        rolling: true,
      });
    }
    case DICE_ROLLED: {
      const updatedState = _.cloneDeep(state);
      return Object.assign(updatedState, {
        rolling: false,
        rolls: [action.number].concat(state.rolls),
      });
    }
    default:
      return state;
  }
};
