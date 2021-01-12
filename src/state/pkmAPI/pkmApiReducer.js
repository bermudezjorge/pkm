import { LOAD_DATA, ERROR_API } from "../actionTypes";

const initialState = {
  name: '',
  id: 0,
  sprite: '',
  err: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA: {
      const { name, id, sprite } = action.payload;
      return {
        ...state,
        name: name,
        id: id,
        sprite: sprite,
      };
    }

    case ERROR_API: {
      const { message } = action.payload;
      return {
        ...state,
        err: message
      };
    }
    
    default:
      return state;
  }
}
