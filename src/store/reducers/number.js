const defaultState={
    number:0
    
}
const reducer=(state=defaultState,action)=>{
    const newState={...state}
    switch(action.type){
 
        case "plus":
        newState.number += action.payLoad;
        break

        case "mines":
            newState.number -= action.payLoad;
        break

    
    }
return newState;

}
export default reducer;