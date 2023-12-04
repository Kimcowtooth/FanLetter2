import letters from "redux/modules/letters";
import member from "redux/modules/member";
import { configureStore } from "@reduxjs/toolkit";
import auth from "redux/modules/authSlice";

const store = configureStore({
    reducer : {
        letters,
        member,
        auth,
    }

})

export default store;
