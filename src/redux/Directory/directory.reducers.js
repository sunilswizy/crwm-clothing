import directory_data from "./directory.data"

const initialState = {
  sections: directory_data
}


const directoryReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer