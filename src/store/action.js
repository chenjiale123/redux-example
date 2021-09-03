import { CHANGE_VALUE,ADD_VALUE } from './actionType'

export const changeValueAction=(value)=>({
    type: CHANGE_VALUE,
    value
})