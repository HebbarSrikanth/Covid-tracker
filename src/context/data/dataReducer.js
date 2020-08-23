import type from "../type";

export default (state,action)=>{

    switch (action.type) {
        case type.FETCH_DATA:return({
            ...state,
            covidTotal:action.payload
        })
        default:return state
    }
}