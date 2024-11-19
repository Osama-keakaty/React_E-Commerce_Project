import {SET_CURRENT_TYPES} from './user.types'
import { createAction } from "../../utils/reducer/reducer.utils"
// you have to call dispatch function to pass the action into it to change the action in userReducer
export const setCurrentUser = (user) => createAction(SET_CURRENT_TYPES.SET_CURRENT_USER,user);
    