import {USER} from '../actions/actionTypes'
const initialState={
    user:[]
}
 const reducer=(state=initialState,action)=>{
    switch(action.type){
        case USER:
console.log(state,action)
                return{...state,
                    // user:action.user
}
default:
console.log(state)
return state;
    }

}
export default reducer;