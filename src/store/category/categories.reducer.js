import {CATEGORIES_TYPES} from './categories.types'
const INITIAL_STATE={
    categories:[],
}
export const categoriesReducer = (state = INITIAL_STATE,action={})=>{
    const {type,payload} = action;
if (type===CATEGORIES_TYPES.SET_CATEGORIES){
return {
    ...state,
    categories:payload
}

}else{
    return state;
} 
}
