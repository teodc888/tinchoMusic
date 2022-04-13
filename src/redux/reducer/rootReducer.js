import { GET_PERSONAS } from "../actions/actionsTypes";

const inicialState = {
  personas: [],
};

export default function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_PERSONAS:
      return {
        ...state,
        personas: action.payload,
      };
    default:
      return state;
  }
}
