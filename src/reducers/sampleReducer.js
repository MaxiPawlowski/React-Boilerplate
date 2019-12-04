
import { changeData } from 'actions';

const initialState = {
  data: '',
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeData.toString():
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default sampleReducer;
