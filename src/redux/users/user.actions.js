import { SET_CURRENT_USER } from "./user.types";

const userActions = user =>{
    return{ 
        type: SET_CURRENT_USER,
        payload: user
}
}
export default userActions;
