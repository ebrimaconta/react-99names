 
export default function action99names(state = {}, action:{type:string,payload:any}) {
    switch (action.type) {
        case "GET_USER":
            return action.payload;
        case "SIGNOUT":
                return {};
         
        default:
            return state;
    }
}