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

    case type.FETCH_HISTORICDATA:
      return {
        ...state,
        historicalData: action.payload
      }
    default:
      return state;
  }
};
