import * as types from '../types';

type Reducer = {
  type: String;
  payload: any;
};

const counterReducer = (state = 0, { type }: Reducer) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
