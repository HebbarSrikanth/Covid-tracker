import type from "../type";

export default (state, action) => {
  switch (action.type) {
    case type.FETCH_DATA:
      return {
        ...state,
        worldCasesInfo: action.payload,
        loading: false,
      };

    case type.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case type.SET_COUNTRYWISEDATA:
      return {
        ...state,
        countryWiseCases: action.payload
      }
    default:
      return state;
  }
};
