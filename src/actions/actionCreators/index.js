import {PROFILE_SELECT, BEGIN_EDITING, END_EDITING} from "../types" ;

const profileSelected = () => {
    return {
        type: PROFILE_SELECT,  
    }
};

const beginEditing = () => {
    return {
        type: BEGIN_EDITING,  
    }
};

const endEditing = () => {
    return {
        type: END_EDITING,  
    }
};
