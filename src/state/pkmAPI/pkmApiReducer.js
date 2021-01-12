import { LOAD_DATA } from "../actionTypes";

const initialState = {
  name: '',
  id: 0,
  sprite: ''
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
    
    default:
      return state;
  }
}
