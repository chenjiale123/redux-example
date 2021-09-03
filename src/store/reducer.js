import { CHANGE_VALUE,ADD_VALUE } from './actionType'
const defaultvalue={
  value:"write",
  list:['妈妈桑']
}
export default(state=defaultvalue,action)=>{


    console.log(state,action)
    if(action.type==CHANGE_VALUE){
        let newState=JSON.parse(JSON.stringify(state))
        newState.value=action.value
        return newState
    }
    if(action.type==ADD_VALUE){
        let newState=JSON.parse(JSON.stringify(state))

        console.log(action)
        newState.list.push(action.value)
        return newState
    }
    return state
}